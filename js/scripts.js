$(document).ready(function(){


var age = parseInt(prompt("what is your age?"));

if (age < 18){
  $("#under18").show();
} else if (age === 18) {
  $("#ofAge").show();
  alert("Congrats");
} else {
  $("#ofAge").show();
}


});
