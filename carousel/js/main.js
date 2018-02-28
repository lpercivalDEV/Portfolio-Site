//Project Name: Photography Carousel
//Client Name: Leon Noel
//Author: Lilly Percival
//Dev @ RC in Boston

///------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///------------------------------------------------///
//Directions:
// 1 html image tag
// 2 buttons --> "back" and "forwards"
// Need around 8 images
// Needs to loop around and back through all images -->
//   if you're at last image, needs to loop back to first image and vice versa
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// User can click buttons, press left right keys
// User can see photos
// User can expect photos to change when clicking on buttons
//
//
// doc ready function so that the html loads before your javascript.
//All the functions should be encased inside the doc ready.
//Going to need an array to store all of the images
// Going to need two buttons for navigation
// Need a variable to stand for start position (set to 0 at first)
// Need an event listener to wait for clicks
// On clicks, images will change
// When reaching the end of the list of images, clicking the button cycles you back to start position
//
///------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///------------------------------------------------///



var carousel = ["images/fanHo1.jpg","images/fanHo2.jpg","images/fanHo3.jpg","images/fanHo4.jpg","images/mccurry1.jpg","images/mccurry2.jpg","images/mccurry3.jpg","images/mccurry4.jpg","images/cubitt1.jpeg","images/cubitt2.jpg","images/cubitt3.jpg","images/cubitt4.jpg"];

var start = 0;

//make sure to have a doc ready function so that the html loads before your javascript.
//All the functions should be encased inside the doc ready.
$(document).ready(function(){
	$("#next").on("click",function(){
		start +=1;
		if(start == carousel.length){
			start=0;
		}
		$("#images").attr("src", carousel[start]);
	});
	$("#back").on("click", function(){
		start -=1;
		if(start == carousel.length <=0){
			start= 12;
		}
		$("#images").attr("src", carousel[start]);
	});

//generate random number and display random image every third click
// var clickCount=0;
// function randomImg(){
// 	if(clickCount === 3){
// 	clickCount = 0;
// 	clickCount = ++
// 	var random = Math.round(Math.random()*11)
// 	$("img").attr("src", carousel[random])
//  $("#images")= random
// 	}
// }

});
