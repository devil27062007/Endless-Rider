

import { drawCars, spawnCars, updateCars } from "./car.js";
import { changeDefaultPlayer } from "./character.js";
import { buttonSpriteSheet, buttonsSpriteSheet, canvas, ctx, desertRoadSpriteSheet,npcSpriteSheet, playerSpriteSheet1, playerSpriteSheet2, playerSpriteSheet3, playerSpriteSheet4, summerRoadSpriteSheet,winterRoadSpriteSheet } from "./main.js";
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

export function drawButtons(){
    const keys = Object.keys(startPageUI);
    let currentX = posX - startPageUI["start"].sw - scale * 3;
    let currentY = canvas.height / window.devicePixelRatio / 2 - keys.length / 2 * startPageUI["start"].sh;
    for(let i = 0; i < keys.length; i++){

        const sprite = startPageUI[keys[i]];
        ctx.drawImage(
            buttonsSpriteSheet,
            sprite.x, sprite.y, sprite.w, sprite.h,
            currentX, currentY, sprite.sw, sprite.sh
        );

        pos[keys[i]] = {
            x: currentX,
            y: currentY,
            w: sprite.sw,
            h: sprite.sh,
        }

        currentY += sprite.sh * 2;
    }
};

export function isClickOnStartButton(x, y){
    return(
        x >= pos["start"].x &&
        x <= pos["start"].x + pos["start"].w &&
        y >= pos["start"].y &&
        y <= pos["start"].y + pos["start"].h
    );
}

export function isClickOnSceneButton(x,y){
    return (
        x >= pos["scene"].x &&
        x <= pos["scene"].x + pos["scene"].w &&
        y >= pos["scene"].y &&
        y <= pos["scene"].y + pos["scene"].h
    )
};

export function isClickOnColorButton(x,y){
    return(
        x >= pos["cars"].x &&
        x <= pos["cars"].x + pos["cars"].w &&
        y >= pos["cars"].y &&
        y <= pos["cars"].y + pos["cars"].h
    )
};

export function isClickOnShopButton(x , y){
    return(
        x >= pos["shop"].x &&
        x <= pos["shop"].x + pos["shop"].w &&
        y >= pos["shop"].y &&
        y <= pos["shop"].y + pos["shop"].h
    );
};

export function clearIsActiveButton(){
    isActiveButton[0] = null;
};

