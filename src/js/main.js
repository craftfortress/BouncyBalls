function getMousePos(canvas, evt) {

	if(canvas){
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	 }
	    return {
	      x: evt.clientX ,
	      y: evt.clientY 
	    };
	}

var view = new View();
var canvas = document.getElementById("canvas");
var  controller = new Controller();

function loop(){ 
	controller.updateParticle();
}
 
var context = canvas.getContext("2d");
setInterval(function(){

loop();  // ヽ(。_°)ノ  Recursive Game Loop Call

},20); 