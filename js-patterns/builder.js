/**
 * The Builder pattern allows a client to construct a complex object by specifying the type and content only. Construction details are hidden from the client entirely.
 */

class Shop {
	constructor(builder) {
		builder.step1();
		builder.step2();
		return builder.getItem();
	}
}

class CarBuilder {
	constructor(){
		this.car = null;
	}

	step1() {
		this.car = new Car();
	}

	step2() {
		this.car.addParts();
	}

	getItem() {
		return this.car;
	}
}

class TruckBuilder {
	constructor(){
		this.truck = null;
	}

	step1() {
		this.truck = new Truck();
	}

	step2() {
		this.truck.addParts();
	}

	getItem() {
		return this.truck;
	}
}

class Car {
	constructor(){
		this.doors = 0;
	}

	addParts() {
		this.doors = 4;
	}

	say() {
		console.log(`This is a ${this.doors}-door car`);
	}
}

class Truck {
	constructor(){
		this.doors = 0;
	}

	addParts() {
		this.doors = 2;
	}

	say() {
		console.log(`This is a ${this.doors}-door truck`);
	}
}

let carBuilder = new CarBuilder();
let truckBuilder = new TruckBuilder();
let car = new Shop(carBuilder);
let truck = new Shop(truckBuilder);

car.say();
truck.say();

