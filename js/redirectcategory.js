
// media query event handler
var mq = window.matchMedia("(min-width: 601px)");
if (matchMedia){
  mq.addListener(WidthChange);
  WidthChange();
}

// media query change
function WidthChange() {
	if (mq.matches){
	if(window.location.href.indexOf("category1")!=-1)
	window.location="desktop.html#events1";
	if(window.location.href.indexOf("category2")!=-1)
	window.location="desktop.html#events2";
	if(window.location.href.indexOf("category3")!=-1)
	window.location="desktop.html#events3";
	if(window.location.href.indexOf("category4")!=-1)
	window.location="desktop.html#events4";
	}
}
