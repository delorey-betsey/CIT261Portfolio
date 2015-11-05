// Code goes here
function myFunction(event){
  event.preventDefault();
  var myForm = document.forms.tracker;
  var person = {};
     person.name = myForm["user_name"].value;
     person.email = myForm["user_email"].value;
     person.message = myForm["user_message"].value;
     person.arms = myForm["user_arms"].value;
     person.legs = myForm["user_legs"].value;
  console.log("username is " + person.name);
  console.log("useremail is " + person.email);
  console.log("usermessage is " + person.message);
  console.log("userarms is " + person.arms);
  console.log("userlegs is " + person.legs);
  myOutput(person);
}
function myOutput(person){
  var outputName = document.getElementById("output1");
  var outputEmail = document.getElementById("output2");
  var outputMessage = document.getElementById("output3");
  var outputArms = document.getElementById("output4");
  var outputLegs = document.getElementById("output5");
  outputName.innerHTML = person.name;
  outputEmail.innerHTML = person.email;
  outputMessage.innerHTML = person.message;
  outputArms.innerHTML = person.arms;
  outputLegs.innerHTML = person.legs;
}
