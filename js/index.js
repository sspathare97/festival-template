$(document).ready(function(e) {
	setTimeout(fadespinner,1000);
	
});

function fadespinner(){
	$(".spinner-container").fadeOut(1000);
}


// media query change
function WidthChange() {
	if (mq.matches){
		$("div.top-left a").attr("href","desktop.html#events1");
		$("div.top-right a").attr("href","desktop.html#events2");
		$("div.bottom-left a").attr("href","desktop.html#events3");
		$("div.bottom-right a").attr("href","desktop.html#events4");
	}
	else{
		$("div.top-left a").attr("href","category1.html");
		$("div.top-right a").attr("href","category2.html");
		$("div.bottom-left a").attr("href","category3.html");
		$("div.bottom-right a").attr("href","category4.html");
	}
}


// media query event handler
var mq = window.matchMedia("(min-width: 601px)");
if (matchMedia){
  mq.addListener(WidthChange);
  WidthChange();
}
