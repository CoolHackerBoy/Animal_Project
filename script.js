$(document).on('click','button#backButton',function(){
	window.location ="index.html"
});

$(document).on('click','button#pickAnotherAnimal',function(){
	$('div#animalPick').show();
	$('button#pickAnotherAnimal').hide();
	$('button#backButton').show();
})

$(document).on('click','button#infoButton',function(){
	window.location="info.html";
});

$(document).on('click','button#infoButton',function(){
	window.location="info.html";
});

$(document).on('click','button#creditButton',function(){
	window.location="credit.html";
});

$(document).on('click','button#LauraWoodbury',function(){
	window.location ="https://www.pexels.com/@laura-woodbury-1342512"
});

$(document).on('click','button#RoxanneMinnish',function(){
	window.location ="https://www.pexels.com/@roxanne-minnish-2936023"
});

$(document).on('click','button#Pixabay',function(){
	window.location ="https://www.pexels.com/@pixabay"
});

$(document).on('click','button#iucnredlistOrg',function(){
	window.location ="https://www.iucnredlist.org/species/712/121745669"
});

$(document).on('click','button#VanHeerden',function(){
	window.location ="https://www.pexels.com/@frans-van-heerden-201846"
});

$(document).on('click','button#MagdaEhlers',function(){
	window.location ="https://www.pexels.com/video/sea-otters-swimming-2554522/"
});

$(document).on('click','button#button1',function(){
	$('div#animalPick').hide();
	$('button#backButton').hide();
	$('button#pickAnotherAnimal').show();
});

$(document).on('click','button#button2',function(){
	$('div#animalPick').hide();
	$('button#backButton').hide();
	$('button#pickAnotherAnimal').show();
});

$(document).on('click','button#button3',function(){
	$('div#animalPick').hide();
	$('button#backButton').hide();
	$('button#pickAnotherAnimal').show();
});

$(document).ready(function(){
	$('button#pickAnotherAnimal').hide();
});