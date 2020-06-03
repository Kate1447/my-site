function drawShelves() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    canvas.width  = 800;
    canvas.height = 400;

    ctx.lineWidth = 1.0;
    ctx.strokeStyle = 'black';
    ctx.beginPath();

    // left shelve
    ctx.strokeRect(5, 100, 340, 10);
    ctx.moveTo(5, 110);
    for (var i = 5; i < 340; i+=10) {
        ctx.lineTo(i+10, 100);
        ctx.moveTo(i+10, 110);
    }

    // right shelve
    ctx.strokeRect(455, 100, 340, 10);
    ctx.moveTo(455, 110);
    for (var i = 455; i < 790; i+=10) {
        ctx.lineTo(i+10, 100);
        ctx.moveTo(i+10, 110);
    }
    ctx.stroke();
}