var person = {
	firstName : "Betsey",
	lastName : "Delorey",
	age : 29
};
alert("person from script1 =" 
		+ " " + person.firstName 
		+ " " + person.lastName 
		+ " " + person.age);
localStorage.person = JSON.stringify(person);

/* 
//ways to place items in local storage
localStorage.firstName = "John";
localStorage.setItem("lastName", "Doe");
localStorage.age = 47;

//convert age to numeric value
var age = parseInt(localStorage.age, 10);

//alert for variable display 
alert(localStorage.firstName + " " +localStorage.getItem("lastName"));

//localStorage.removeItem("lastName");

//localStorage.clear("lastName"); 
*/




