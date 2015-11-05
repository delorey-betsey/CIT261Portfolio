var personObj = JSON.parse(localStorage.person);

alert("personObj from script2 =" 
		+ " " + personObj.firstName 
		+ " " + personObj.lastName 
		+ " " + personObj.age);
		
localStorage.clear(personObj);
localStorage.clear(person);	







