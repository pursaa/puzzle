$(document).ready(function(){ //Get html ready
  $("form").submit(function(e){ //select the form
    e.preventDefault(); //Prevents the form from going somewhere
    var letters = $("#text").val(); //create a variable for inputText
    function isItAVowel(letters){
    var vowel =["a", "e", "i", "o", "u"];
    for (var i=0; i< vowel.length; i++){
      if (letters === vowel[i]){
        console.log (letters);

      }
    }
  };
  isItAVowel(letters);
  });
});



// vowels.forEach(function(vowel){
//   inputText = $("#text").val();
//   var inputSingleLetters = inputText.split(""); //split the sentence into singl letters and save to the a variable. Put in a space between the quotation marks in split to split the sentence into words.
//   if (inputSingleLetters === vowels[vowel]){
//     console.log(inputSingleLetters);
//   };
// });
