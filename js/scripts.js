$(document).ready(function(){ //Get html ready
  $("form").submit(function(e){ //select the form
    e.preventDefault(); //Prevents the form from going somewhere
    var letters = $("#text").val(); //create a variable for inputText
    console.log(letters);
    function removeVowels(letters){
      var result = "";
      for(var i=0; i < letters.length; i++){
        var char = letters[i];
        if("aeiou".match(char.toLowerCase()) === null){
          result += char;
        }
      }
      return result;
    }
    $('.output').text(removeVowels(letters));
  });
});

// vowels.forEach(function(vowel){
//   inputText = $("#text").val();
//   var inputSingleLetters = inputText.split(""); //split the sentence into singl letters and save to the a variable. Put in a space between the quotation marks in split to split the sentence into words.
//   if (inputSingleLetters === vowels[vowel]){
//     console.log(inputSingleLetters);
//   };
// });
