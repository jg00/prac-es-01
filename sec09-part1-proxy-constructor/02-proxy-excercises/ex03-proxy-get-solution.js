/*
  Scenario - protect the object if accessLevel = 1
*/

const users = [
  {
    username: `bob`,
    accessLevel: 1,
    accessCode: 1234
  },
  {
    username: `Mary`,
    accessLevel: 2,
    accessCode: 2345
  },
  {
    username: `Harold`,
    accessLevel: 2,
    accessCode: 9999
  }
];

const handler = {
  get: (target, propName) => {
    // console.log(target[propName]); // { username: 'bob', accessLevel: 1, accessCode: 1234 }
    // console.log(propName); // Here propName is actually the array index
    // console.log(target[propName].accessLevel);

    // target[0].accessLevel === 1
    if (target[propName].accessLevel === 1) {
      return {
        username: "Access Denied",
        accessLevel: "Access Denied",
        accessCode: "Access Denied"
      };
    } else {
      return target[propName];
    }
  }
};
const userProxy = new Proxy(users, handler);

console.log(userProxy[0].username); // undefined
console.log(userProxy[0].accessCode); // undefined
console.log(userProxy[1].accessCode); //2345
console.log(userProxy[2].username); //Harold
