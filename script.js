var i = 1;
var distance;
var first = true;
window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}
window.onload = function() {

}
document.addEventListener("scroll", function(){
	if(window.outerWidth >= 780){
	var newPos = window.pageYOffset;

	document.getElementById("background").style.left =  +(window.pageYOffset/2)+"px";
	}
	
	if(window.pageYOffset >= document.getElementById("cards").offsetTop - 800){
		
		// alert("hello bitch");
		
		// document.getElementById("cards").style.opacity = 1;
		// document.getElementById("cards").style.transform = "translateY(0%)";
		
		// document.getElementById("cards").querySelector("tri-grid").style.opacity = 1;
		
		
		if(first === true){
			first = false;
			setCountdown();
		}
		
		
		
		//working.....
		// var cn = document.getElementById("cards").childNodes;
		// var classn = cn[1].className;
	
	}
	if(window.pageYOffset >= document.getElementById("com").offsetTop -400){
		document.getElementById("com").style.opacity = 1;
	}
	if(window.pageYOffset >= document.getElementById("res").offsetTop -400){
		document.getElementById("res").style.opacity = 1;
	}

	
	});
function flipCard(){
	
	
}
function unFlipCard(){
	
}
function cardAnimation(itteration){
	var cn = document.getElementById("cards").childNodes;
	cn[itteration].style.opacity = 1;
	// cn[itteration].style.transition = 'all '+transistionTime+'s';
}
function setCountdown(){
	// Set the date we're counting down to
var countDownDate = new Date().getTime() + 500;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    

    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
	var cardNodes = document.getElementById("cards").childNodes;
	if(i <= cardNodes.length){
		cardNodes[i].style.opacity = 1;
		cardNodes[i].style.animation = 'bounce 2s ease-out forwards';
		i+=2;
		setCountdown();
	}
    
  }
}, 100);
}