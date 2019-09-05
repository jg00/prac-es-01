// Hashmap - Key/Value pair (Java)
// Map - Key/Value pair (Javascript)

/*
1 In Java we instantiate a hash map like below
- Remember that below myContact is a HashMap and that is why we have access to .entrySet(), .getKey(), .getValue(), .keySet()

import java.util.*;
class Main {
  public static void main(String[] args) {
    // <key, value> pair
    Map<String,String> myContact = new HashMap<>()
    myContacts.put("Dennis", "555-32344")
    myContacts.put("Tom", "555-11111")
    System.out.println(myContacts.get("Dennis")) // "555-32344"

    // Our variable is "entry", our datatype is Map.Entry<String,String>

    for(Map.Entry<String,String> entry:myContacts.entrySet()){
      System.out.printLn(entry.getKey()) // Dennis, Tom
      System.out.printLn(entry.getValue()) // 555-32344, 555-11111
      System.out.printLn(myContacts.get(entry.getValue())) // 555-32344, 555-11111
    }

    Set<String> keys = myContacts.keySet();
    for(String key : keys) {
      System.out.println(key + ":" + myContacts.get(key)) // Dennis:555-32344, Tom:555-1111
    }
  }
}
*/

/*
2 In Javascript we don't have to define the key-value data types like in Java example above.
- const myContact = new Map()
- Map is a key-value pair.  
- It is far more protected than a regular object.
- It comes with methods specific to map.
- It is an iterable. (vs an Object {} which is not iterable.)
*/

/* Regular object
const myContacts = {
  Dennis: "555-32344",
  Tom: "555-1111"
}

Side note:
  localStorage works excatly like Map using .set, .get
*/

// 3 Map()
let myContacts = new Map();

// .get() and .set()
myContacts.set("Dennis", "555-32344");
myContacts.set("Tom", "555-11111");
const dennisNumber = myContacts.get("Dennis");
console.log(dennisNumber);

// Side tip - you could assign a function as a key (unlike in an object)
let keyFunction = () => {
  console.log("Hello world");
};

myContacts.set(keyFunction, "I used a function as a key!");
const huh = myContacts.get(keyFunction);
console.log(huh);

// Other methods
console.log(myContacts.size); // 3

// Maps are iterable - They maintain their order.
for (let value of myContacts) {
  console.log(value);
}

// clear()
// myContacts.clear();
// console.log(myContacts); // Map {}

// .entries() - returns an iterator
console.log(myContacts.entries());

// .forEach - unlike entries which returns an iterator, .forEach() provides you a callback
myContacts.forEach((value, key) => console.log(value, key));

// .keys(), .values()
