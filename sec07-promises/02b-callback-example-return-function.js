function a(x) {
  console.log(x);
  return function(y) {
    console.log(x + y); // "via closures" the function still knows what the original 'x' is
  };
}
a(2)(3); // function a(2) runs then is fully replaced with function(y) { .. }

/*
  When you return something, it fully replaces whoever calls it. 
*/
