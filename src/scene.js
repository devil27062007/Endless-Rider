import { player } from "./character.js";
import { canvas, ctx, summerDetailsSpriteSheet , summerGasStationSpriteSheet, summerRoadSpriteSheet} from "./main.js";
import { summer } from "./spriteCoordinates.js";

let currentScene = "summer";
let nextSceneSpawnTime = 100;
let currentTime = 0;

let startY = 0;
let roadSinceLastBunk = 2;
let roadUntillNextBunk = 6;
let bunkSpacingIncrease = 2;

let count = 2;

export const sceneArray = {
    "summer": summer,
}

export let sceneSpriteSheetArray;
export let posX, posY;

export function initSheet(){
    sceneSpriteSheetArray = {
        "summer" :{
            "road":summerRoadSpriteSheet,
            "gasStation":summerGasStationSpriteSheet,
            "details": summerDetailsSpriteSheet,
        }
    };
};

export function initRoadPos(){
    const road = summer["road"];
    posX = (canvas.width / window.devicePixelRatio / 2) - (road.sw / 2);
    posY = canvas.height / window.devicePixelRatio;

    const screenH = posY;
    const roadsNeeded= Math.ceil((screenH + 3)/ road.stackHeight ) + 2;
    for(let i = 0; i<roadsNeeded ; i++){
        roads.push("road");
    }
};

export const scene = ["summer", "winter","desert"];
export const roads = [];

export function randomSceneGeneration(delta){
    currentTime += delta;
    if(currentTime > nextSceneSpawnTime){
        currentTime = 0;
    }
};

export function updateRoad(delta){
    posY += delta * player.speed;

    const road = summer[roads[0]];

    if(posY >= canvas.height / window.devicePixelRatio + road.sh){
        roads.shift();
        posY -= road.stackHeight;

        //roadSinceLastBunk++;

        //if(roadSinceLastBunk >= roadUntillNextBunk){
        //    roadSinceLastBunk=0;
        //    roadUntillNextBunk += bunkSpacingIncrease;
        //    bunkSpacingIncrease+=2;
        //    roads.push("gasStation");
        //}else{
        //    roads.push("road");}
    }

    refillRoads();
}