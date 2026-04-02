import { drawPlayer,gameLoop, keys, player, playerSprite, playerSpriteSheet } from "./character.js";

export const canvas = document.getElementById("game-canvas");
export const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawPlayer();
}

playerSpriteSheet.onload = drawPlayer;

window.addEventListener("resize", () => {
    resizeCanvas();
})
resizeCanvas();

function imageLoaded(){
    let imageCount = 1 ;
    let loadedCount = 0;

    if(playerSpriteSheet.onload){
        loadedCount += 1 ;
    }

    return imageCount === loadedCount ;
}

function startGame(){
    const check = imageLoaded();
    if(check){
        requestAnimationFrame(gameLoop);
    } else {
        console.log("game assets no yet loaded");
    }
}

document.addEventListener('keydown',(e) =>{
    console.log(e.key);
    switch(e.key.toLowerCase()){
        case 'w':
        case 'arrowup':keys.up = true ; return;
        case 'a':
        case 'arrowleft': keys.left = true ; return ;
        case 's':
        case 'arrowdown':keys.down = true ; return ;
        case 'd':
        case'arrowright':keys.down = true ; return
    }
});

document.addEventListener('keyup',(e)=>{
    switch(e.key.toLowerCase()){
        case 'w':
        case 'arrowup': keys.up = false ; return ;
        case 'a':
        case 'arrowup': keys.left = false ; return ;
        case 's':
        case 'arrowdown': keys.down = false ; return ;
        case 'd':
        case 'arrowright': keys.right = false; return;
    }
});

startGame();