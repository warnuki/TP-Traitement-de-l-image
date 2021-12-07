var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

for (let i = 0; i < 3; i++) {
    ctx.rect(0, 0, 250+(i*30), 250+(i*30));
    ctx.strokeStyle = 'orange';
    ctx.stroke();   
}
function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

function redraw(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
    
    ctx.strokeStyle = "#df4b26";
    ctx.lineJoin = "round";
    ctx.lineWidth = 5;
              
    for(var i=0; i < clickX.length; i++) {		
      ctx.beginPath();
      if(clickDrag[i] && i){
        ctx.moveTo(clickX[i-1], clickY[i-1]);
       }else{
         ctx.moveTo(clickX[i]-1, clickY[i]);
       }
       ctx.lineTo(clickX[i], clickY[i]);
       ctx.closePath();
       ctx.stroke();
    }
  }

canvas.mousedown(function(e){
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;
          
    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
  });

canvas.mousemove(function(e){
    if(paint){
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
      redraw();
    }
  });
canvas.mouseup(function(e){
    paint = false;
  });
can.mouseleave(function(e){
    paint = false;
  });



