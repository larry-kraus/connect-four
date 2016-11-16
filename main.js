var r1c1 = document.getElementById('r1c1');
var r2c1 = document.getElementById('r2c1');
var r3c1 = document.getElementById('r3c1');
var r4c1 = document.getElementById('r4c1');
var r5c1 = document.getElementById('r5c1');
var r6c1 = document.getElementById('r6c1');
var r1c2 = document.getElementById('r1c2');

var placeChipColumn1 = function() {
	var status1 = (r1c1.getAttribute('class') === "chip");
	var status2 = (r2c1.getAttribute('class') === "chip");
	var status3 = (r3c1.getAttribute('class') === "chip");
	var status4 = (r4c1.getAttribute('class') === "chip");
	var status5 = (r5c1.getAttribute('class') === "chip");
	var status6 = (r6c1.getAttribute('class') === "chip");

	if (status5) {
		r6c1.setAttribute('class', 'chip');
	}
	else if (status4) {
		r5c1.setAttribute('class', 'chip');
	}
	else if (status3) {
		r4c1.setAttribute('class', 'chip');
	}
	else if (status2) {
		r3c1.setAttribute('class', 'chip');
	}
	else if (status1) {
		r2c1.setAttribute('class', 'chip');
	}
	else {
		r1c1.setAttribute('class', 'chip');
	}
}

var button1 = document.getElementById('placeButton1');
button1.addEventListener('click', placeChipColumn1);


console.log("aww yeahh");

/* code scrapyard
var placeChipColumn1Other = function() {
	var r1c1 = document.getElementById('r1c1');
	r1c1.setAttribute('class', 'chip');

	console.log(r1c1.getAttribute('class'));

	return r1c1 = "occupied";
}

var r1c1status;
console.log(placeChipColumn1());
var r1c1status = function() {
	placeChipColumn1();
}
console.log(r1c1status);

var placeChipColumn = function() {
	if (r1c1.getAttribute('class') === "chip") {
		r2c1.setAttribute('class', 'chip');
	}
	else {
		r1c1.setAttribute('class', 'chip');
	}
}

var placeChipColumnXX = function() {
	var status1 = (r1c1.getAttribute('class') === "chip");
	var status2 = (r2c1.getAttribute('class') === "chip");
	var status3 = (r3c1.getAttribute('class') === "chip");
	var status4 = (r4c1.getAttribute('class') === "chip");
	var status5 = (r5c1.getAttribute('class') === "chip");
	var status6 = (r6c1.getAttribute('class') === "chip");

	switch(status1, status2, status3, status4, status5, status6) {
		case status5:
			r6c1.setAttribute('class', 'chip');
			break;
		case status4:
			r5c1.setAttribute('class', 'chip');
			break;
		case status3:
			r4c1.setAttribute('class', 'chip');
			break;
		case status2:
			r3c1.setAttribute('class', 'chip');
			break;
		case status1:
			r2c1.setAttribute('class', 'chip');
			break;
		default:
			r1c1.setAttribute('class', 'chip');
	}
}
*/