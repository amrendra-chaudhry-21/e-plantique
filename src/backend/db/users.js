import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Amrendra",
    lastName: "Chaudhary",
    email: "amrendrait43@gmail.com",
    password: "Nh2conh2@aa432",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Amrendra Chaudhary",
        street: "A70, Laxmi Nagar",
        city: "New Delhi",
        state: "Delhi",
        zipcode: '110092',
        country: 'India',
        mobile: '8299639716',
    },
    ]
  },
];
