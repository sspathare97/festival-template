
// media query event handler
var mq = window.matchMedia("(max-width: 600px)");
if (matchMedia){
  mq.addListener(WidthChange);
  WidthChange();
}

// media query change
function WidthChange() {
	if (mq.matches)
	window.location="events1.html";
}
