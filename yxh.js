// JavaScript Document
"use strict";
function chuli() {
	var x = document.getElementById("zhuti").value;
	var y = document.getElementById("shijian").value;
	var z = document.getElementById("shuofa").value;
	console.log("主体：" + x);
	console.log("事件：" + y);
	console.log("另一种说法：" + z);
	var first_page = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + x + y + "是怎么回事呢?" + x + "相信大家都很熟悉,但是" + x + y +"是怎么回事呢，下面就让小编带大家一起了解吧。";
	var second_page = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + x + y +",其实就是" + z + ",大家可能会很惊讶"+ x +"怎么会" + y + "呢?但事实就是这样,小编也感到非常惊讶。";
	var third_page = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这就是关于" + x + y +"的事情了,大家有什么想法呢,欢迎在评论区告诉小编一起讨论哦!";
	document.getElementById("return").innerHTML=first_page + "<br/>" + second_page + "<br />" + third_page;
}