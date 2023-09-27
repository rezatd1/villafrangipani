import s from '../assets/img/left-arrow-10.png'

const navbarResources = [{
  id: 1,
  className: 'ps-1',
  linkClassName: 'text-light h6',
  name: 'Home',
  imgClassName: 'd-none',
  childs: []
},
{
  id: 2,
  className: 'ps-1 mt-4 pt-2',
  linkClassName: 'text-light h6 text-decoration-none',
  name: 'The Villa',
  imgClassName: 'ms-1',
  childs: ['Rooms and more', 'Gallery', 'Floorplan']
}, {
  id: 3,
  className: 'ps-1 mt-4 pt-2',
  linkClassName: 'text-light h6 text-decoration-none',
  name: 'Experience',
  imgClassName: 'ms-1',
  childs: ['Dining', 'Our Menu', 'Family', 'Staff']
},
{
  id: 4,
  className: 'ps-1 mt-4 pt-2',
  linkClassName: 'text-light h6 text-decoration-none',
  name: 'Location',
  imgClassName: 'ms-1',
  childs: ['Map', 'Our Neighbourhood', 'Beachclubs', 'Attractions']
},
{
  id: 5,
  className: 'ps-1 mt-4 pt-2',
  linkClassName: 'text-light h6 text-decoration-none',
  name: 'Availability',
  imgClassName: 'ms-1',
  childs: ['Reviews', 'Rates', 'Check Dates']
},
{
  id: 6,
  className: 'ps-1 mt-4 pt-2',
  linkClassName: 'text-light h6 text-decoration-none',
  name: 'Contact',
  imgClassName: 'd-none',
  childs: []
},
{
  id: 7,
  className: 'ps-1 mt-4 pt-3',
  linkClassName: 'text-white cu-account-button',
  name: 'Account',
  imgClassName: 'd-none',
  childs: []
},
];

export default navbarResources;