const db = require('./connection');
const { User, Ticket, Team } = require('../models');

db.once('open', async () => {
  await Team.deleteMany();

  const teams = await Team.insertMany([
    { name: 'Brave' },
    { name: 'Phillies' },
    { name: 'Blue Jays' },
    { name: 'Mets' },
    { name: 'Diamondbacks' },
    { name: 'Angels' },
    { name: 'Astros' },
    { name: 'Athletics' },
    { name: 'Minnesotatwins' },
    { name: 'Cardinals' },
    { name: 'Coloradorockies' },
    { name: 'Cubs' },
    { name: 'Dodgers' },
    { name: 'Giants' },
    { name: 'Indians' },
    { name: 'Mariners' },
    { name: 'Marlins' },
    { name: 'Nationals' },
    { name: 'Orioles' },
    { name: 'Rangers' },
    { name: 'Pirates' },
    { name: 'Rangers' },
    { name: 'Tampabayrays' },
    { name: 'Reds' },
    { name: 'Redsox' },
    { name: 'Tigers' },
    { name: 'Whitesox' },
    { name: 'Yankees' },
    { name: 'Padres' }

  ]);

  console.log('teams seeded');

  await Ticket.deleteMany();

  const tickets = await Ticket.insertMany([
    {
      name: 'Braves',
      description:'likyho ioug kjg',
      image: 'braves.gif',
      team: teams[0]._id,
      price: 50.00,
      quantity: 500
    },
    {
      name: 'Phillies',
      description:'asdas dasdasf',
      image: 'phillies.gif',
      team: teams[0]._id,
      price: 50.00,
      quantity: 500
    },
    {
      name: 'Bluejays',
      team: teams[1]._id,
      description: '',
      image: 'bluejays.png',
      price: 50.00,
      quantity: 20
    },
    {
      name: 'Mets',
      team: teams[2]._id,
      description:
        '',
      image: 'mets.gif',
      price: 50.00,
      quantity: 50
    },
    {
      name: 'Diamondbacks',
      team: teams[3]._id,
      description:
        '',
      image: 'diamondbacks.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Angels',
      team: teams[4]._id,
      description:
        '',
      image: 'Angels.jpg',
      price: 50.00,
      quantity: 30
    },
    {
      name: 'Astros',
      team: teams[5]._id,
      description:
        '',
      image: 'astros.jpg',
      price: 50.00,
      quantity: 30
    },
    {
      name: 'Athletics',
      team: teams[6]._id,
      description:
        '',
      image: 'athletics.gif',
      price: 50.00,
      quantity: 30
    },
    {
      name: 'Cardinals',
      team: teams[3]._id,
      description:
        '',
      image: 'cardinals.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Coloradorockies',
      team: teams[4]._id,
      description: '',
      image: 'coloradorockies.png',
      price: 50.00,
      quantity: 1000
    },
    {
      name: 'Cubs',
      team: teams[4]._id,
      description:
        '',
      image: 'cubs.gif',
      price: 50.00,
      quantity: 1000
    },
    {
      name: 'Diamondbacks',
      team: teams[4]._id,
      description:'',
      image: 'diamondbacks.png',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Dodgers',
      team: teams[4]._id,
      description:
        '',
      image: 'dodgers.gif',
      price: 50.00,
      quantity: 600
    },
    {
      name: 'Giants',
      team: teams[4]._id,
      description:
        '',
      image: 'giants.jpg',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Indians',
      team: teams[4]._id,
      description:
        '',
      image: 'indians.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Mariners',
      team: teams[4]._id,
      description:
        '',
      image: 'mariners.gif',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Marlins',
      team: teams[4]._id,
      description:
        '',
      image: 'marlins.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Mets',
      team: teams[4]._id,
      description:
        '',
      image: 'mets.gif',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Minnesotatwins',
      team: teams[4]._id,
      description:
        '',
      image: 'minnesottatwins.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Nationals',
      team: teams[4]._id,
      description:
        '',
      image: 'nationals.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Orioles',
      team: teams[4]._id,
      description:
        '',
      image: 'orioles.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Padres',
      team: teams[4]._id,
      description:
        '',
      image: 'padres.gif',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Pirates',
      team: teams[4]._id,
      description:
        '',
      image: 'pirates.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Rangers',
      team: teams[4]._id,
      description:
        '',
      image: 'rangers.jpg',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Rays',
      team: teams[4]._id,
      description:
        '',
      image: 'rays.jpg',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Reds',
      team: teams[4]._id,
      description:
        '',
      image: 'reds.gif',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Redsox',
      team: teams[4]._id,
      description:
        '',
      image: 'redsox.jpg',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Tigers',
      team: teams[4]._id,
      description:
        '',
      image: 'tigers.jpg',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Whitesox',
      team: teams[4]._id,
      description:
        '',
      image: 'whitesox.gif',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Yankees',
      team: teams[4]._id,
      description:
        '',
      image: 'yankees.gif',
      price: 50.00,
      quantity: 100
    },
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
