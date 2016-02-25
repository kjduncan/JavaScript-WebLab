//alert("Hello");

var message = "Hello";

var x = 27;
var temp = [14, 32, 36, 40];
var person = {
  first: "Kate",
  last: "Duncan",
  age: 68,
  address: {
    city: "thornton",
    zip: 80233
  },
};

if(person >= 21 && person.age < 65) {
  greeting();
  console.log("Hello" + person.first);
} else if(person.age >= 65){
  console.log("discount time");
}
else{
  console.log("You must leave");
}

greeting("Kate")

function greeting() {
  console.log("hello");

}
['abdegopq4690ADOPQ','B8'].forEach(function(group, idx){
  group.split("").forEach(function(char){
    lookup[char] = idx + 1;
  })
})

//var lookup = {
  //a: 1,
  //b: 1,
  //d: 1,
  //e: 1,
//}
function countHoles(str) {
  var holeCount = 0;
  var letters = str.split("")

  letters.forEach(function(char){
    if(lookup[char]) {
      holeCount += lookup[char];
    }
  });
  return holeCount;
}
