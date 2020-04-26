// JavaScript Document
//"use strict";
var page = 1;
var x, y, z, first_page, second_page, third_page;
function chuli() {
	if (page === 1) {
		x = document.getElementById("zhuti").value;
		y = document.getElementById("shijian").value;
	    z = document.getElementById("shuofa").value;
		console.log("主体：" + x);
		console.log("事件：" + y);
		console.log("另一种说法：" + z);
		first_page = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + x + y + "是怎么回事呢?" + x + "相信大家都很熟悉,但是" + x + y +"是怎么回事呢，下面就让小编带大家一起了解吧。";
		second_page = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + x + y +",其实就是" + z + ",大家可能会很惊讶"+ x +"怎么会" + y + "呢?但事实就是这样,小编也感到非常惊讶。";
		third_page = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这就是关于" + x + y +"的事情了,大家有什么想法呢,欢迎在评论区告诉小编一起讨论哦!";
		document.getElementById("return").innerHTML=first_page + "<br/>" + second_page + "<br />" + third_page;
	}
	else if (page === 2) {
		x = document.getElementById("zhuti").value;
		y = document.getElementById("shijian").value;
		z = document.getElementById("shuofa").value;
		console.log("主体：" + x);
		console.log("事件：" + y);
		console.log("另一种说法：" + z);
		var first_page = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;众所周知，" + x + "不可能" + y + "。但是，最近传闻却并非如此。这是怎么回事呢？下面就让小编带大家一起了解吧。";
		var second_page = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + x + y +"的原因其实很简单，就是" + z + "。想必大家肯定非常惊讶吧，无论从哪一方面来说，"+ x +"都不会" + y + "啊。但经过多方考证后，" + x + "确实会" + y + "。对此，只能说是世间之大无奇不有了。";
		var third_page = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有关" + x + y +"的曝光就到此为止了,若还想继续了解更多惊奇的事情，还请关注小编以获得最新动态哦。";
		document.getElementById("return").innerHTML=first_page + "<br/>" + second_page + "<br />" + third_page;
	}
}
function tiaozhuan_1() {
	page = 1;
	document.getElementById("page1").style = "color: white; background-color: #4CAF50;";
	document.getElementById("page2").style = "color: black; background-color: #243,243,243;";
	document.getElementById("page3").style = "color: black; background-color: #243,243,243;";
}
function tiaozhuan_2() {
	page = 2;
	document.getElementById("page2").style = "color: white; background-color: #4CAF50;";
	document.getElementById("page1").style = "color: black; background-color: #243,243,243;";
	document.getElementById("page3").style = "color: black; background-color: #243,243,243;";
}
function tiaozhuan_3() {
	page = 3;
	document.getElementById("page3").style = "color: white; background-color: #4CAF50;";
	document.getElementById("page1").style = "color: black; background-color: #243,243,243;";
	document.getElementById("page2").style = "color: black; background-color: #243,243,243;";
}