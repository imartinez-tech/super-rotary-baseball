const db = require('./connection');
const { User, Ticket, Team, } = require('../models');

db.once('open', async () => {
  await Team.deleteMany();

  const teams = await Team.insertMany([
    { name: 'Brave ' },
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
    { name: 'Padres' },



  ]);

  console.log('teams seeded');

  await Ticket.deleteMany();

  const tickets = await Ticket.insertMany([
    {
      name: 'Braves',
      description:
        '',
      image: 'client/public/images/braves.gif',
      team: teams[0]._id,
      price: 50.00,
      quantity: 500
    },
    {
<<<<<<< HEAD
      name: 'Phillies',
      description:
        '',
      image: 'client/public/images/phillies.gif',
      team: teams[0]._id,
      price: 50.00,
      quantity: 500
    },
    {
      name: 'Bluejays',
      team: teams[1]._id,
      description:
        '',
      image: 'client/public/images/bluejays.png',
      price: 50.00,
      quantity: 20
    },
    {
      name: 'Mets',
      team: teams[1]._id,
      description:
        '',
      image: 'client/public/images/mets.gif',
      price: 50.00,
      quantity: 50
    },
    {
      name: 'Diamondbacks',
      team: teams[1]._id,
      description:
        '',
      image: 'client/public/images/diamondbacks.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Angels',
      team: teams[2]._id,
      description:
        '',
      image: 'client/public/images/Angels.jpg',
      price: 50.00,
      quantity: 30
=======
      name: 'Athletics',
      description:'Praesent sed lacinia rutrum .',
      image: 'athletics_small.gif',
      category: categories[1]._id,
      price: 59.99,
    },
    {
      name: 'bluejays',
      category: categories[2]._id,
      description:'Donec volutpat erat erat ipsum us.',
      image: 'blue_jays_small.png',
      price: 59.99,
    },
    {
      name: 'cincinnati',
      category: categories[3]._id,
      description:'Praesent placerat, odio vel euismod venenatis.',
      image: 'cincinnati_reds_logo_small.gif',
      price: 59.99,
    },
    {
      name: 'cleveland',
      category: categories[4]._id,
      description:'Vivamus ut turpis in purus.',
      image: 'cleveland_indians_small.png',
      price: 59.99,
    },
    {
      name: 'houston',
      category: categories[5]._id,
      description:'Vestibulum risus mvitae lobortis mi a leo.',
      image: 'huston_astros_small.jpg',
      price: 399.99,
>>>>>>> 32e6bc4840cb144c6d968ec9d9286efd9d2e64f8
    },
    {
      name: 'Astros',
      team: teams[2]._id,
      description:
        '',
      image: 'client/public/images/astros.jpg',
      price: 50.00,
      quantity: 30
    },
    {
      name: 'Athletics',
      team: teams[2]._id,
      description:
        '',
      image: 'client/public/images/athletics.gif',
      price: 50.00,
      quantity: 30
    },
    {
      name: 'Cardinals',
      team: teams[3]._id,
      description:
        '',
      image: 'client/public/images/cardinals.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Coloradorockies',
      team: teams[4]._id,
      description: '',
      image: 'client/public/images/coloradorockies.png',
      price: 50.00,
      quantity: 1000
    },
    {
      name: 'Cubs',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/cubs.gif',
      price: 50.00,
      quantity: 1000
    },
    {
      name: 'Diamondbacks',
      team: teams[4]._id,
      description:'',
      image: 'client/public/images/diamondbacks.png',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Dodgers',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/dodgers.gif',
      price: 50.00,
      quantity: 600
    },
    {
      name: 'Giants',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/giants.jpg',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Indians',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/indians.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Mariners',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/mariners.gif',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Marlins',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/marlins.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Mets',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/mets.gif',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Minnesotatwins',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/minnesottatwins.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Nationals',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/nationals.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Orioles',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/orioles.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Padres',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/padres.gif',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Pirates',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/pirates.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Rangers',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/rangers.jpg',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Rays',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/rays.jpg',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Reds',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/reds.gif',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Redsox',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/redsox.jpg',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Tigers',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/tigers.jpg',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Whitesox',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/whitesox.gif',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Yankees',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/yankees.gif',
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
