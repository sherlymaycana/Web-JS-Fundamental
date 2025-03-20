const user = {
  firstName: "Alvin",
  lastName: "Arrazy",
  address: {
    city: "Jakarta",
    street: "Jln. H. Sidik no. 14B",
  },
  age: 24,
  occupancy: "Front-end Engineer",
  familyMembers: [
    {
      firstName: "Danish",
      lastName: "Alfarisy",
      address: {
        city: "Semarang",
        street: "Tembalang",
      },
      occupancy: "University Student",
      relation: "Lil bro",
      age: 18,
    },
  ],
};

const shallowCopyUser = { ...user };
const shallowCopyUser1 = user;
const shallowCopyUser2 = Array.from(user);

// shallowCopyUser1.firstName = "Shallow FirstName";
// console.log(shallowCopyUser1.firstName);
// console.log(user.firstName);

// Shallow Copy
const deepCopyUser = JSON.parse(JSON.stringify(user)); // Deep Copy

// console.log(shallowCopyUser);
// shallowCopyUser.firstName = "Shallow FirstName";
// console.log(shallowCopyUser.firstName);
// console.log(user.firstName);

// shallowCopyUser.address.street = "street Shallow";
// console.log(shallowCopyUser.address.street);
// console.log(user.address.street);

// shallowCopyUser.lastName = "New Lastname";
// console.log(shallowCopyUser.lastName);
// console.log(user.lastName);

//   shallowCopyUser.address.city = 'Shallow'
//   deepCopyUser.address.city = 'Deep'

//   console.log('original:', user.address.city)
//   console.log('shallow copied:', shallowCopyUser.address.city)
//   console.log('deep copied:', deepCopyUser.address.city)
