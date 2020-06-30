$(function(){
	let SurplusHeight=$(document).height() - $('body,html').scrollTop() - $(window).height();
	let ScreenHeight=$(window).height();
	let fenzi = SurplusHeight+ScreenHeight
	// console.log(DocumentHeight)

	$(window).scroll(function () {
	    //滚动事件代码
			console.log(SurplusHeight)
	})
})