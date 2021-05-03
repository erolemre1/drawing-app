const deleteButtons = document.querySelectorAll('.delete-button');



function clearBtn(){
  const context = document.querySelectorAll(".butto").forEach((btn)=>{
      btn.classList.remove("active");
    });
    
  } 




function reset() {
  var c = document.getElementById("canvas");
  const context = c.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  const body =  document.querySelector("body");
  body.style.cssText = 'background-color: white'
  const b = document.getElementById('delete-b');
  b.style.display = "block";
  b.classList.add('clicked');
  setTimeout(hideTrash, 3000);

}

function hideTrash (){

  const b = document.getElementById('delete-b');
 
  b.style.display = "none";
}
  
  
  document.querySelectorAll(".color").forEach((btn)=>{
    btn.addEventListener("click",()=>{
      if(btn.classList.contains("color")){
        clearBtn();
        color = btn.dataset.color;
        ctx.strokeStyle=btn.dataset.color;
        btn.classList.add("active");
      }else{
        ctx.clearRect(0,0,c.width,c.height);
         ctx.fillRect(0,0,c.width,c.height);
        ctx.lineWidth = 4;
        ctx.strokeStyle=color;
      }
    });
  });

  var c = document.getElementById("canvas");
  var color = 'black';
  var ctx = c.getContext("2d");
  c.width = document.body.clientWidth;
  c.height = document.body.clientHeight;

  

  ctx.lineWidth = 5;
  ctx.strokeStyle=color;
var draw =false;

ctx.strokeStyle= "black";
c.addEventListener("mousedown",(e)=>{
  draw = true;
  ctx.beginPath();
  ctx.moveTo(e.pageX,e.pageY);
});

c.addEventListener("mouseup",()=>{
  draw = false;
});

c.addEventListener("mousemove",(e)=>{
    if(draw){
      ctx.lineTo(e.pageX,e.pageY);
      ctx.moveTo(e.pageX,e.pageY);
      ctx.stroke();
    }
});






