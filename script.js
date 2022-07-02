let canvas = document.getElementById('canvas')
let c = canvas.getContext('2d')

function drawLine( x1, y1, x2, y2, thickness){
    let dx = Math.abs(x1 - x2)
    let dy = Math.abs(y1 - y2)
    let m = dy / dx
    let steps = m > 1 ? dy : dx;
    let xincrement = dx / steps * (x1-x2 >= 0 ? -1 : 1)
    let yincrement = dy / steps * (y1-y2 >= 0 ? -1 : 1)
    for( let i = 0 ; i < steps ; i++ ){
        c.fillRect(Math.floor(x1+xincrement*(i+1)), Math.floor(y1+yincrement*(i+1)), 1, 1)
    }
}

let mouse = {};
canvas.addEventListener( 'mousemove', ( event)=>{
    mouse.x = event.x
    mouse.y = event.y
})

function loop(){
    requestAnimationFrame(loop)
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    c.fillStyle = '#fff'
    drawLine( window.innerWidth/2, window.innerHeight/2, mouse.x, mouse.y)
}





loop()
