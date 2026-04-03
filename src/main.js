import { initCars } from "./car.js";
import { drawPlayer, gameLoop, initPlayer, keys, player, playerSprite, playerSpriteSheet } from "./character.js";
import { initGroundArea } from "./scene.js";
import { loadStartPage } from "./startPage.js";
import { initWallet } from "./wallet.js";

export const roadSpriteSheet = new Image();
roadSpriteSheet.src = "assets/road.svg";

export const grassSpritesheet = new Image();
grassSpritesheet.src = "assets/grass-Photoroom.png";

export const fountain1SpriteSheet = new Image();
fountain1SpriteSheet.src = "assets/fountain1.png";

export const fountain2SpriteSheet = new Image();
fountain2SpriteSheet.src = "assets/fountain2.png";

export const pondSpriteSheet = new Image();
pondSpriteSheet.src = "assets/pond.png";

export const puddleSpriteSheet = new Image();
puddleSpriteSheet.src = "assets/puddle.png";

export const streetLightSpriteSheet = new Image();
streetLightSpriteSheet.src = "assets/street-light,png";

export const canvas = document.getElementById("game-canvas");
export const ctx = canvas.getContext("2d");

export let isGameRunning = true;

function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;

    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    ctx.scale(dpr, dpr);
    initPlayer();
};

playerSpriteSheet.onload = drawPlayer;

window.addEventListener("resize", () => {
    resizeCanvas();
});

resizeCanvas();
initPlayer();
initCars();
initWallet(100);
initGroundArea();

loadStartPage();

let loadedCount = 0;
const imageCount = 2;

function onImageLoad() {
    loadedCount++;
    if (imageCount === loadedCount) {
        console.log("seccess");
    }
};

document.addEventListener('keydown', (e) => {
    switch (e.key.toLowerCase()) {
        case 'w':
        case 'arrowup': keys.up = true; return;
        case 'a':
        case 'arrowleft': keys.left = true; return;
        case 's':
        case 'arrowdown': keys.down = true; return;
        case 'd':
        case 'arrowright': keys.right = true; return
    }
});

document.addEventListener('keyup', (e) => {
    switch (e.key.toLowerCase()) {
        case 'w':
        case 'arrowup': keys.up = false; return;
        case 'a':
        case 'arrowleft': keys.left = false; return;
        case 's':
        case 'arrowdown': keys.down = false; return;
        case 'd':
        case 'arrowright': keys.right = false; return;
    }
});

playerSpriteSheet.onload = onImageLoad;
roadSpriteSheet.onload = onImageLoad;
grassSpritesheet.onload = onImageLoad;
fountain1SpriteSheet.onload = onImageLoad ;
fountain2SpriteSheet.onload = onImageLoad;
streetLightSpriteSheet.onload = onImageLoad;
streetLightSpriteSheet.onload = onImageLoad;
pondSpriteSheet.onload = onImageLoad;