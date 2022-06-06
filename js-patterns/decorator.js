/**
 * The Decorator pattern extends (decorates) an object’s behavior dynamically. The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. Multiple decorators can add or override functionality to the original object.
 */

class User {
	constructor(name){
		this.name = name;
	}

	say() {
		console.log(`User: ${this.name}`);
	}
}

class DecoratedUser {
	constructor(user, street, city){
		this.name = user.name;
		this.street = street;
		this.city = city;
	}

	say() {
		console.log(`Decorated User: ${this.name}, ${this.street}, ${this.city}`);
	}
}

let user = new User('Ivan');
user.say();

let decorated = new DecoratedUser(user, 'Nezalezhnosti', 'IF');
decorated.say();