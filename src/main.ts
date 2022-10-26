import './style.css';
import * as PIXI from 'pixi.js';

// Create the application helper and add its render target to the page
const HEIGHT = 640, WIDTH= 1000;
let apples = 0;
let app = new PIXI.Application({ width: WIDTH, height: HEIGHT });
document.body.appendChild(app.view);

const drawRectangle = (color) => {
    const graphics = new PIXI.Graphics();

    graphics.beginFill(color);

// draw a rectangle
    graphics.drawRect(0, 0, 30, 30);

    return graphics;

}

// Create the rectangles and add it to the stage
let sprite = drawRectangle(0x4d4e4f);
let spriteApple = drawRectangle(0xf44336);
app.stage.addChild(sprite);
app.stage.addChild(spriteApple);

// Set the initial position
sprite.x = sprite.width;
sprite.y = sprite.height;

// Set the initial position
spriteApple.x = app.screen.width / 2;
spriteApple.y = app.screen.height / 2;

// Add a ticker callback to move the sprite back and forth
let elapsedX = 0.0;
let stepsX = 1.25;
let stepsY = 0;

app.ticker.add((delta) => {
    elapsedX += delta;
    if(sprite.x + stepsX > WIDTH) { //end of screen
        sprite.x = 0;
    } else if(sprite.x + stepsX < 0) { // start of screen
        sprite.x = WIDTH;
    } else {
        sprite.x += stepsX;
    }

    if(sprite.y + stepsY > HEIGHT) { //end of screen
        sprite.y = 0;
    } else if (sprite.y + stepsY < 0){ //start of screen
        sprite.y = HEIGHT;
    }else {
        sprite.y += stepsY;
    }

    eatApple();
});

const moveSnake = (event: any) => {
    console.log(event);
    
    switch(event.keyCode){
        case 37: // Left
            stepsX = -1.25;
            stepsY = 0;
        break;
        case 38: // Up
            stepsX = 0;
            stepsY = -1.25;
        break;
        case 39: // Right
            stepsX = 1.25;
            stepsY = 0;
        break;
        case 40: // Down
            stepsX = 0;
            stepsY = 1.25;
        break;
        default:
        break;
    }
}

const getRandomValue = (max) => {
    return Math.random() * (max - 0);
}


const eatApple = () => {
    if(Math.abs(sprite.x - spriteApple.x) <=40 && Math.abs(sprite.y - spriteApple.y) <= 40 ) {
        spriteApple.x = getRandomValue(WIDTH);
        spriteApple.y = getRandomValue(HEIGHT);
        apples++;
        //sprite.width += sprite.width;
    }
}

document.body.addEventListener('keydown', moveSnake);


