let height = Math.ceil(innerHeight) - 130;
document.getElementById("canvas").style.height = height+"px";

document.getElementById('reset').addEventListener('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}, false);