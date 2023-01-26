let height = Math.ceil(innerHeight) - 130;
document.getElementById("canvas").style.height = height+"px";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
let tools = ["pencil","fill","text","eraser","picker"];
let brushes = ["brush"];
let shapes = ["line","oval","rectangle"];
let tool = brushes[0];
let size = 5;


// Draw a rectangle
ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect (10, 10, 55, 50);

// Draw a circle
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();





document.getElementById('save').addEventListener("click", function() {
    var link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = "my-image.png";
    link.click();
});

document.getElementById('reset').addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}, false);