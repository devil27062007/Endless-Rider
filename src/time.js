let time = null;

export function getTime(){
    return formatTime(Date.now());
};

export function getTimeWhenPlayerDead(){
    time = formatTime(Date.now());
    return time;
};

export function formatTime(time){
    //this function will convert time based on hours minutes and seconds
};

export function bestTime(){
    if(localStorage.getItem("bestTime")){
        let storedTime = localStorage.getItem("bestTime");
        let formatStoredTime = formatTime(time);
        let currentTime = time;

        
    }
}

