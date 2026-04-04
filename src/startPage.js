

import { drawCars, spawnCars, updateCars} from "./car.js";
import { ctx, canvas } from "./main.js";
import { drawObstacles, drawScene, spawnObstacles, updateDetails, updateDetails, updateRoad} from "./scene.js";

let animationId = null;
let lastTime = 0;

export function startPage(){
    animationId = requestAnimationFrame(startPageLoop);
};

export function startPageLoop(currentTime){

    ctx.clearRect(0, 0, canvas.width , canvas.height);
    let delta = (currentTime - lastTime) / 1000;
    if(delta > 0.1) delta = 0.1;

    lastTime = currentTime;

    spawnCars(delta);
    spawnObstacles(delta);

    updateRoad(delta);
    updateCars(delta);
    updateDetails(delta);


    drawScene();
    drawObstacles();
    drawCars();

    animationId = requestAnimationFrame(startPageLoop);
};
