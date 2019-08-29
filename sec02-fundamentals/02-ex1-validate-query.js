let city = `Chicago`;
let userId = 4;
let command = `SELECT *`;
let table = `users`;
let whereClauses = [`uid = ${userId}`, `OR city = ${city}`];
let order = null;

const validateQuery = checkQuery`${command} FROM ${table} WHERE ${whereClauses} ORDER BY ${order}`;
console.log(validateQuery);

function checkQuery(strings, command, table, whereClauses, order) {
  // Validate
  if (command.indexOf("SELECT") === -1 && command.indexOf("UPDATE") === -1)
    return "Only SELECT/UPDATE allowed.";
  else if (table === "passwords") return "Access to table not allowed";
  else if (!order) order = `asc`;

  // console.log(strings); // [ '', ' FROM ', ' WHERE ', '' ]
  // console.log(whereClauses); // [ 'uid = 3', 'OR city = Chicago' ]

  const finalQuery = `${strings[0]}${command}${strings[1]}${table}${
    strings[2]
  }${whereClauses.join(" ")}${strings[3]}${order}`;

  return finalQuery;
}
