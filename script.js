var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");//context

let CW = 200;//canvas width
let CH = 100;//canvas height

//line variables
let START_X = 0.5;
let START_Y = 0;
let END_X = CW-0.5;
let END_Y = CH;


//what follows is making function for animation
function abc(){
requestAnimationFrame(abc);

//now we will draw rectangle for background
ctx.fillStyle = 'white';
ctx.fillRect(0,0,CW,CH);
ctx.fill();

//now we will draw line
ctx.beginPath();
ctx.moveTo(START_X,START_Y);
ctx.lineTo(END_X,END_Y);
ctx.stroke();

//now we will change some values
//so it looks like smth is moving

START_X += 0.5;

if (START_X >= CW){
START_X = 200;
END_X -=0.5;
}// so far everything works good, just a little glitch in line move

if (END_X <= 0 ||START_X < 0){
END_X = 0;
START_X -= 0.5;
}//this was ment to move START_X back to left side of canvas but it dont





}  //END of making function

//now we will call the function out so it could work
abc();
