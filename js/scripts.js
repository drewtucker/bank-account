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
  $("#userNameDisplay").text(userName + "'s ");
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
  $("#accountBalanceDisplay").fadeToggle();
  $("#accountBalanceTotal").text("$" + initialDeposit + ".00");
  $("#depositEntry").fadeToggle();
  $("#withdrawalEntry").fadeToggle();
  $("#columns").fadeToggle();
  console.log(initialDeposit);
  return initialDeposit;
  }
});


});
