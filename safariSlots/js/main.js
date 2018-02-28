//Project Name: Slot Machine
//Client Name: Leon Noel
//Author: Lilly Percival
//Dev @ RC in Boston

///------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///------------------------------------------------///
// Directions:   Morning Challenge - Build a simple slot machine 
//		with minimum 5 items per reel and 3 reels - 
//		user should be able to bet min or max and have 
//		their total update
//
// User can click button and see results
// User expects to get 3 outputs after clicking button
// User can bet min or max
// User expects total to update after each play
//
// For the reels, I can add Math.random() to each of the li's to 
	// give them different odds of appearing
// Each reel's items are identical but the odds will be different
// 
// For the button, I can add an event listener to trigger the reel outputs
// The reel outputs will display in three different sections
// 
// For the min max bet, add two buttons min and max so the user can bet
	// This bet will then be subtracted from the total displayed below
	// If the reel outputs match, then the user's bet will be doubled 
		//and added back to the total,
	// If the reel outputs don't match, then the user loses their bet - total stays the same
	// This can be done with two buttons, a display method 
		//(toggleClass/append/etc), and a function for doubling bet if win 
	// if one of the conditons is met


///------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///------------------------------------------------///


//make sure to have a doc ready function so that the html loads before your javascript. 
//All the functions should be encased inside the doc ready.
$(document).ready(function(){
	//this is a global variable i made in order to adjust the current total value later on when a bet is placed
	var total = 0;
	//this is a global variable i made in order to adjust the bet outcomes later after a win or loss takes place (more details below)
	var bet = 0;

	//Let's make an array!
	//This array holds all the slot machine images for the reels. Make sure you list the correct path file for each image.
	var bling = ["images/img1.png", "images/img2.png", "images/img3.png", "images/img4.png", "images/img5.png"];

	//These are the event listeners
	//They wait for an event to happen and then trigger an action. 
		//In this case, the CSS ID is targeted (lever, minBet, maxBet) and once the button is clicked it triggers the 
		//corresponding functions (which are play, lowBet, and highBet)
	$("#lever").on("click", play);
	$("#minBet").on("click", lowBet);
	$("#maxBet").on("click", highBet);

	//Function for "pulling" the lever and starting game play
	function play(){
		//Here we will set some variables to pull a random image fromt he array
		//We need three variables so we can get an image for each of the three slots
		// pic a different variable to represent each of the random images that will be pulled, in this case I chose image 1,2,3
		var image1=Math.round(Math.random()*4)
		var image2=Math.round(Math.random()*4)
		var image3=Math.round(Math.random()*4)

		//Now we need to pull the images from the array using the variables we just made above.
			//we do this by targeting the css tag that IDs each slot in our html, and then 
			//use jQuery to put a random image in that slot using the array and image variables we created
		$("#slot1").attr("src", bling[image1])
		$("#slot2").attr("src", bling[image2])
		$("#slot3").attr("src", bling[image3])

		//This is the conditional that says what happens if you win or lose. In this case, winning means that the images will be the same. 
			//In jquery that means that the image sources will be equal to eachother. 
			//This is why we use image source1 == to image source2 && image source 2 == to image source 3  to define a win.
		if($("#slot1").attr("src") == $("#slot2").attr("src") && $("#slot2").attr("src") == $("#slot3").attr("src")){
				$("#currentTotal").text(total += bet*2)
		}
		//this is the part of the conditional that says if you lose,
			//subtract "bet" from the total value and then save that new value as the new current value. 
			//"bet" is defined in more detail below
		else{
			$("#currentTotal").text(total -= bet)
		}
	}
	
	//Here we have the two functions that describe wtf "bet" is.

	//for the lowbet function, it is saying to add one. 
		//Don't worry about subtracting for a loss since that is covered in the conditional above. 
		//This is just telling the conditional what to add or subtract. In the case for the low bet, this is $1
	function lowBet(){
		bet += 1;
		alert("You have now bet "+bet)
	}
	//This is the same thing as above but defined for the highbet which in this case is $10
	function highBet(){
		bet += 10
		alert("You have now bet "+bet)
	}

//DON'T FORGET TO CLOSE EVERY FUNCTION YOU MAKE!!! THIS IS THE CLOSING PART OF THE DOC READY TAG ABOVE  :)
});




///////////////////////////////////////////////////////////////////////////
//////////////////////////IGNORE BELOW- PAST FAILURES!!!///////////////////
///////////////////////////////////////////////////////////////////////////

	// //Bet
	
//total
//bet 
//global both =zero
// when you make your bet, bet will decrease by 250 or 1000
// just change bet on those button presses



	// 	var win = (z1 == z2 == z3 || p1 == p2 == p3 || e1 == e2 == e3 || c1 == c2 == c3 || l1 == l2 == l3)
	// 		// if(win =)


	// function play(){
	// 	$("#minBet" || "#maxBet").on("click", function(){
	// //Reels
	// 	//adjusting the odds for each item in reel 1
	// 		var z1 = $("#zebra1");
	// 		var p1 = $("#panther1");
	// 		var e1 = $("#elephant1");
	// 		var c1 = $("#cheetah1");
	// 		var l1 = $("lion1");
	// 		var randomNumber = Math.random();
			
	// 		function reel1play(){
	// 			if(randomNumber <= 0.15){
	// 				console.log(z1)
	// 			}

	// 			else if(0.15 <= randomNumber <=0.30){
	// 				console.log(p1)
	// 			}

	// 			else if(0.30 <= randomNumber <=0.45){
	// 				console.log(e1)
	// 			}

	// 			else if(0.45 <= randomNumber <=0.60){
	// 				console.log(c1)
	// 			}

	// 			else{
	// 				console.log(l1)
	// 			}
	// 		}

	// //adjusting the odds for each item in reel 2
	// 		var z2 = $("#zebra2")
	// 		var p2 = $("#panther2")
	// 		var e2 = $("#elephant2")
	// 		var c2 = $("#cheetah2")
	// 		var l2 = $("#lion2")

	// 		function reel2play(){
	// 			if(randomNumber <= 0.15){
	// 				console.log(z2)
	// 			}

	// 			else if(0.15 <= randomNumber <=0.30){
	// 				console.log(p2)
	// 			}

	// 			else if(0.30 <= randomNumber <=0.45){
	// 				console.log(e2)
	// 			}

	// 			else if(0.45 <= randomNumber <=0.60){
	// 				console.log(c2)
	// 			}

	// 			else{
	// 				console.log(l2)
	// 			}
	// 		}


	// //adjusting the odds for each item in reel 3
	// 		var z3 = $("#zebra3")
	// 		var p3 = $("#panther3")
	// 		var e3 = $("#elephant3")
	// 		var c3 = $("#cheetah3")
	// 		var l3 = $("#lion3")


	// 		function reel3play(){
	// 			if(randomNumber <= 0.15){
	// 				console.log(z3)
	// 			}

	// 			else if(0.15 <= randomNumber <=0.30){
	// 				console.log(p3)
	// 			}

	// 			else if(0.30 <= randomNumber <=0.45){
	// 				console.log(e3)
	// 			}

	// 			else if(0.45 <= randomNumber <=0.60){
	// 				console.log(c3)
	// 			}

	// 			else{
	// 				console.log(l3)
	// 			}
	// 		}
	// 	)
	

	// //Display results of play

	// //Update total based on results

	//  easy access for list items //
// 				z1
// 				z2
// 				z3
// 				p1
// 				p2
// 				p3
// 				e1
// 				e2
// 				e3
// 				c1
// 				c2
// 				c3
// 				l1
// 				l2
// 				l3
