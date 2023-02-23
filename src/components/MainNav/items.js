import shortid from 'shortid';

const navItems = [
  {
    id: shortid.generate(),
    to: '/contacts',
    text: 'Contacts',
  },
  {
    id: shortid.generate(),
    to: '/favorite-contacts',
    text: 'Favorite Contacts',
  },
];

export default navItems;
