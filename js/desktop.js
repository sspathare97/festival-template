
//load iframe
if(window.location.href.indexOf("#events")!=-1){
	var x=window.location.href.slice(window.location.href.indexOf("#")+1);
	if(parseInt(x.slice(6))<=4){
	$("div.ajax.col-side iframe").attr("src",x+".html");
	$("ul.nav.nav-pills.nav-stacked li.active").removeClass("in active");
	$("a[href=\"#"+x+"\"]").parent().addClass("in active");
}}
else
	$("div.ajax.col-side iframe").attr("src","events1.html");
//document ready
$(document).ready(function(){
	$("div.col-side.ajax iframe").hide();
	$("div.col-side.ajax iframe").load(function() {
		$("div.col-side.ajax iframe").fadeIn(500);
	});
	//change iframe
		$("ul.nav.nav-pills.nav-stacked.nav-menu li a").click(function(){
			if($("div.col-side.ajax iframe").attr("src")!=$(this).attr("href").slice(1)+".html"){
				$("div.col-side.ajax iframe").hide();
				$("div.col-side.ajax iframe").attr("src",$(this).attr("href").slice(1)+".html");
				
				$("div.col-side.ajax iframe").load(function() {
					$("div.col-side.ajax iframe").fadeIn(500);
				});
			}
		});
});