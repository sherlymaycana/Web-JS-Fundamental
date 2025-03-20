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

const shallowCopyUser = { ...user }; // Shallow Copy
const deepCopyUser = JSON.parse(JSON.stringify(user)); // Deep Copy

shallowCopyUser.address.city = "Shallow";
deepCopyUser.address.city = "Deep";

console.log("original:", user.address.city);
console.log("shallow copied:", shallowCopyUser.address.city);
console.log("deep copied:", deepCopyUser.address.city);
