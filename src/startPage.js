

import { drawCars, spawnCars, updateCars } from "./car.js";
import { changeDefaultPlayer } from "./character.js";
import { buttonSpriteSheet, canvas, ctx, desertRoadSpriteSheet,npcSpriteSheet, playerSpriteSheet1, playerSpriteSheet2, playerSpriteSheet3, playerSpriteSheet4, summerRoadSpriteSheet,winterRoadSpriteSheet } from "./main.js";
import { addScene, posX,posY, randomSceneGeneration, removeScene,scene, drawObstacles, drawScene, spawnObstacles, updateDetails, updateRoad } from "./scene.js";
import { closeButtonSprite, desert, npc1Sprite,npc2Sprite, npc3Sprite, player1Sprite, player2SSprite, startPageUI, summer, winter} from "./spriteCoordinates.js";

let animationId = null;
let lastTime = 0;

export let pos = {};
export let closePos = [];
export let carPos = {};
export let activeCar = "player1Sprite";
export let isActiveButton = [];
export let activeScenes = ["summer"];
export let scenePos = {};

export function startPage() {
    animationId = requestAnimationFrame(startPageLoop);
};

export function startPageLoop(currentTime) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let delta = (currentTime - lastTime) / 1000;
    if (delta > 0.1) delta = 0.1;

    lastTime = currentTime;

    spawnCars(delta);
    spawnObstacles(delta);

    updateRoad(delta);
    updateCars(delta);
    updateDetails(delta);
    updateObstacles(delta);

    randomSceneGeneration(delta);

    drawScene();
    drawObstacles();
    drawCars();

    drawButtons();
    drawPageForActiveButtons();

    animationId = requestAnimationFrame(startPageLoop);
};

export function stopStartPageLoop() {
    cancelAnimationFrame(animationId);
    animationId = null;
    lastTime = 0;

}

export function drawStartPage(delta) {

    spawnObstacles(delta);
    spawnCars(delta);

    updateDetails(delta);
    updateRoad(delta);

    drawScene(delta);
}