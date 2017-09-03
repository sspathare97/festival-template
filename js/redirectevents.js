// media query event handler
var mq = window.matchMedia("(min-width: 601px)");
var mq2 = window.matchMedia("(min-width: 450px) and (max-width: 600px)");
var iurl=window.location.href;
var url = (window.location != window.parent.location)?document.referrer:document.location;
if (matchMedia){
  mq.addListener(WidthChange);
  mq2.addListener(WidthChange);
  WidthChange();
}
// media query change
function WidthChange() {
	if (mq.matches && iurl==url){
		if(window.location.href.indexOf("events1")!=-1)
		window.location="desktop.html#events1";
		if(window.location.href.indexOf("events2")!=-1)
		window.location="desktop.html#events2";
		if(window.location.href.indexOf("events3")!=-1)
		window.location="desktop.html#events3";
		if(window.location.href.indexOf("events4")!=-1)
		window.location="desktop.html#events4";	
	}
	if (mq2.matches && iurl==url){
	document.getElementById("events2").setAttribute("href","");
	}
	else if (!mq2.matches && iurl==url){
	document.getElementById("events2").setAttribute("href","css/events2.css");
	}
}
