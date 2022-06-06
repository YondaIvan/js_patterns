/**
 * The Bridge pattern allows two components, a client and a service, to work together with each component having its own interface. Bridge is a high-level architectural pattern and its main goal is to write better code through two levels of abstraction. It facilitates very loose coupling of objects. It is sometimes referred to as a double Adapter pattern.
 */

// input devices
class Gestures {
	constructor(output){
		this.output = output;
	}

	tap() { this.output.click(); }
	swipe() { this.output.move(); }
	pan() { this.output.drag(); }
	pinch() { this.output.zoom(); }
}

class Mouse {
	constructor(output){
		this.output = output;
	}

	click() { this.output.click(); }
	move() { this.output.move(); }
	down() { this.output.drag(); }
	wheel() { this.output.zoom(); }
}

// output devices
class Screen {
	click() { console.log("Screen select"); }
	move() { console.log("Screen move"); }
	drag() { console.log("Screen drag"); }
	zoom() { console.log("Screen zoom in"); }
}

class Audio {
	click() { console.log("Sound oink"); }
	move() { console.log("Sound waves"); }
	drag() { console.log("Sound screetch"); }
	zoom() { console.log("Sound volume up"); }
}

let screen = new Screen();
let audio = new Audio();

let hand = new Gestures(screen);
let mouse = new Mouse(audio);

hand.tap();
hand.swipe();
hand.pinch();

mouse.click();
mouse.move();
mouse.wheel();
