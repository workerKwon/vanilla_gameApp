const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext("2d")

canvas.width = 700; // context함수를 이용하기 위해서는 css가 아닌 element에 사이즈를 줘야한다.
canvas.height = 700;

ctx.strokeStle="#2c2c2c"
ctx.lineWidth = 2.5;

let painting = false;

function startPainting(){

}

function onMouseMove(event) {
    const x = event.offsetX //offset이 canvas와 관련있는 데이터
    const y = event.offsetY
    if(!painting){ // 클릭을 하지 않은 상태에서는
        ctx.beginPath(); // 새로운 경로를 설정
        ctx.moveTo(x,y) // 경로의 시작점이 계속 바뀜. (x, y)로.
    } else { // 클릭을 한 상태로 움직이면
        ctx.lineTo(x,y) // 설정된 경로의 마지막 점 위치까지 x,y 까지 직선을 설정한다.
        ctx.stroke(); // 직선이 설정되고 나서 선을 그린다.
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