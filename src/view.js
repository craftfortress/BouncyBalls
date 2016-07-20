xclass View {

	constructor(){
		this.canvas = document.getElementbyId("#canvas");

		this.context = this.canvas.getContext('2d');
		this.context.width = window.innerWidth;
		this.context.height = window.innerHeight; 

	}

	updateCanvasSize(){
		this.context.width = window.innerWidth;
		this.context.height = window.innerHeight;
	} 

	updateEntity(element,x,y){
		 element.posX = x;                  
		 element.posY = y;
	}

	function getMousePos(canvas, evt) {
	    var rect = canvas.getBoundingClientRect();
	    return {
	      x: evt.clientX - rect.left,
	      y: evt.clientY - rect.top
	    };
	}

	addHandler(){
		this.canvas.addHandler("click" , function(event){
		var mouse = getMousePos(this.canvas,event);
		alert(mouse.x,mouse.y);
		controller.create( mouse.x,mouse.y);
	}

}

 