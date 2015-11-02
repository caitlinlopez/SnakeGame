var snake;

var context;
var screenWidth;
var screenHeight;

function gameInitialize() {
    var canvas = document.getElementsById("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

function gameLoop() {
    
}

function gameDraw() {
    context.fillStyle = "rgb(0, 0, 0)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}