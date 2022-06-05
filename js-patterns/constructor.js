class Car {
	constructor(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}
}

const car = new Car('BMW');
console.log(car.getName());