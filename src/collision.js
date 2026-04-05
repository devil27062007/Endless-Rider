import { cars } from "./car.js";
import { player , playerSprite } from "./character.js";
import { ctx } from "./main.js";
import { gasStationObstacles, obstacles } from "./scene.js";

const directionAngles = {
    up: -Math.PI / 2,
    upRight: -Math.PI / 4,
    upLeft: -3 * Math.PI / 4,
}

export function getCarCorners(player, paddingX = 4, paddingY = 4){
    const angle = directionAngles[player.currentFacing] ?? 0;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const w = player.w / 2 - paddingX;
    const h = player.h / 2 - paddingY;

    const cx = player.x + player.w / 2;
    const cy = player.y + player.h / 2;
}

function rotatePoint(px, py, cx, cy, angleRad){
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);
    return {
        x: cx + (px - cx) * cos - (py - cy) * sin,
        y: cy + (px - cx) * sin + (py - cy) * cos,
    };
}

function getPlayerpoints(){
    const sprite = playerSprite[player.currentFacing];
    const x = player.x;
    const y = player.y;
    const w = sprite.sw;
    const h = sprite.sh;

    //center of the sprite
    const cx = x + w / 2;
    const cy = y + h / 2;

    //base "up" shape points
    const basePoints = [
        { x: x + w * 0, y: y},
        { x: x + w * 0.9, y: y},
        { x: x + w * 0.9, y: y + h},
        { x: x + w * 0, y: y + h }
    ]

    let angle = 0;
    if(player.currentFacing === "upRight") angle = 35 * (Math.PI / 180);
    if(player.currentFacing === "upLeft") angle -= 35 * (Math.PI / 180);

    return basePoints.map(p => rotatePoint(p.x, p.y, cx, cy, angle));
}

export function drawPlayerBox(){
}
//collision for obstacles and npc
export function checkCollision(){
    let check = checkObstacleCollision();
    if(check){
        return true;
    }
    check = checkNPCCarCollision();
    if(check){
        return true;
    }

}

export function checkObstacleCollision(){
    for(let i = 0; i < obstacles.length; i++){
        const obs = obstacles[i];
    };
};

export function chechGasStationObstacleCollision(){

};

export function checkNPCCarCollision(){

};
