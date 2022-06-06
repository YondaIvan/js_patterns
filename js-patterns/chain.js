/**
 * The Chain of Responsibility pattern provides a chain of loosely coupled objects one of which can satisfy a request. This pattern is essentially a linear search for an object that can handle a particular request.
 */

class Chain {
	constructor(count = 0) {
		this.count = count;
	}

	sum(c) {
		this.count += c;
		return this;
	}
}

const chain = new Chain();
console.log(chain.sum(10).sum(20));