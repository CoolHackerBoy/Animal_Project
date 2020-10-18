$(document).on('click','button#backButton',function(){
	window.location ="index.html"
});

$(document).on('click','button#pickAnotherAnimal',function(){
	$('div#animalPick').show();
	$('button#pickAnotherAnimal').hide();
	$('button#backButton').show();
	$('div#rhino').hide();
	$('div#greyWhale').hide();
	$('div#polarBear').hide();
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

$(document).on('click','button#rhinoFacts',function(){
	window.location="https://www.livescience.com/27439-rhinos.html#:~:text=White%20rhinos%20and%20black%20rhinos,Indonesian%20swamps%20and%20rain%20forests."
})

$(document).on('click','button#greyWhaleFacts',function(){
	window.location="https://www.fisheries.noaa.gov/species/gray-whale#:~:text=Gray%20whales%20are%20found%20mainly,the%20coast%20of%20eastern%20Asia."
})

$(document).on('click','button#polarBearFacts',function(){
	window.location="https://www.nwf.org/Educational-Resources/Wildlife-Guide/Mammals/Polar-Bear#:~:text=They%20mainly%20eat%20ringed%20seals,eat%20walruses%20and%20whale%20carcasses."
})

$(document).on('click','button#button1',function(){
	$('div#animalPick').hide();
	$('button#backButton').hide();
	$('button#pickAnotherAnimal').show();
	$('div#rhino').show();
});

$(document).on('click','button#button2',function(){
	$('div#animalPick').hide();
	$('button#backButton').hide();
	$('button#pickAnotherAnimal').show();
	$('div#greyWhale').show();
});

$(document).on('click','button#button3',function(){
	$('div#animalPick').hide();
	$('button#backButton').hide();
	$('button#pickAnotherAnimal').show();
	$('div#polarBear').show();
});

$(document).ready(function(){
	$('button#pickAnotherAnimal').hide();
	$('div#rhino').hide();
	$('div#greyWhale').hide();
	$('div#polarBear').hide();
});