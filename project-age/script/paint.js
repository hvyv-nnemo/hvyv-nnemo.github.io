const drawBtn = $(".draw-btn");
const enterBtn = $(".enter-btn");
// const drawEndBtn = document.getElementById("drawend-btn");

let canPaint = false;

drawBtn.on("click", function(){
    if(!canPaint){
        canPaint = true;
        console.log(canPaint);
    } else {
        canPaint = false;
    }
})

$('.back-btn').click(function(){
    canPaint = false;
})
// drawEndBtn.addEventListener("click", function(){
//     canPaint = false;
//     console.log(canPaint);
// })

// ==================================================================

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.strokeStyle = "#fff";
ctx.lineWidth = 1;



let painting = false;

function stopPainting(){
    painting = false;
}


function startPainting(){
    painting = true;
}

function onMouseMove(event){
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log(x, y);
    if(canPaint == true){
        if(!painting){
            ctx.beginPath();
            ctx.moveTo(x, y);   
        } else {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }
}

function onMouseDown(event){
    painting = true;
    console.log(painting);
}

// function onMouseUp(event){
//     stopPainting();
//     console.log(painting);
// }

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}


