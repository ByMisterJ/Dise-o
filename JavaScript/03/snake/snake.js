let blockSize = 25;
let total_row = 20; //numero total por fila
let total_col = 20; //numero total por columna
let board;
let context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

// numero total de filas y columnas 
let speedX = 0; //velocidad x de la serpiente
let speedY = 0; //velocidad y de la serpiente

let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;

window.onload = function () {
	// tamaño del tablero
	board = document.getElementById("board");
	board.height = total_row * blockSize;
	board.width = total_col * blockSize;
	context = board.getContext("2d");

	placeFood();
	document.addEventListener("keyup", changeDirection); //movimiento
	// velocidad de la serpiente
	setInterval(update, 1000 / 10);
}

function update() {
	if (gameOver) {
		return;
	}

	// fondo
	context.fillStyle = "lightgreen";
	context.fillRect(0, 0, board.width, board.height);

	// comida
	context.fillStyle = "red";
	context.fillRect(foodX, foodY, blockSize, blockSize);

	if (snakeX == foodX && snakeY == foodY) {
		snakeBody.push([foodX, foodY]);
		placeFood();
	}

	// crecimiento de serpiente
	for (let i = snakeBody.length - 1; i > 0; i--) {
		snakeBody[i] = snakeBody[i - 1];
	}
	if (snakeBody.length) {
		snakeBody[0] = [snakeX, snakeY];
	}

	context.fillStyle = "darkgreen";
	snakeX += speedX * blockSize; //actualizacion de la serpiente en cordenada x
	snakeY += speedY * blockSize; //actualizacion de la serpiente en cordenada y
	context.fillRect(snakeX, snakeY, blockSize, blockSize);
	for (let i = 0; i < snakeBody.length; i++) {
		context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
	}

	if (snakeX < 0 
		|| snakeX > total_col * blockSize 
		|| snakeY < 0 
		|| snakeY > total_row * blockSize) { 
		
		// Out of bound condition
		gameOver = true;
		alert("Game Over");
	}

	for (let i = 0; i < snakeBody.length; i++) {
		if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) { 
			
			// serpiente se suicida
			gameOver = true;
			alert("Game Over");
		}
	}
}

// movimiento de serpiente
function changeDirection(e) {
	if (e.code == "ArrowUp" && speedY != 1) { 
		// la serpiente no se movera en la direccion contraria
        // arriba
		speedX = 0;
		speedY = -1;
	}
	else if (e.code == "ArrowDown" && speedY != -1) {
		// abajo
		speedX = 0;
		speedY = 1;
	}
	else if (e.code == "ArrowLeft" && speedX != 1) {
		// izquierda
		speedX = -1;
		speedY = 0;
	}
	else if (e.code == "ArrowRight" && speedX != -1) { 
		// derecha
		speedX = 1;
		speedY = 0;
	}
}

// spawn comida
function placeFood() {

	// en cordenada x
	foodX = Math.floor(Math.random() * total_col) * blockSize; 
	
	// en cordenada y
	foodY = Math.floor(Math.random() * total_row) * blockSize; 
}
