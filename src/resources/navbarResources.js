const navbarResources = [
  {
    id: 1,
    className: "ps-1",
    linkClassName: "text-light h6",
    name: "Home",
    imgClassName: "d-none",
    route: "https://villafrangipani.id/",
    childs: [],
  },
  {
    id: 2,
    className: "ps-1 mt-4 pt-2",
    linkClassName: "text-light h6 text-decoration-none",
    name: "The Villa",
    imgClassName: "ms-1",
    route: "https://villafrangipani.id/rooms",
    childs: [
      {
        id: 1,
        submenu: "Rooms and more",
        route: "https://villafrangipani.id/rooms",
      },
      {
        id: 2,
        submenu: "Gallery",
        route: "https://villafrangipani.id/gallery",
      },
      {
        id: 3,
        submenu: "Floor Plan",
        route: "https://villafrangipani.id/floorplan",
      },
    ],
  },
  {
    id: 3,
    className: "ps-1 mt-4 pt-2",
    linkClassName: "text-light h6 text-decoration-none",
    name: "Experience",
    imgClassName: "ms-1",
    route: "https://villafrangipani.id/dining",
    childs: [
      { id: 1, submenu: "Dining", route: "https://villafrangipani.id/dining" },
      { id: 2, submenu: "Our Menu", route: "https://villafrangipani.id/menu" },
      { id: 3, submenu: "Family", route: "https://villafrangipani.id/family" },
      { id: 4, submenu: "Staff", route: "https://villafrangipani.id/staff" },
    ],
  },
  {
    id: 4,
    className: "ps-1 mt-4 pt-2",
    linkClassName: "text-light h6 text-decoration-none",
    name: "Location",
    imgClassName: "ms-1",
    route: "https://villafrangipani.id/map",
    childs: [
      { id: 1, submenu: "Map", route: "https://villafrangipani.id/map" },
      {
        id: 2,
        submenu: "Neighbourhood",
        route: "https://villafrangipani.id/neighbourhood",
      },
      {
        id: 3,
        submenu: "Beach clubs",
        route: "https://villafrangipani.id/beachclubs",
      },
      {
        id: 4,
        submenu: "Attractions",
        route: "https://villafrangipani.id/attractions",
      },
    ],
  },
  {
    id: 5,
    className: "ps-1 mt-4 pt-2",
    linkClassName: "text-light h6 text-decoration-none",
    name: "Availability",
    imgClassName: "ms-1",
    route: "https://villafrangipani.id/bookings",
    childs: [
      {
        id: 1,
        submenu: "Reviews",
        route: "https://villafrangipani.id/reviews",
      },
      { id: 2, submenu: "Rates", route: "/availability/rates" },
      {
        id: 3,
        submenu: "Check Dates",
        route: "https://villafrangipani.id/bookings",
      },
    ],
  },
  {
    id: 6,
    className: "ps-1 mt-4 pt-2",
    linkClassName: "text-light h6 text-decoration-none",
    name: "Contact",
    imgClassName: "d-none",
    route: "https://villafrangipani.id/contact",
    childs: [],
  },
  {
    id: 7,
    className: "ps-1 mt-4 pt-3",
    linkClassName: "text-white cu-account-button",
    name: "Account",
    imgClassName: "d-none",
    route: "https://villafrangipani.id/account/login/reauthenticate",
    childs: [],
  },
];

export default navbarResources;
