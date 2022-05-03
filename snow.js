const canvas = document.querySelector("#snow");
const ctx = canvas.getContext("2d");

var i = 0

function drawSnow() {
    console.log("running");
    let particle = ctx.createRadialGradient(7.6, 7.6, 0, 7.6, 7.6, 7.6);
    particle.addColorStop(0, "hsla(255,255%,255%,1)");
    particle.addColorStop(1, "hsla(255,255%,255%,0)");
    ctx.fillStyle = particle;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(i, 0, 150 + i, 50);
    i = i + 20;
    setTimeout(drawSnow, 1000);
}

drawSnow();