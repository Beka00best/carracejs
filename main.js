const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');
car.classList.add('car');

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};

const setting = {
    start: false,
    score: 0,
    speed: 3
};

function startGame(){
    "use strict";
    start.classList.add('hide');
    setting.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}

function playGame(){
    "use strict";
    if (setting.start){
        requestAnimationFrame(playGame);
    }
}

function startRun(event){
    "use strict";
    event.preventDefault();
    keys[event.key] = true;
}

function stopRun(event){
    "use strict";
    event.preventDefault();
    keys[event.key] = false;
}
