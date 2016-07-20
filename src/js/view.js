class View {

	constructor(){}

	updateEntity(entity,x,y){
		element.x =  x;
		element.y =  y;
	} 

	addHandler(){ 
		if(canvas!=null)
			canvas.onclick =  function(event){ 
			var mouse = getMousePos(  canvas,event); 
			controller.createParticle(mouse.x, mouse.y);
		}; 
	} 

	drawCircle(thex,they ){ 
 
			if(context){
			context.beginPath();
			context.arc(thex, they, 2, 0, 2 * Math.PI, false);
			context.fillStyle = 'red';
			context.fill();
			context.lineWidth = 5;
			context.strokeStyle = '#crimson';
			context.stroke();
			} 

		}  
}

