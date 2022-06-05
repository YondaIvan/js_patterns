/**
 * The singleton pattern is used to limit creation of a class to only one object.
 * This is beneficial when one (and only one) object is needed to coordinate actions across the system.
 */

class Car {
	constructor(name) {
		if (Car.exists) {
			return Car.instance;
		}

		Car.instance = this;
		Car.exists = true;

		this.name = name;
	}

	getName() {
		return this.name;
	}
}

const car1 = new Car('BMW');
console.log(car1.getName());

const car2 = new Car('MERCEDES');
console.log(car2.getName());
