$(document).ready(function(){ //Get html ready
  $("form").submit(function(e){ //select the form
    e.preventDefault(); //Prevents the form from going somewhere
    var inputText = $("#text").val(); //create a variable for the input
    console.log (inputText);

  });

});
