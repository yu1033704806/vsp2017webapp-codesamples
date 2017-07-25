// This is a Person object
var Person = function(firstName, lastName, gender) {
	this.firstName = firstName;	
	this.lastName = lastName;
	this.gender = gender;
	this.name = function() { // this is how you add a method 
		return this.firstName + " " + this.lastName;
	}
}

var p1 = new Person("John", "Smith", "Male");
console.log( p1.firstName );
console.log( p1["lastName"] );
console.log( p1.name );
console.log(p1);
