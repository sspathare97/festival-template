//Change Submenu

if(window.location.href.indexOf("#event")!=-1)
	var x=window.location.href.slice(window.location.href.indexOf("#")+1);
else
	x="event1";
$("ul.nav.nav-pills.navbar-nav.nav-stacked li a[href=\"#"+x+"\"]").parent().addClass("active");
$("div#"+x+".tab-pane.fade").addClass("in active");

$(document).ready(function(e) {
    $("ul.nav.nav-pills.navbar-nav.nav-stacked li a").click(function(event){
		if($(event.target).attr("href").slice(1)!=$("div.tab-pane.fade.active.in").attr("id"))
		$(".collapse").collapse("hide");
	});
	$("div.send a").click(sendmsg);
});

function sendmsg(){
	var msg= $("form input.search-input").val();
	if(/\S/.test(msg)==false)
		return false;
	$("form input.search-input").val("");
	var chat= document.querySelector("div.tab-pane.fade.in.active div.chat");
	var msgout= document.createElement("div");
	msgout.className="message-out";
	msgout.innerHTML=msg;
	msgout.id="msgout";
	chat.appendChild(msgout);
	location="#msgout";
	msgout.id="";
	setTimeout(function(){
		$("div.title div span.online").text("typing...");
	},300);
	setTimeout(function(){
		$("div.title div span.online").text("online");
		setTimeout(function(){
			var msgin= document.createElement("div");
			msgin.className="message-in";
			msgin.innerHTML="Our coordinators are always there to help you. Please use the call button above to contact them.";
			msgin.id="msgin";
			chat.appendChild(msgin);
			location="#msgin";
			msgin.id="";
		},300);
		setTimeout(function(){
			$("div.title div span.online").text("typing...");
		},300);
		setTimeout(function(){
			$("div.title div span.online").text("online");
			setTimeout(function(){
				var msgin= document.createElement("div");
				msgin.className="message-in";
				msgin.innerHTML="Thank you for taking interest. See you at Festival!";
				msgin.id="msgin";
				chat.appendChild(msgin);
				location="#msgin";
				msgin.id="";
			},150);
		},2000);
	},3000);
	return false;
}