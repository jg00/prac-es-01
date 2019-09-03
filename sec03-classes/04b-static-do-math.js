class DoMath {
  static add(x, y) {
    return x + y;
  }

  static subtract(x, y) {
    return x - y;
  }

  static square(x) {
    return x * x;
  }
}

let x = DoMath.add(2, 5);
console.log(x);

/* Better to places these in a class as they are related */
/*
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function square(x) {
  return x * x;
}
*/
