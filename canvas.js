function doFirst () {
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	var g = canvas.createLinearGradient(0,0,100,100);//we give it parameters according to the start point
	g.addColorStop(.0,"blue");
	g.addColorStop(.5,"grey");
	g.addColorStop(1,"red");
	canvas.fillStyle=g;
	canvas.fillRect(0,0,200,200);
}
window.addEventListener("load",doFirst ,false);