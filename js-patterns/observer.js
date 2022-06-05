/**
 * This pattern is a one-to-many dependency between objects so that when one object changes state, all its dependents are notified. This is typically done by calling one of their methods.
 */

class Observable {
	constructor() {
		this.observers = [];
	}

	subscribe(func) {
		this.observers.push(func);
	}

	unsubscribe(func) {
		this.observers = this.observers.filter(observer => observer !== func);
	}

	notify(data) {
		this.observers.forEach(observer => observer(data));
	}
}

const observable = new Observable();

function logger1(data) {
	console.log(`First logger - ${data}`);
}

function logger2(data) {
	console.log(`Second logger - ${data}`);
}

observable.subscribe(logger1);
observable.subscribe(logger2);

observable.notify('Test message');
