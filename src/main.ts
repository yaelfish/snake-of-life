import './style.css';
import * as PIXI from 'pixi.js';

// Create the application helper and add its render target to the page
let app = new PIXI.Application({ width: 640, height: 640 });
document.body.appendChild(app.view);

// Create the sprite and add it to the stage
let sprite = PIXI.Sprite.from('snake-item.png');
let spriteApple = PIXI.Sprite.from('cherry.png');
app.stage.addChild(sprite);
app.stage.addChild(spriteApple);

// Set the initial position
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

// Set the initial position
spriteApple.anchor.set(1);
spriteApple.x = app.screen.width / 2;
spriteApple.y = app.screen.height / 2;
spriteApple.height = 50;
spriteApple.width = 40;

// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;

const moveSnake = (event: any) => {
    console.log(event);
    
    switch(event.keyCode){
        case 37: // Left
            app.ticker.add((delta) => {
                elapsed += delta;
                sprite.x -= 1.25;
            });
        break;
        case 38: // Up
            app.ticker.add((delta) => {
                elapsed += delta;
                sprite.y -= 1.25;
            });
        break;
        case 39: // Right
            app.ticker.add((delta) => {
                elapsed += delta;
                sprite.x += 1.25;
            });
        break;
        case 40: // Down
            app.ticker.add((delta) => {
                elapsed += delta;
                sprite.y += 1.25;
            });
        break;
        default:
        break;
    }
}

document.body.addEventListener('keydown', moveSnake);


