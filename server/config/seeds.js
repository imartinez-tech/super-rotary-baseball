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
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'client/public/images/braves.gif',
      team: teams[0]._id,
      price: 50.00,
      quantity: 500
    },
    {
      name: 'Phillies',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'client/public/images/phillies.gif',
      team: teams[0]._id,
      price: 50.00,
      quantity: 500
    },
    {
      name: 'Bluejays',
      team: teams[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'client/public/images/bluejays.png',
      price: 50.00,
      quantity: 20
    },
    {
      name: 'Mets',
      team: teams[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'client/public/images/mets.gif',
      price: 50.00,
      quantity: 50
    },
    {
      name: 'Diamondbacks',
      team: teams[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'client/public/images/diamondbacks.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Angels',
      team: teams[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'client/public/images/Angels.jpg',
      price: 50.00,
      quantity: 30
    },
    {
      name: 'Astros',
      team: teams[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'client/public/images/astros.jpg',
      price: 50.00,
      quantity: 30
    },
    {
      name: 'Athletics',
      team: teams[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'client/public/images/athletics.gif',
      price: 50.00,
      quantity: 30
    },
    {
      name: 'Cardinals',
      team: teams[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'client/public/images/cardinals.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Coloradorockies',
      team: teams[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'client/public/images/coloradorockies.png',
      price: 50.00,
      quantity: 1000
    },
    {
      name: 'Cubs',
      team: teams[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'client/public/images/cubs.gif',
      price: 50.00,
      quantity: 1000
    },
    {
      name: 'Diamondbacks',
      team: teams[4]._id,
      description:
        '',
      image: 'client/public/images/diamondbacks.png',
      price: 50.00,
      quantity: 100
    },
    {
      name: 'Dodgers',
      team: teams[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
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
