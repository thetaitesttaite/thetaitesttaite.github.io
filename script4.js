//var pixelCount = window.document.getElementById("section-1").scrollHeight;
var section = 1;
var pixelCount = 450;
var pc;
var imageName; 
//var pc = document.getElementById('para-1').offsetHeight;
var elmnt;
window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}
window.onload = function() {
	// document.getElementById('title').style.opacity = '1';
	// document.getElementById('title').style.letter-spacing = '20px';
	// document.getElementById('sub_title').style.opacity = '1';
	// var elmnt = document.getElementById('container');
	// pc = elmnt.offsetTop;
}

//document.addEventListener("scroll", scrollanim);

document.addEventListener("scroll", function(){
	

	
	});
function expandBurger(){
	var menu_icon = document.getElementById("menu-icon");
	var static_header = document.getElementById("static_header");
	var u_list = document.getElementById("u_list");
	
	var menu_list = document.getElementById("static_header").querySelectorAll("nav ul li");
	menu_icon.classList.toggle("close");
	static_header.classList.toggle("open_menu");
	u_list.classList.toggle("hide_nav");
	u_list.classList.toggle("side_nav");
	
	// for(i=0; i < menu_list.length; i++){
		// menu_list[i].style.display = "block";
		// }
		
	
}
function showBurger(){
	
	
	// document.getElementById("menu-icon").style.opacity = 1;
	// document.getElementById("menu-icon").style.margin = "0px 0px";
	var menu_icon = document.getElementById("menu-icon")
	menu_icon.classList.add("show");
}
function hideBurger(){
	// document.getElementById("menu-icon").style.opacity = 0;
	// document.getElementById("menu-icon").style.margin = "0px -300px";
	var menu_icon = document.getElementById("menu-icon")
	menu_icon.classList.remove("show");
	var menu_list = document.getElementById("static_header").querySelectorAll("nav ul li");
	// for(i=0; i < menu_list.length; i++){
		// menu_list[i].style.display = "inline-block";
		// }
	var u_list = document.getElementById("u_list");
	u_list.classList.remove("side_nav");
}
function hideMenu(){
	// var menuList = document.getElementById("static_header").querySelectorAll("nav ul li");
	// var u_list = document.getElementById("u-list");
	// u_list.style.opacity = 0;
	// u_list.style.top = "-200px";
	// var i;
		// for(i=0; i < menuList.length; i++){
			// menuList[i].style.top = "-200px";
			// menuList[i].style.opacity = 0;
		// }

	// var u_list = document.getElementById("u_list");
	// u_list.style.top = "-200px";
	
	// u_list.style.opacity = 0;
	// u_list.style.visibility = "hidden";
	
	
	var menuIsOpen = document.getElementById("static_header").classList.contains("open_menu");
	if(menuIsOpen === false){
		u_list.classList.add("hide_nav");
	}
}
function showMenu(){
	// var menuList = document.getElementById("static_header").querySelectorAll("nav ul li");
	var static_header = document.getElementById("static_header");
	var menu_icon = document.getElementById("menu-icon");
	menu_icon.classList.remove("close");
	static_header.classList.remove("open_menu");
		// document.getElementById("u-list").style.opacity = 0;
		 // var i;
		 // for(i=0; i < menuList.length; i++){
			// menuList[i].style.top = "0px";
			// menuList[i].style.opacity = 1;	
		// }
	// var u_list = document.getElementById("u-list");
	// u_list.classList.remove("side_side");
	// var u_list = document.getElementById("u_list");
	// u_list.style.top = "0px";
   // u_list.style.opacity = 1;
    // u_list.style.visibility ="visible";
	
	
	var u_list = document.getElementById("u_list");
	u_list.classList.remove("hide_nav");
}
function colourise(id){
	
	imageName = document.getElementById(id).src;
	//remove extenstion
	var x = imageName.replace(/\.[^/.]+$/, "");
	 alert("image name " + x);
	
}
	
	//NOTE: resize funtion will not work in older browsers, there will need to be check for IE8 and earlier to ensure 
	//all browsers can run this
function windowResize() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("sub_title").innerHTML = txt;
	document.getElementById("con1").style.height = (w/2.82);
}

function stats(){
	
	alert("newpos:  " + window.pageYOffset + "height" + document.getElementById("section-1").offsetTop/3 + "sectionnum:  " + section);
}

function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$(document).ready(function(){
    $("#carousel1 div").click(function(){
		moveToSelected($(this));
    });
});
$(document).ready(function(){
    $("#carousel2 div").click(function(){
		moveToSelected($(this));
    });
});
/*doesnt work */
// $('#carousel div').click(function() {
  // moveToSelected($(this));
// });
$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});
	




