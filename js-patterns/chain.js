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