const btn= document.getElementById('btn');
const colorme = document.getElementById('colorme');
function changeBackgroundColor(){
    const colorone = Math.floor(Math.random() *123);
    const colortwo = Math.floor(Math.random()*234);
    const colorthree = Math.floor(Math.random()*334);
    const RGB = `rgb(${colorone},${colortwo},${colorthree})`
    console.log(RGB);
    colorme.style.backgroundColor = RGB;
   
}

btn.addEventListener('click',function(){
   setInterval(changeBackgroundColor, 5000); ;
    
   
})