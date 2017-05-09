$(function(){
	$(".main-nav").children().click(function(){
		$(this).addClass("cta");
		$(this).siblings().removeClass("cta");
	});
});