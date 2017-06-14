


$(function(){



    var c = document.getElementById("test");

    c.addEventListener('mousemove', function(event){

        //console.log('x: ' + event.clientX + ' y: ' + event.clientY);
    });

    var coo = c.getBoundingClientRect();

    console.log(coo);

    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(0,0);
    ctx.lineTo(100,100);
    ctx.stroke(); 
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.moveTo(100,100);
    ctx.lineTo(100,200);
    ctx.stroke(); 
    ctx.closePath();

    ctx.clearRect(0, 0, 200, 200);
  	
});
