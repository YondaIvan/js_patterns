/**
 * The Proxy pattern provides a surrogate or placeholder object for another object and controls access to this other object.
 */

class GeoCoder {

	getCoordinates(address) {
		if (address === 'Amsterdam') {
			return '523700, 48900';
		} else if (address === 'London') {
			return '515171, 1062';
		} else {
			return '';
		}
	}
}

let geocoder = new GeoCoder();
let geocache = {};

class GeoProxy {
	getCoordinates(address) {
		if (!geocache[address]) {
			geocache[address] = geocoder.getCoordinates(address);
		}
		console.log(address + ': ' + geocache[address]);
		return geocache[address];
	}

	getCount() {
		let count = 0;
		for (let code in geocache) { count++; }
		return count;
	}
}

let geo = new GeoProxy();

// geolocation requests
geo.getCoordinates('London');
geo.getCoordinates('Amsterdam');
geo.getCoordinates('Amsterdam');
geo.getCoordinates('London');
geo.getCoordinates('London');

console.log('\nCache size: ' + geo.getCount());
