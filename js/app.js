// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

var collision = function (enmey) {
    if(enmey.x == player.x && enmey.y == player.y){
        alert("NOOOOOOOOOO WAY");
    }
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
      // check to see if bug out of canvas,and reset x to zero
    if (this.x > 505) {
       this.x = 0;
   }
    collision(this);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// Player 
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 200;
    this.y = 383;
    this.speed = 50;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function(dt) {
   if(this.x > 420){
       this.x=420;
   } 
    if(this.x <2){
         this.x=2;
    }
    if(this.y< -12){
        this.y = -12;
    }
    if(this.y>400){
        this.y = 400;
    }
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
Player.prototype.handleInput = function(keypress) {
     if(keypress == 'left') {
        this.x -= 80;
    }
    if(keypress == 'right') {
        this.x += 80;
    }
    if(keypress == 'up') {
        this.y -= 80;
    }
    if(keypress == 'down') {
        this.y += 80;
    }
    
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(-350, 130,200);
var enemy2 = new Enemy(-300, 60,350);
var enemy3 = new Enemy(-100, 130,200);//
var enemy4 = new Enemy(0, 230,300);
var enemy5 = new Enemy(0, 60,350);//
var allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5];

var player = new Player();
console.log(player);
//console.log(allEnemies);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});