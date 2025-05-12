let deltax = 10;
let deltay = 10;
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
let numrows = Math.floor(0.8 * vh/deltay);
let numcols = Math.floor(0.9 * vw/deltax);

squareElement = document.createElement("span");
squareElement.classList.add("square");
squareElement.style.width = deltax.toString() + "px";
squareElement.style.height = deltay.toString() + "px";

for (let i = 0; i < numrows; i++) {
	for (let j = 0; j < numcols; j++) {
		document.getElementById("grid").appendChild(squareElement.cloneNode());
	}
}

let foodpos = Math.floor(Math.random() * numrows * numcols);
document.getElementById("grid").childNodes[foodpos].classList.add("food");

let snakelength = 4;
let score = 0;
let direction = "l";
let snakeheadx = snakelength + Math.floor(Math.random() * (numrows - snakelength));
let snakeheady = Math.floor(Math.random() * numcols);
let snakehead = snakeheady * numrows + snakeheadx
let snakeindices = []
for (let i = snakehead; i < snakehead + snakelength; i++) {
	document.getElementById("grid").childNodes[i].classList.add("snake");
	snakeindices.push(i)
}


function moveSnake() {
	if (direction == "l") {
		tail = snakeindices.pop()
		document.getElementById("grid").childNodes[tail].classList.remove("snake");
		if ((snakeindices[0] - 1) % numcols != 0)
			newHead = snakeindices[0] - 1
		else {
			newHead = snakeindices[0] + numcols - 1
		}
	}
	if (direction == "r") {
		tail = snakeindices.pop()
		document.getElementById("grid").childNodes[tail].classList.remove("snake")
		if ((snakeindices[0]) % numcols != 0)
			newHead = snakeindices[0] + 1
		else
			newHead = snakeindices[0] - numcols + 1
	}
	if (direction == "u") {
		tail = snakeindices.pop()
		document.getElementById("grid").childNodes[tail].classList.remove("snake")
		if (snakeindices[0] - numcols < 0)
			newHead = (numrows - 1) * numcols + snakeindices[0]
		else
			newHead = snakeindices[0] - numcols
	}
	if (direction == "d") {
		tail = snakeindices.pop()
		document.getElementById("grid").childNodes[tail].classList.remove("snake")
		if (snakeindices[0] + numcols > numrows * numcols)
			newHead = snakeindices[0] % numcols
		else
			newHead = snakeindices[0] + numcols
	}
	if (snakeindices.includes(newHead)) {
		clearInterval(moveInterval);
		clearInterval(checkInterval);
		alert("You bit yourself! Game Over.");
	}
	else
		snakeindices.unshift(newHead);
	document.getElementById("grid").childNodes[snakeindices[0]].classList.add("snake");
}

function checkHit() {
	if (foodpos == snakeindices[0]) {
		document.getElementById("grid").childNodes[foodpos].classList.remove("food");
		foodpos = Math.floor(Math.random() * numrows * numcols);
		document.getElementById("grid").childNodes[foodpos].classList.add("food");
		snakelength += 1
		tail = snakeindices[snakeindices.length - 1]
		if (direction == "l")
			newTail = tail + 1
		if (direction == "r")
			newTail = tail - 1
		if (direction == "u")
			newTail = tail - numcols
		if (direction == "d")
			newTail = tail + numcols
		document.getElementById("grid").childNodes[newTail].classList.add("snake");
		snakeindices.push(newTail)
		score += snakelength
		document.getElementById("score").innerHTML = "SCORE = " + String(score);
	}
}

document.addEventListener("keyup", control);

const moveInterval = setInterval(moveSnake, 50);
const checkInterval = setInterval(checkHit, 50);


function control(e) {
  keycode = (window.event) ? e.which : e.keyCode;
  if (keycode === 39 && direction != "l") {
    direction = "r"; // right
  } else if (keycode === 38 && direction != "d") {
    direction = "u"; //if we press the up arrow, the snake will go ten divs up
  } else if (keycode === 37 && direction != "r") {
    direction = "l"; // left, the snake will go left one div
  } else if (keycode === 40 && direction != "u") {
    direction = "d"; // down the snake head will instantly appear 10 divs below from the current div
  }
}

function navDirection(button) {
    if (["l", "u", "d", "r"][button] != direction)
	    direction = ["l", "u", "d", "r"][button];
}
