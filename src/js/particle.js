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