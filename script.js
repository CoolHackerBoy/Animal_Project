$(document).ready(function(){
	alert('joshua');
});


var animation=function(){
	requestAnimationFrame(animation);
	if(keyboard.up){
		console.log('up')
	}
	if(keyboard.down){
		console.log('down')
	
	}
	if(keyboard.left){
		console.log('left')
	
	}
	if(keyboard.right){
		console.log('right')
		
	}
}

animation();