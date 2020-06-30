$(function(){
	// let SurplusHeight=$(document).height() - $(window).height();
	// let ScreenHeight=$(window).height();
	// let fenzi = SurplusHeight+ScreenHeight
	// // console.log(DocumentHeight)
	let femu = $(document).height() - $(window).height()
	$(window).scroll(function () {
	    //滚动事件代码
		let fenzi = $('body,html').scrollTop()
		let data= (fenzi/femu).toFixed(2);
		console.log(data*100)
		$('.thebee-bar').css("width",data*100+"%")
	})
})