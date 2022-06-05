/**
 * The strategy pattern allows grouping related algorithms under an abstraction, which allows switching out one algorithm or policy for another without modifying the client. Instead of directly implementing a single algorithm, the code receives runtime instructions specifying which of the group of algorithms to run.
 */

class Car {
	constructor(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}
}

class FastCar extends Car {
	constructor(name) {
		super();
		this.name = name;
		this.year = 2022;
	}
}

class ElegantCar extends Car {
	constructor(name) {
		super();
		this.name = name;
		this.year = 2021;
	}
}

class Strategy {
	name(instance) {
		const name = instance.getName();

		return `Name: ${name}`;
	}
}

const strategy = new Strategy();

console.log(strategy.name(new FastCar('bmw')));
console.log(strategy.name(new ElegantCar('mercedes')));
