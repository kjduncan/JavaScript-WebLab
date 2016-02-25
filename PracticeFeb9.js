upperCaseFirstLetters("something to uppercase"); //"Something To Uppercase"
upperCaseFirstLetters("output");   //"Output"
upperCaseFirstLetters("katelyn j duncan");  //"Katelyn J Duncan"
upperCaseFirstLetters("      hello there      "); //"Hello There"

function upperCaseFirstLetters(aStr){
  var cleaned = aStr.trim();
  var words = cleaned.split(" ");
  var output = [];
  for(var i = 0; i < words.length; i++){
    var word = words[i];

  // *another way to do this: cleanedcharAt(0).toUpperCase() + cleaned.substring(1);
    var upperCased = word.charAt(0).toUpperCase() + word.slice(1);
    output.push(upperCased);
  }
  console.log(output.join(" "));
  return output.join(" ");
}
