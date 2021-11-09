const db = require('./connection');
const { User, Ticket, Team } = require('../models');

db.once('open', async () => {
  await Team.deleteMany();

  const teams = await Team.insertMany([
    { name: 'Brave ' },
    { name: 'Phillies' },
    { name: 'Blue Jays' },
    { name: 'Mets' },
    { name: 'Diamondbacks' },
    
  ]);

  console.log('teams seeded');

  await Ticket.deleteMany();

  const tickets = await Ticket.insertMany([
    {
      name: 'Angels',
      description:'Class aptent .',
      image: 'Angels.jpg',
      category: categories[0]._id,
      price: 59.99,
    },
    {
      name: 'Athletics',
      description:'Praesent sed lacinia rutrum .',
      image: 'athletics_small.gif',
      category: categories[0]._id,
      price: 59.99,
    },
    {
      name: 'bluejays',
      category: categories[1]._id,
      description:'Donec volutpat erat erat ipsum us.',
      image: 'blue_jays_small.png',
      price: 59.99,
    },
    {
      name: 'cincinnati',
      category: categories[1]._id,
      description:'Praesent placerat, odio vel euismod venenatis.',
      image: 'cincinnati_reds_logo_small.gif',
      price: 59.99,
    },
    {
      name: 'cleveland',
      category: categories[1]._id,
      description:'Vivamus ut turpis in purus.',
      image: 'cleveland_indians_small.png',
      price: 59.99,
    },
    {
      name: 'houston',
      category: categories[2]._id,
      description:'Vestibulum risus mvitae lobortis mi a leo.',
      image: 'huston_astros_small.jpg',
      price: 399.99,
    },
    {
      name: 'Tablet',
      team: teams[2]._id,
      description:'In sodales, ipsum quis.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      team: teams[3]._id,
      description:'Lorem ifend rutrum.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      team: teams[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      team: teams[4]._id,
      description:'Sed a mauris  sit amet.',
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      team: teams[4]._id,
      description:'Vestibulum et erat turpis.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      team: teams[4]._id,
      description:'Morbi consectetur vi.',
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('tickets seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        tickets: [tickets[0]._id, tickets[0]._id, tickets[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
