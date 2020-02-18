const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext("2d")

ctx.strokeStle="#2c2c2c"
ctx.lineWidth = 2.5;

let painting = false;

function startPainting(){

}

function onMouseMove(event) {
    const x = event.offsetX //offset이 canvas와 관련있는 데이터
    const y = event.offsetY
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y)
    } else {
        ctx.lineTo(x,y)
    }
}

function onMouseDown(event){
    painting = true //painting이 true일 때 그려지기 시작한다.
}

function onMouseUp(event){
    painting = false // 마우스 클릭이 멈춰졌을 때 그만 그려진다.
}

function onMouseLeave(event){
    painting = false
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener('mousedown', onMouseDown) //그리기 시작 용도
    canvas.addEventListener('mouseup', onMouseUp) // 그리기 멈춤 용도
    canvas.addEventListener('mouseleave', onMouseLeave)
}