var placeChipColumn1 = function() {
	var status1 = (r1c1.getAttribute('class') === "chip1" || r1c1.getAttribute('class') === "chip2");
	var status2 = (r2c1.getAttribute('class') === "chip1" || r2c1.getAttribute('class') === "chip2");
	var status3 = (r3c1.getAttribute('class') === "chip1" || r3c1.getAttribute('class') === "chip2");
	var status4 = (r4c1.getAttribute('class') === "chip1" || r4c1.getAttribute('class') === "chip2");
	var status5 = (r5c1.getAttribute('class') === "chip1" || r5c1.getAttribute('class') === "chip2");
	var status6 = (r6c1.getAttribute('class') === "chip1" || r6c1.getAttribute('class') === "chip2");

	if (status6) {
		alert('This column is full!');
	}
	else if (status5) {
		r6c1.setAttribute('class', 'chip');
		whosTurn(r6c1);
	}
	else if (status4) {
		r5c1.setAttribute('class', 'chip');
		whosTurn(r5c1);
	}
	else if (status3) {
		r4c1.setAttribute('class', 'chip');
		whosTurn(r4c1);
	}
	else if (status2) {
		r3c1.setAttribute('class', 'chip');
		whosTurn(r3c1);
	}
	else if (status1) {
		r2c1.setAttribute('class', 'chip');
		whosTurn(r2c1);
	}
	else {
		r1c1.setAttribute('class', 'chip');
		whosTurn(r1c1);
	}
}

var placeChipColumn2 = function() {
	var status1 = (r1c2.getAttribute('class') === "chip1" || r1c2.getAttribute('class') === "chip2");
	var status2 = (r2c2.getAttribute('class') === "chip1" || r2c2.getAttribute('class') === "chip2");
	var status3 = (r3c2.getAttribute('class') === "chip1" || r3c2.getAttribute('class') === "chip2");
	var status4 = (r4c2.getAttribute('class') === "chip1" || r4c2.getAttribute('class') === "chip2");
	var status5 = (r5c2.getAttribute('class') === "chip1" || r5c2.getAttribute('class') === "chip2");
	var status6 = (r6c2.getAttribute('class') === "chip1" || r6c2.getAttribute('class') === "chip2");

	if (status6) {
		alert('This column is full!');
	}
	else if (status5) {
		r6c2.setAttribute('class', 'chip');
		whosTurn(r6c2);
	}
	else if (status4) {
		r5c2.setAttribute('class', 'chip');
		whosTurn(r5c2);
	}
	else if (status3) {
		r4c2.setAttribute('class', 'chip');
		whosTurn(r4c2);
	}
	else if (status2) {
		r3c2.setAttribute('class', 'chip');
		whosTurn(r3c2);
	}
	else if (status1) {
		r2c2.setAttribute('class', 'chip');
		whosTurn(r2c2);
	}
	else {
		r1c2.setAttribute('class', 'chip');
		whosTurn(r1c2);
	}
}

var placeChipColumn3 = function() {
	var status1 = (r1c3.getAttribute('class') === "chip1" || r1c3.getAttribute('class') === "chip2");
	var status2 = (r2c3.getAttribute('class') === "chip1" || r2c3.getAttribute('class') === "chip2");
	var status3 = (r3c3.getAttribute('class') === "chip1" || r3c3.getAttribute('class') === "chip2");
	var status4 = (r4c3.getAttribute('class') === "chip1" || r4c3.getAttribute('class') === "chip2");
	var status5 = (r5c3.getAttribute('class') === "chip1" || r5c3.getAttribute('class') === "chip2");
	var status6 = (r6c3.getAttribute('class') === "chip1" || r6c3.getAttribute('class') === "chip2");

	if (status6) {
		alert('This column is full!');
	}
	else if (status5) {
		r6c3.setAttribute('class', 'chip');
		whosTurn(r6c3);
	}
	else if (status4) {
		r5c3.setAttribute('class', 'chip');
		whosTurn(r5c3);
	}
	else if (status3) {
		r4c3.setAttribute('class', 'chip');
		whosTurn(r4c3);
	}
	else if (status2) {
		r3c3.setAttribute('class', 'chip');
		whosTurn(r3c3);
	}
	else if (status1) {
		r2c3.setAttribute('class', 'chip');
		whosTurn(r2c3);
	}
	else {
		r1c3.setAttribute('class', 'chip');
		whosTurn(r1c3);
	}
}

var placeChipColumn4 = function() {
	var status1 = (r1c4.getAttribute('class') === "chip1" || r1c4.getAttribute('class') === "chip2");
	var status2 = (r2c4.getAttribute('class') === "chip1" || r2c4.getAttribute('class') === "chip2");
	var status3 = (r3c4.getAttribute('class') === "chip1" || r3c4.getAttribute('class') === "chip2");
	var status4 = (r4c4.getAttribute('class') === "chip1" || r4c4.getAttribute('class') === "chip2");
	var status5 = (r5c4.getAttribute('class') === "chip1" || r5c4.getAttribute('class') === "chip2");
	var status6 = (r6c4.getAttribute('class') === "chip1" || r6c4.getAttribute('class') === "chip2");

	if (status6) {
		alert('This column is full!');
	}
	else if (status5) {
		r6c4.setAttribute('class', 'chip');
		whosTurn(r6c4);
	}
	else if (status4) {
		r5c4.setAttribute('class', 'chip');
		whosTurn(r5c4);
	}
	else if (status3) {
		r4c4.setAttribute('class', 'chip');
		whosTurn(r4c4);
	}
	else if (status2) {
		r3c4.setAttribute('class', 'chip');
		whosTurn(r3c4);
	}
	else if (status1) {
		r2c4.setAttribute('class', 'chip');
		whosTurn(r2c4);
	}
	else {
		r1c4.setAttribute('class', 'chip');
		whosTurn(r1c4);
	}
}

var placeChipColumn5 = function() {
	var status1 = (r1c5.getAttribute('class') === "chip1" || r1c5.getAttribute('class') === "chip2");
	var status2 = (r2c5.getAttribute('class') === "chip1" || r2c5.getAttribute('class') === "chip2");
	var status3 = (r3c5.getAttribute('class') === "chip1" || r3c5.getAttribute('class') === "chip2");
	var status4 = (r4c5.getAttribute('class') === "chip1" || r4c5.getAttribute('class') === "chip2");
	var status5 = (r5c5.getAttribute('class') === "chip1" || r5c5.getAttribute('class') === "chip2");
	var status6 = (r6c5.getAttribute('class') === "chip1" || r6c5.getAttribute('class') === "chip2");

	if (status6) {
		alert('This column is full!');
	}
	else if (status5) {
		r6c5.setAttribute('class', 'chip');
		whosTurn(r6c5);
	}
	else if (status4) {
		r5c5.setAttribute('class', 'chip');
		whosTurn(r5c5);
	}
	else if (status3) {
		r4c5.setAttribute('class', 'chip');
		whosTurn(r4c5);
	}
	else if (status2) {
		r3c5.setAttribute('class', 'chip');
		whosTurn(r3c5);
	}
	else if (status1) {
		r2c5.setAttribute('class', 'chip');
		whosTurn(r2c5);
	}
	else {
		r1c5.setAttribute('class', 'chip');
		whosTurn(r1c5);
	}
}

var placeChipColumn6 = function() {
	var status1 = (r1c6.getAttribute('class') === "chip1" || r1c6.getAttribute('class') === "chip2");
	var status2 = (r2c6.getAttribute('class') === "chip1" || r2c6.getAttribute('class') === "chip2");
	var status3 = (r3c6.getAttribute('class') === "chip1" || r3c6.getAttribute('class') === "chip2");
	var status4 = (r4c6.getAttribute('class') === "chip1" || r4c6.getAttribute('class') === "chip2");
	var status5 = (r5c6.getAttribute('class') === "chip1" || r5c6.getAttribute('class') === "chip2");
	var status6 = (r6c6.getAttribute('class') === "chip1" || r6c6.getAttribute('class') === "chip2");

	if (status6) {
		alert('This column is full!');
	}
	else if (status5) {
		r6c6.setAttribute('class', 'chip');
		whosTurn(r6c6);
	}
	else if (status4) {
		r5c6.setAttribute('class', 'chip');
		whosTurn(r5c6);
	}
	else if (status3) {
		r4c6.setAttribute('class', 'chip');
		whosTurn(r4c6);
	}
	else if (status2) {
		r3c6.setAttribute('class', 'chip');
		whosTurn(r3c6);
	}
	else if (status1) {
		r2c6.setAttribute('class', 'chip');
		whosTurn(r2c6);
	}
	else {
		r1c6.setAttribute('class', 'chip');
		whosTurn(r1c6);
	}
}

var placeChipColumn7 = function() {
	var status1 = (r1c7.getAttribute('class') === "chip1" || r1c7.getAttribute('class') === "chip2");
	var status2 = (r2c7.getAttribute('class') === "chip1" || r2c7.getAttribute('class') === "chip2");
	var status3 = (r3c7.getAttribute('class') === "chip1" || r3c7.getAttribute('class') === "chip2");
	var status4 = (r4c7.getAttribute('class') === "chip1" || r4c7.getAttribute('class') === "chip2");
	var status5 = (r5c7.getAttribute('class') === "chip1" || r5c7.getAttribute('class') === "chip2");
	var status6 = (r6c7.getAttribute('class') === "chip1" || r6c7.getAttribute('class') === "chip2");

	if (status6) {
		alert('This column is full!');
	}
	else if (status5) {
		r6c7.setAttribute('class', 'chip');
		whosTurn(r6c7);
	}
	else if (status4) {
		r5c7.setAttribute('class', 'chip');
		whosTurn(r5c7);
	}
	else if (status3) {
		r4c7.setAttribute('class', 'chip');
		whosTurn(r4c7);
	}
	else if (status2) {
		r3c7.setAttribute('class', 'chip');
		whosTurn(r3c7);
	}
	else if (status1) {
		r2c7.setAttribute('class', 'chip');
		whosTurn(r2c7);
	}
	else {
		r1c7.setAttribute('class', 'chip');
		whosTurn(r1c7);
	}
}

var allTDs = [r1c1, r2c1, r3c1, r4c1, r5c1, r6c1, r1c2, r2c2, r3c2, r4c2, r5c2, r6c2, r1c3, r2c3, r3c3, r4c3, r5c3, r6c3, r1c4, r2c4,
r3c4, r4c4, r5c4, r6c4, r1c5, r2c5, r3c5, r4c5, r5c5, r6c5, r1c6, r2c6, r3c6, r4c6, r5c6, r6c6, r1c7, r2c7, r3c7, r4c7, r5c7, r6c7];

//document.getElementsByTagName('td');
var reset = function() {

	for (var i = 0; i < 42; i++) {
		allTDs[i].removeAttribute('class');
	}
	/*
	r1c1.removeAttribute('class');
	r2c1.removeAttribute('class');
	r3c1.removeAttribute('class');
	r4c1.removeAttribute('class');
	r5c1.removeAttribute('class');
	r6c1.removeAttribute('class');
	r1c2.removeAttribute('class');
	r2c2.removeAttribute('class');
	r3c2.removeAttribute('class');
	r4c2.removeAttribute('class');
	r5c2.removeAttribute('class');
	r6c2.removeAttribute('class');
	r1c3.removeAttribute('class');
	r2c3.removeAttribute('class');
	r3c3.removeAttribute('class');
	r4c3.removeAttribute('class');
	r5c3.removeAttribute('class');
	r6c3.removeAttribute('class');
	r1c4.removeAttribute('class');
	r2c4.removeAttribute('class');
	r3c4.removeAttribute('class');
	r4c4.removeAttribute('class');
	r5c4.removeAttribute('class');
	r6c4.removeAttribute('class');
	r1c5.removeAttribute('class');
	r2c5.removeAttribute('class');
	r3c5.removeAttribute('class');
	r4c5.removeAttribute('class');
	r5c5.removeAttribute('class');
	r6c5.removeAttribute('class');
	r1c6.removeAttribute('class');
	r2c6.removeAttribute('class');
	r3c6.removeAttribute('class');
	r4c6.removeAttribute('class');
	r5c6.removeAttribute('class');
	r6c6.removeAttribute('class');
	r1c7.removeAttribute('class');
	r2c7.removeAttribute('class');
	r3c7.removeAttribute('class');
	r4c7.removeAttribute('class');
	r5c7.removeAttribute('class');
	r6c7.removeAttribute('class');
	*/

	whoIsUp.textContent = ("PLAYER 1 IS UP");
	whoIsUp.setAttribute('class', 'chip1');
	return turnCounter = 1;
}

var button1 = document.getElementById('placeButton1');
button1.addEventListener('click', placeChipColumn1);

var button2 = document.getElementById('placeButton2');
button2.addEventListener('click', placeChipColumn2);

var button3 = document.getElementById('placeButton3');
button3.addEventListener('click', placeChipColumn3);

var button4 = document.getElementById('placeButton4');
button4.addEventListener('click', placeChipColumn4);

var button5 = document.getElementById('placeButton5');
button5.addEventListener('click', placeChipColumn5);

var button6 = document.getElementById('placeButton6');
button6.addEventListener('click', placeChipColumn6);

var button7 = document.getElementById('placeButton7');
button7.addEventListener('click', placeChipColumn7);

var resetButton = document.getElementById('resetGame');
resetButton.addEventListener('click', reset);

var turnCounter = 1; 

var whosTurn = function(input) {
	if (turnCounter % 2 === 1) {
		input.setAttribute('class', 'chip1');
		whosUp();
		conclusion();
		return turnCounter ++;
	}
	else {
		input.setAttribute('class', 'chip2');	
		whosUp();
		conclusion();
		return turnCounter ++;
	}
}

var whoIsUp = document.getElementById('whoIsUp');
whoIsUp.textContent = ("PLAYER 1 IS UP");
whoIsUp.setAttribute('class', 'chip1');	

var whosUp = function() {
	if (turnCounter % 2 === 0) {
		whoIsUp.textContent = ("PLAYER 1 IS UP");
		whoIsUp.setAttribute('class', 'chip1');		
	}
	else {
		whoIsUp.textContent = ("PLAYER 2 IS UP");
		whoIsUp.setAttribute('class', 'chip2');			
	}
}

var conclusion = function() {
	var status111 = r1c1.getAttribute('class') === "chip1";
	var status211 = r2c1.getAttribute('class') === "chip1";
	var status311 = r3c1.getAttribute('class') === "chip1";
	var status411 = r4c1.getAttribute('class') === "chip1";
	var status511 = r5c1.getAttribute('class') === "chip1";
	var status611 = r6c1.getAttribute('class') === "chip1";
	var status121 = r1c2.getAttribute('class') === "chip1";
	var status221 = r2c2.getAttribute('class') === "chip1";
	var status321 = r3c2.getAttribute('class') === "chip1";
	var status421 = r4c2.getAttribute('class') === "chip1";
	var status521 = r5c2.getAttribute('class') === "chip1";
	var status621 = r6c2.getAttribute('class') === "chip1";
	var status131 = r1c3.getAttribute('class') === "chip1";
	var status231 = r2c3.getAttribute('class') === "chip1";
	var status331 = r3c3.getAttribute('class') === "chip1";
	var status431 = r4c3.getAttribute('class') === "chip1";
	var status531 = r5c3.getAttribute('class') === "chip1";
	var status631 = r6c3.getAttribute('class') === "chip1";
	var status141 = r1c4.getAttribute('class') === "chip1";
	var status241 = r2c4.getAttribute('class') === "chip1";
	var status341 = r3c4.getAttribute('class') === "chip1";
	var status441 = r4c4.getAttribute('class') === "chip1";
	var status541 = r5c4.getAttribute('class') === "chip1";
	var status641 = r6c4.getAttribute('class') === "chip1";
	var status151 = r1c5.getAttribute('class') === "chip1";
	var status251 = r2c5.getAttribute('class') === "chip1";
	var status351 = r3c5.getAttribute('class') === "chip1";
	var status451 = r4c5.getAttribute('class') === "chip1";
	var status551 = r5c5.getAttribute('class') === "chip1";
	var status651 = r6c5.getAttribute('class') === "chip1";
	var status161 = r1c6.getAttribute('class') === "chip1";
	var status261 = r2c6.getAttribute('class') === "chip1";
	var status361 = r3c6.getAttribute('class') === "chip1";
	var status461 = r4c6.getAttribute('class') === "chip1";
	var status561 = r5c6.getAttribute('class') === "chip1";
	var status661 = r6c6.getAttribute('class') === "chip1";
	var status171 = r1c7.getAttribute('class') === "chip1";
	var status271 = r2c7.getAttribute('class') === "chip1";
	var status371 = r3c7.getAttribute('class') === "chip1";
	var status471 = r4c7.getAttribute('class') === "chip1";
	var status571 = r5c7.getAttribute('class') === "chip1";
	var status671 = r6c7.getAttribute('class') === "chip1";
	var status112 = r1c1.getAttribute('class') === "chip2";
	var status212 = r2c1.getAttribute('class') === "chip2";
	var status312 = r3c1.getAttribute('class') === "chip2";
	var status412 = r4c1.getAttribute('class') === "chip2";
	var status512 = r5c1.getAttribute('class') === "chip2";
	var status612 = r6c1.getAttribute('class') === "chip2";
	var status122 = r1c2.getAttribute('class') === "chip2";
	var status222 = r2c2.getAttribute('class') === "chip2";
	var status322 = r3c2.getAttribute('class') === "chip2";
	var status422 = r4c2.getAttribute('class') === "chip2";
	var status522 = r5c2.getAttribute('class') === "chip2";
	var status622 = r6c2.getAttribute('class') === "chip2";
	var status132 = r1c3.getAttribute('class') === "chip2";
	var status232 = r2c3.getAttribute('class') === "chip2";
	var status332 = r3c3.getAttribute('class') === "chip2";
	var status432 = r4c3.getAttribute('class') === "chip2";
	var status532 = r5c3.getAttribute('class') === "chip2";
	var status632 = r6c3.getAttribute('class') === "chip2";
	var status142 = r1c4.getAttribute('class') === "chip2";
	var status242 = r2c4.getAttribute('class') === "chip2";
	var status342 = r3c4.getAttribute('class') === "chip2";
	var status442 = r4c4.getAttribute('class') === "chip2";
	var status542 = r5c4.getAttribute('class') === "chip2";
	var status642 = r6c4.getAttribute('class') === "chip2";
	var status152 = r1c5.getAttribute('class') === "chip2";
	var status252 = r2c5.getAttribute('class') === "chip2";
	var status352 = r3c5.getAttribute('class') === "chip2";
	var status452 = r4c5.getAttribute('class') === "chip2";
	var status552 = r5c5.getAttribute('class') === "chip2";
	var status652 = r6c5.getAttribute('class') === "chip2";
	var status162 = r1c6.getAttribute('class') === "chip2";
	var status262 = r2c6.getAttribute('class') === "chip2";
	var status362 = r3c6.getAttribute('class') === "chip2";
	var status462 = r4c6.getAttribute('class') === "chip2";
	var status562 = r5c6.getAttribute('class') === "chip2";
	var status662 = r6c6.getAttribute('class') === "chip2";
	var status172 = r1c7.getAttribute('class') === "chip2";
	var status272 = r2c7.getAttribute('class') === "chip2";
	var status372 = r3c7.getAttribute('class') === "chip2";
	var status472 = r4c7.getAttribute('class') === "chip2";
	var status572 = r5c7.getAttribute('class') === "chip2";
	var status672 = r6c7.getAttribute('class') === "chip2";

	var combo1 = [status111, status121, status131, status141];
	var combo2 = [status121, status131, status141, status151];
	var combo3 = [status131, status141, status151, status161];
	var combo4 = [status141, status151, status161, status171];
	var combo5 = [status211, status221, status231, status241];
	var combo6 = [status221, status231, status241, status251];
	var combo7 = [status231, status241, status251, status261];
	var combo8 = [status241, status251, status261, status271];
	var combo9 = [status311, status321, status331, status341];
	var combo10 = [status321, status331, status341, status351];
	var combo11 = [status331, status341, status351, status361];
	var combo12 = [status341, status351, status361, status371];
	var combo13 = [status411, status421, status431, status441];
	var combo14 = [status421, status431, status441, status451];
	var combo15 = [status431, status441, status451, status461];
	var combo16 = [status441, status451, status461, status471];
	var combo17 = [status511, status521, status531, status541];
	var combo18 = [status521, status531, status541, status551];
	var combo19 = [status531, status541, status551, status561];
	var combo20 = [status541, status551, status561, status571];
	var combo21 = [status611, status621, status631, status641];
	var combo22 = [status621, status631, status641, status651];
	var combo23 = [status631, status641, status651, status661];
	var combo24 = [status641, status651, status661, status671];
	var combo25 = [status111, status211, status311, status411];
	var combo26 = [status211, status311, status411, status511];
	var combo27 = [status311, status411, status511, status611];
	var combo28 = [status121, status221, status321, status421];
	var combo29 = [status221, status321, status421, status521];
	var combo30 = [status321, status421, status521, status621];
	var combo31 = [status131, status231, status331, status431];
	var combo32 = [status231, status331, status431, status531];
	var combo33 = [status331, status431, status531, status631];
	var combo34 = [status141, status241, status341, status441];
	var combo35 = [status241, status341, status441, status541];
	var combo36 = [status341, status441, status541, status641];
	var combo37 = [status151, status251, status351, status451];
	var combo38 = [status251, status351, status451, status551];
	var combo39 = [status351, status451, status551, status651];
	var combo40 = [status161, status261, status361, status461];
	var combo41 = [status261, status361, status461, status561];
	var combo42 = [status361, status461, status561, status661];
	var combo43 = [status171, status271, status371, status471];
	var combo44 = [status271, status371, status471, status571];
	var combo45 = [status371, status471, status571, status671];
	var combo46 = [status411, status321, status231, status141];
	var combo47 = [status511, status421, status331, status241];
	var combo48 = [status421, status331, status241, status151];
	var combo49 = [status611, status521, status431, status341];
	var combo50 = [status521, status431, status341, status251];
	var combo51 = [status431, status341, status251, status161];
	var combo52 = [status621, status531, status441, status351];
	var combo53 = [status531, status441, status351, status261];
	var combo54 = [status441, status351, status261, status171];
	var combo55 = [status541, status451, status361, status271];
	var combo56 = [status631, status541, status451, status361];
	var combo57 = [status641, status551, status461, status371];
	var combo58 = [status141, status251, status361, status471];
	var combo59 = [status131, status241, status351, status461];
	var combo60 = [status241, status351, status461, status571];
	var combo61 = [status121, status231, status341, status451];
	var combo62 = [status231, status341, status451, status561];
	var combo63 = [status341, status451, status561, status671];
	var combo64 = [status111, status221, status331, status441];
	var combo65 = [status221, status331, status441, status551];
	var combo66 = [status331, status441, status551, status661];
	var combo67 = [status211, status321, status431, status541];
	var combo68 = [status321, status431, status541, status651];
	var combo69 = [status311, status421, status531, status641];
	var combo70 = [status112, status122, status132, status142];
	var combo71 = [status122, status132, status142, status152];
	var combo72 = [status132, status142, status152, status162];
	var combo73 = [status142, status152, status162, status172];
	var combo74 = [status212, status222, status232, status242];
	var combo75 = [status222, status232, status242, status252];
	var combo76 = [status232, status242, status252, status262];
	var combo77 = [status242, status252, status262, status272];
	var combo78 = [status312, status322, status332, status342];
	var combo79 = [status322, status332, status342, status352];
	var combo80 = [status332, status342, status352, status362];
	var combo81 = [status342, status352, status362, status372];
	var combo82 = [status412, status422, status432, status442];
	var combo83 = [status422, status432, status442, status452];
	var combo84 = [status432, status442, status452, status462];
	var combo85 = [status442, status452, status462, status472];
	var combo86 = [status512, status522, status532, status542];
	var combo87 = [status522, status532, status542, status552];
	var combo88 = [status532, status542, status552, status562];
	var combo89 = [status542, status552, status562, status572];
	var combo90 = [status612, status622, status632, status642];
	var combo91 = [status622, status632, status642, status652];
	var combo92 = [status632, status642, status652, status662];
	var combo93 = [status642, status652, status662, status672];
	var combo94 = [status112, status212, status312, status412];
	var combo95 = [status212, status312, status412, status512];
	var combo96 = [status312, status412, status512, status612];
	var combo97 = [status122, status222, status322, status422];
	var combo98 = [status222, status322, status422, status522];
	var combo99 = [status322, status422, status522, status622];
	var combo100 = [status132, status232, status332, status432];
	var combo101 = [status232, status332, status432, status532];
	var combo102 = [status332, status432, status532, status632];
	var combo103 = [status142, status242, status342, status442];
	var combo104 = [status242, status342, status442, status542];
	var combo105 = [status342, status442, status542, status642];
	var combo106 = [status152, status252, status352, status452];
	var combo107 = [status252, status352, status452, status552];
	var combo108 = [status352, status452, status552, status652];
	var combo109 = [status162, status262, status362, status462];
	var combo110 = [status262, status362, status462, status562];
	var combo111 = [status362, status462, status562, status662];
	var combo112 = [status172, status272, status372, status472];
	var combo113 = [status272, status372, status472, status572];
	var combo114 = [status372, status472, status572, status672];
	var combo115 = [status412, status322, status232, status142];
	var combo116 = [status512, status422, status332, status242];
	var combo117 = [status422, status332, status242, status152];
	var combo118 = [status612, status522, status432, status342];
	var combo119 = [status522, status432, status342, status252];
	var combo120 = [status432, status342, status252, status162];
	var combo121 = [status622, status532, status442, status352];
	var combo122 = [status532, status442, status352, status262];
	var combo123 = [status442, status352, status262, status172];
	var combo124 = [status542, status452, status362, status272];
	var combo125 = [status632, status542, status452, status362];
	var combo126 = [status642, status552, status462, status372];
	var combo127 = [status142, status252, status362, status472];
	var combo128 = [status132, status242, status352, status462];
	var combo129 = [status242, status352, status462, status572];
	var combo130 = [status122, status232, status342, status452];
	var combo131 = [status232, status342, status452, status562];
	var combo132 = [status342, status452, status562, status672];
	var combo133 = [status112, status222, status332, status442];
	var combo134 = [status222, status332, status442, status552];
	var combo135 = [status332, status442, status552, status662];
	var combo136 = [status212, status322, status432, status542];
	var combo137 = [status322, status432, status542, status652];
	var combo138 = [status312, status422, status532, status642];

	var comboArray = [combo1, combo2, combo3, combo4, combo5, combo6, combo7, combo8, combo9,
combo10, combo11, combo12, combo13, combo14, combo15, combo16, combo17, combo18, combo19, combo20, combo21, combo22, combo23, 
combo24, combo25, combo26, combo27, combo28, combo29, combo30, combo31, combo32, combo33, combo34, combo35, combo36, 
combo37, combo38, combo39, combo40, combo41, combo42, combo43, combo44, combo45, combo46, combo47, combo48, combo49, 
combo50, combo51, combo52, combo53, combo54, combo55, combo56, combo57, combo58, combo59, combo60, combo61, combo62, combo63, 
combo64, combo65, combo66, combo67, combo68, combo69, combo70, combo71, combo72, combo73, combo74, combo75, combo76, 
combo77, combo78, combo79, combo80, combo81, combo82, combo83, combo84, combo85, combo86, combo87, combo88, combo89, combo90, 
combo91, combo92, combo93, combo94, combo95, combo96, combo97, combo98, combo99, combo100, combo101, combo102, combo103, 
combo104, combo105, combo106, combo107, combo108, combo109, combo110, combo111, combo112, combo113, combo114, combo115, 
combo116, combo117, combo118, combo119, combo120, combo121, combo122, combo123, combo124, combo125, combo126, 
combo127, combo128, combo129, combo130, combo131, combo132, combo133, combo134, combo135, combo136, combo137, combo138];

	for (var j = 0; j < 69; j++) {
		if (comboArray[j][0] === true && comboArray[j][1] === true && comboArray[j][2] === true && comboArray[j][3] === true) {
			alert("RED WINS!");
		}
	}
	for (var j = 69; j < 138; j++) {
		if (comboArray[j][0] === true && comboArray[j][1] === true && comboArray[j][2] === true && comboArray[j][3] === true) {
			alert("BLUE WINS!");
		}
	}

	if (turnCounter === 42) {
		alert("The game has ended in a tie");
	}
}

console.log("ohhh yeahh");

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