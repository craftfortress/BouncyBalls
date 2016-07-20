class Particle {
	constructor(x,y,a){
		this.x = x;
		this.y = y;
		this.speed = Math.floor(Math.random()*100);
		this.angle = Math.floor(Math.random()*360);
		var rand = function(a,b){return ~~((Math.random()*(b-a+1))+a);}  
		this.vx = (rand(0, 100)-50)/4;
		this.vy = -(rand(50, 100))/4;
	}

	 update(x,y,s,a){
		this.x = x;
		this.y = y;
		this.speed = s;
		this.angle = a;
	}

}
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


class Controller{

	constructor(){
		this.entityList = [];
		this.decay = 3 ;
		view.addHandler();
	}

	createParticle(x,y){ 
		var  party = new Particle(x,y);
		this.entityList.push(party); 
	}

	updateParticle(){

		if(canvas){
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		context.clearRect(0, 0, canvas.width, canvas.height);
		}
		
		this.entityList.forEach( function(item){   
		//  BORDER COLLISION DETECTION
		if(item.y<canvas.height-12){  // IF ABOVE GROUND 
		item.vy+= 1;
	  
		}else{ // IF BELOW GROUND
		item.vy = item.vy*-1 + controller.decay  ; 
		item.y= canvas.height-12;
		}

		if(item.x<0){ // IF OFF LEFT BORDER  
		item.x=0;
		item.vx+= 1;
		}

		if(item.x>canvas.width-12){ // IF OFF RIGHT  BORDER 
		item.vx = item.vx*-1 + controller.decay  ; 
		item.x=canvas.width-12;
		}

		item.x += item.vx;
		item.y += item.vy; 
		view.drawCircle(item.x,item.y); 
		
		});		
	}
}


// Future Collision detection expansion using a (O)N Hashmap for other call position lookups.  
// It is pretty groovy but requires another couple of hours of testing and increase boundary checks

// BALL vs BALL COLLISION DETECTION
/*
var hashMap = {}; 
var audio = new Audio('hit.wav');
 
function get(k) {
    return hashMap[
    k];
}

var itemstring="";
controller.entityList.forEach( function(item){
	itemstring = Math.floor(item.x) + "" + Math.floor(item.y);
 hashMap[itemstring] = item;  
});

controller.entityList.forEach( function(item){ 
	itemstring = Math.floor(item.x) + "" + Math.floor(item.y);

	if(hashMap[itemstring]){
		if(item!=get(itemstring)){
				
 audio.play();

get(itemstring).vy*-0.5;
get(itemstring).vx*-0.5;
item.vy *-0.5;
item.vx *-0.5; 
		}	
	} 
}); */
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