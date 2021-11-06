const { AuthenticationError } = require('apollo-server-express');
const { resolvers } = require('.');
const { User, Team, Ticket, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        teams: async () => {
            return await Team.find();
        }, 
        ticket: async (parent, { team, name }) => {
            const params = {};

            if(team) {
                params.team = team; 
            } 
            if (name) { 
                params.name = {
                    $regex: name
                };
            }
            return await Ticket.find(params).populate('team');
        },
        ticket: async (parent, { _id }) => {
            return await Teams.findById(_id).populate('ticket');
        },
        user: async (parent, arg, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'order.tickets',
                    populate: 'team'
                });

                user.order.sort((a, b) => b.purchaseDate - a.purchaseDate);

                return user; 
            } 
            throw new AuthenticationError('Log in!!');
        }, 
        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'order.tickets',
                    populate: 'team'
                });
                return user.orders.id(_id);
            }
            throw new AuthenticationError('Log in!!!');
        }, 

        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const order = new Order({ tickets: args.tickets });
            const line_items = [];

            const { tickets } = await order.populate('tickets').execPopulate();

            for (let i = 0; i < tickets.length; i++) {
              const ticket = await stripe.tickets.create({
                name: tickets[i].name,
                description: tickets[i].description,
                images: [`${url}/images/${tickets[i].image}`]
              });

              const price = await stripe.prices.create({
                ticket: ticket.id,
                unit_amount: ticket[i].price * 100,
                currency: 'usd',
              });

              line_items.push({
                price: price.id,
                quantity: 1
              });
            }

            const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items,
              mode: 'payment',
              success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
              cancel_url: `${url}/`
            });
      
            return { session: session.id };

    }
},

Mutation: {
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
    }, 
    addOrder: async (parent, { tickets }, context) => {
        console.log(context);
        if (context.user) {
            const order = new Order({ tickets })

            await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
            
            return order;
        }

        throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
        if (context.user) {
            return await User.findByIdAndUpdate(context.user._id, args, { new:true });
        }
        throw new AuthenticationError('Not logged in');
    }, 
    updateTicket: async (parent, { _id, quantity }) => {
        const decrement = Math.abs(quantity) * -1; 

        return await Ticket.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    }, 
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email }); 

        if (!user) {
            throw new AuthenticationError('Incorrect credentials');
        }
        
        const correctPw = await  user.isCorrectPassword(password);

        if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials'); 
        }
        const token = signToken(user);
        
        return { token, user };
        }
    }
};

module.exports = resolvers;
                