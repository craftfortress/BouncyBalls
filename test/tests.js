QUnit.module("Main Controller", {
setup: function() {
var controller =   new Controller(); 
var context = canvas.getContext('2d'); 
}
}); 

QUnit.test("Game allows creation of particle entity", function(assert) {
controller.createParticle(200,400); 
assert.ok( controller.entityList.length>0,  "Game allows creation of particle entity");
});

QUnit.test("Create a list of entities", function(assert) {
controller.createParticle(200,400);
controller.createParticle(300,400);
controller.createParticle(400,400);
assert.ok( controller.entityList.length>2,  "Game allows creation of multiple entities");
});

QUnit.test("View has draw methods", function(assert) { 
var theView = new View(); console.log(theView.drawCircle.length);
assert.ok(  theView.drawCircle ,  "View has draw methods");
});

QUnit.test("Create Particle", function(assert) { 
var party = new Particle(); 
assert.ok( party   ,  "Create Particle");
});

QUnit.test("Create Particle has coords", function(assert) { 
var party = new Particle(100,200 ); 
assert.ok( party.x >-50 && party.y>-40  ,  "Create Particle has coords");
});

QUnit.test("Create Particle parameters can be updated", function(assert) { 
var party = new Particle(100,200,5); 
party.update(123,32,124,42);
assert.ok( party.x == 123 && party.y== 32  ,  "Create Particle parameters can be updated");
});

QUnit.test("Create Controller", function(assert) { 
var controller = new Controller();  
assert.ok( controller ,  "Create Controller");
});

QUnit.test("Controller creates Entity List", function(assert) { 
var controller = new Controller();  
assert.ok( controller.entityList ,  "Controller creates Entity ListCreate Controller");
});

QUnit.test("Gravity occurs", function(assert) { 
var controller = new Controller();  
assert.ok( controller.decay > 0 ,  "Gravity occurs");
});
 
QUnit.test("View has a handler", function(assert) { 
 var theView = new View(); 
assert.ok( theView.addHandler ,  "View has a handler");
});
