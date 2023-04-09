import TileMap from './Tilemap.js';

const tileSize = 32;
const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')
const tileMap = new TileMap(tileSize);

function gameLoop() {
    tileMap.draw();
console.log("game loop")
}

tileMap.setCanvasSize(canvas)
setInterval(gameLoop, 1000 / 75);
