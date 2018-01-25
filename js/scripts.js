//BUSINESS LOGIC
var userName;
var initialDeposit;


//USER INTERFACE LOGIC
$(document).ready(function(){

$("#userNameEntry").submit(function(event){
  event.preventDefault();
  userName = $("input#userNameInput").val();
  $("#userNameEntry").slideUp();
  $("#initialDeposit").fadeToggle();
  console.log(userName);
  return userName;
});

$("#initialDeposit").submit(function(event){
  event.preventDefault();
  initialDeposit = parseInt($("input#userInitialDeposit").val());
  if (isNaN(initialDeposit)) {
    alert("Please enter a number, idiot.");
    return;
  }
  else{
  $("#initialDeposit").slideUp();
  console.log(initialDeposit);
  return initialDeposit;
  }
});


});
