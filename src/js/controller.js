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