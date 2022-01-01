//fade in page when ready, show loader if waiting long
function showLoader(){
	if(!window.loader.length) return;
	$('#main-nav, #container').css('opacity',0);
	$('body, .loader').css('opacity',1);
	window.loaderused = true;
};

window.loader = $('.loader > div > div');
window.loadertimeout = setTimeout(showLoader, 800)
window.loaderused = false;

$(window).load(function(){
	clearTimeout(window.loadertimeout)
	if (window.loaderused && window.loader.length){
		//hide loader, show individual elements
		window.loader.animate({'opacity':0}, 600, function(){
			$('#container').animate({'opacity':1},300, function(){
				$('#main-nav').css('opacity',1);
				window.loader.remove();
			})
		})
	} else {
		//show everything
		$('body').animate({'opacity':1},300) 
	}

	//prevent overscroll and body scroll on iOS
	$(document).bind('touchmove', function(e){
		e.preventDefault();   
	})
	$('#scroller, #main-nav').bind('touchmove', function(e){
		e.stopPropagation();
	})
	 
});




//check if we are using the html5 shiv
var ltIE9 = window.html5 ? true : false;

//hamburger navigation
var site = new Bamboo({
    menu: true,
    swipeToOpen: false,
    breakpoint: null, //never reveal full navigation
    menuWidth: 265,
    headerHeight: 50,
    ltIE9: ltIE9,
    start: function(bamboo){ site.ok = false }, //on start of hamburger touch
    end: function(bamboo){ setTimeout(function(){ site.ok = true }, 400) } //on end of hamburger touch
});

//prevent inadvertent menu clicks, namely on Android
site.ok = true;
$('.navigation a, header a').click(function(e){ 
	if(!site.ok) e.preventDefault();
});