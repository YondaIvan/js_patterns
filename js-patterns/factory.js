/**
 * A normal factory produces goods; a software factory produces objects. And not just that — it does so without specifying the exact class of the object to be created. To accomplish this, objects are created by calling a factory method instead of calling a constructor.
 */

class Bmw {
	constructor(name) {
		this.name = name;
		this.year = 2022;
		this.single = true;
	}

	getName() {
		return `Fast ${this.name}`;
	}
}

class Mercedes {
	constructor(name) {
		this.name = name;
		this.year = 2021;
	}

	getName() {
		return `Elegant ${this.name}`;
	}
}

class CarFactory {
	static list = {
		fast: Bmw,
		elegant: Mercedes,
	};

	constructor(name, type = 'fast') {
		const Car = CarFactory.list[type];
		return new Car(name);
	}
}

const cars = [new CarFactory('bmw', 'fast'), new CarFactory('mercedes', 'elegant')];

cars.forEach(car => {
	console.log(car.getName());
});
