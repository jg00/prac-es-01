/*
  Example:
  1 Check username and password
  2 If exists, update token and return
  3 If does not exists, respond accordingly
*/

const mysql = require("mysql");
const config = require("./mySqlConnection");

const connection = mysql.createConnection(config);
connection.connect();

const username = `bill`;
const password = `b`;

const checkLoginQuery = `SELECT * FROM Users WHERE username = "${username}" AND password = "${password}"`;

function checkLogin() {
  return new Promise((resolve, reject) => {
    connection.query(checkLoginQuery, (error, results) => {
      if (error) reject(error);
      else if (results.length === 1) {
        resolve(results[0].id);
      } else resolve(false);
    });
  });
}

async function updateToken() {
  console.log("Updating Token...");
  const usersId = await checkLogin();
  console.log("UsersId:", usersId);
  if (usersId) {
    const updateTokenQuery = `UPDATE Users
     SET token = "BB"
     WHERE id = ${usersId}`;

    connection.query(updateTokenQuery, (error, results) => {
      console.log("Errors:", error); // null
      connection.end();
    });
    console.log("User Updated");
  }
}

updateToken();

// checkLogin().then(usersId => {
//   const updateTokenQuery = `UPDATE Users
//      SET token = "C"
//      WHERE id = ${usersId}`;

//   connection.query(updateTokenQuery, (error, results) => {
//     console.log(error); // null
//   });
// });

/* 
// 2 This example uses Promise
function checkLogin() {
  return new Promise((resolve, reject) => {
    connection.query(checkLoginQuery, (error, results) => {
      if (error) reject(error);
      else if (results.length === 1) resolve(results[0].id);
      else resolve(false);
    });
  });
}

checkLogin().then(usersId => {
  const updateTokenQuery = `UPDATE Users 
     SET token = "CC" 
     WHERE id = ${usersId}`;

  connection.query(updateTokenQuery, (error, results) => {
    console.log(error); // null
    connection.end();
  });
});
*/

/* 
// 1 This example uses multiple callbacks
connection.query(checkLoginQuery, (error, results) => {
  if (error) throw error;
  console.log(results.length);
  if (results.length === 1) {
    const updateTokenQuery = `UPDATE Users 
     SET token = "B" 
     WHERE id = ${results[0].id}`;
    connection.query(updateTokenQuery, (error, results) => {
      console.log(error); // null
    });
  }
  connection.end();
});
*/
