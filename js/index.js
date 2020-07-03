$(function(){
	let femu = $(document).height() - $(window).height()
	$(window).scroll(function () {
		let fenzi = $('body,html').scrollTop()
		let data= (fenzi/femu).toFixed(2);
		console.log(data*100)
		$('.thebee-bar').css("width",data*100+"%")
	})
	let windowHeight=$(window).height()
	console.log($('.position-sticky').height())
	let positionStickHei=$('.position-sticky').height()
	$('.swiper-container').css('height',windowHeight-positionStickHei+"px")
	$(function() {
	    var myDate = new Date;
	    var year = myDate.getFullYear(); //获取当前年
	    var mon = myDate.getMonth() + 1; //获取当前月
	    var date = myDate.getDate(); //获取当前日
	    // var h = myDate.getHours();//获取当前小时数(0-23)
	    // var m = myDate.getMinutes();//获取当前分钟数(0-59)
	    // var s = myDate.getSeconds();//获取当前秒
	    var week = myDate.getDay();
	    var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	    // console.log(year, mon, date, weeks[week])
	    $("#time").html(year + "年" + "&nbsp;" + mon + "月" + "&nbsp;" + date + "日" + "&nbsp;&nbsp;&nbsp;" +weeks[week]);
	})
	// console.log($('.bottom-down>span'))
	$('.bottom-down>span').click(function(){
		$('html,body').animate({
			"scrollTop":windowHeight,
			
		},700)
		
	})
	
})


