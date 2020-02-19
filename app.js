const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext("2d")
const colors = document.getElementsByClassName('js-color')
const range = document.getElementById('jsRange')

canvas.width = 700; // context함수를 이용하기 위해서는 css가 아닌 element에 사이즈를 줘야한다.
canvas.height = 700;

ctx.strokeStyle="#2c2c2c"
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

// 이벤트 target의 배경색을 가져와서 canvas context의 strokeStyle(선 색깔)을 click된 요소의 배경색으로 변경한다.
function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color
}

// event.target.value를 가져와 canvas context의 lineWidth를 변경한다.
function handleRangeChange(event){
    const size = event.target.value
    ctx.lineWidth = size
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener('mousedown', onMouseDown) //그리기 시작 용도
    canvas.addEventListener('mouseup', onMouseUp) // 그리기 멈춤 용도
    canvas.addEventListener('mouseleave', onMouseLeave)
}

// .js-color를 array로 만든 후 각각에 click event를 추가한다.
Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
);

// #jsRange에 값이 들어갈 때
if(range){
    range.addEventListener("input", handleRangeChange)
}