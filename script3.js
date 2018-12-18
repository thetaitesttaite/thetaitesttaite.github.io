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
	

	// var parallax = document.getElementById('bgimg-1');
	var newPos = window.pageYOffset;
	// var con1Offset = document.getElementById('body').offsetTop;
	// var con2Offset = document.getElementById('bgimg-1').offsetTop;
	// var con3Offset = document.getElementById('bgimg-1').offsetTop;
	document.getElementById("bgimg-1").style.backgroundPosition = "center " +  -(window.pageYOffset/2)+"px";
	
	if(newPos >= document.getElementById("section-1").offsetTop/3){
		hideMenu();
		showBurger();
	}
	else if(newPos <= document.getElementById("section-1").offsetTop/3){
		 // document.getElementById("u-list").style.opacity = 0;
			// document.getElementById("menu-icon").style.margin = "0px -300px";
		showMenu();
		hideBurger();
		 // setInterval(enableMenu, 500);	
	}
	if(document.getElementById("section-" + section).offsetTop == null){
		alert("end of page");
	}
	else if( newPos >= (document.getElementById("section-" + section).offsetTop - window.innerHeight) + 200){
		// getElementById("section-1").getElementsByTagName("p").style.opacity = 1;
		document.getElementById("section-" + section).querySelector("p").style.opacity = 1;
		section++;
		 
	}
	
	

	
	
	 //document.getElementById("bgimg-2").style.backgroundPosition = "center " +  -(window.pageYOffset/2)+"px";
	// document.getElementById("bgimg-3").style.backgroundPosition = "center " +  -(window.pageYOffset/2)+"px";
	// document.getElementById("bgimg-4").style.backgroundPosition = "center " +  -(window.pageYOffset/2)+"px";
	// document.getElementById("bgimg-1").style.top = con3Offset-(window.pageYOffset*1.1)+"px";
	// alert("new pos   " + newPos + " para top " + con1Offset + "  newp  ");
	// var prlx_lyr_1 = document.getElementById('prlx_lyr_1');
	
	// var newPos = prlx_lyr_1.offsetTop + window.pageYOffset;
	 // prlx_lyr_1.style.top = (prlx_lyr_1.offsetTop + window.pageYOffset/6)+'px';
	// alert("newpos : " +  newPos));
	
	});
function expandBurger(){
	var menu_icon = document.getElementById("menu-icon");
	var static_header = document.getElementById("static_header");
	var u_list = document.getElementById("u_list");
	var menu_social = document.getElementById("menu-social");
	var menu_list = document.getElementById("static_header").querySelectorAll("nav ul li");
	menu_icon.classList.toggle("close");
	static_header.classList.toggle("open_menu");
	u_list.classList.toggle("hide_nav");
	u_list.classList.toggle("side_nav");
	menu_social.classList.toggle("social");
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

	




