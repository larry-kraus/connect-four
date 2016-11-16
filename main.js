
var r1c2 = document.getElementById('r1c2');
var r2c1 = document.getElementById('r2c1');

var r1c1status;
var statusr1c1;

var placeChipColumn1 = function() {
	var r1c1 = document.getElementById('r1c1');
	r1c1.setAttribute('class', 'chip');

	console.log(r1c1.getAttribute('class'));

	return r1c1 = "occupied";
}

var r1c1 = document.getElementById('r1c1');
	r1c1.setAttribute('class', 'chip');
var placeChipColumn1Part2 = function() {

	if (r1c1.getAttribute('class') === "chip") {
		console.log('yes');

		r2c1.setAttribute('class', 'chip');
	}
	else {
		console.log('no');
	}

}

var button1 = document.getElementById('placeButton1');
button1.addEventListener('click', placeChipColumn1Part2);

console.log(r1c1 + "2");

//console.log(placeChipColumn1());

var r1c1status = function() {
	placeChipColumn1();
}
console.log(r1c1status);


console.log("all is well...potentially");