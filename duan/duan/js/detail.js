$(function () {
    /*
     左侧固定栏的事件效果：
     */
    $("#zuo1,#zuo1-1").mouseover(function () {
        $("#zuo1").css({background: "#ff6600", fontSize: "15px", lineHeight: "25px"});
        $("#zuo1").html("套餐 服务");
        $("#zuo1-1").stop().slideDown(200);
    });
    $("#zuo1,#zuo1-1").mouseout(function () {
        $("#zuo1").css({background: "rgba(0,0,0,0)", fontSize: "20px", lineHeight: "50px"});
        $("#zuo1").html("快");
        $("#zuo1-1").stop().slideUp(200);
    });
    $("#zuo2,#zuo2-1").mouseover(function () {
        $("#zuo2").css({background: "#ff6600", fontSize: "15px", lineHeight: "25px"});
        $("#zuo2").html("企业 营销");
        $("#zuo2-1").stop().slideDown(200);
    });
    $("#zuo2,#zuo2-1").mouseout(function () {
        $("#zuo2").css({background: "rgba(0,0,0,0)", fontSize: "20px", lineHeight: "50px"});
        $("#zuo2").html("企");
        $("#zuo2-1").stop().slideUp(200);
    });
    $("#zuo3,#zuo3-1").mouseover(function () {
        $("#zuo3").css({background: "#ff6600", fontSize: "15px", lineHeight: "25px"});
        $("#zuo3").html("集团 官网");
        $("#zuo3-1").stop().slideDown(200);
    });
    $("#zuo3,#zuo3-1").mouseout(function () {
        $("#zuo3").css({background: "rgba(0,0,0,0)", fontSize: "20px", lineHeight: "50px"});
        $("#zuo3").html("官");
        $("#zuo3-1").stop().slideUp(200);
    });
    $("#zuo4,#zuo4-1").mouseover(function () {
        $("#zuo4").css({background: "#ff6600", fontSize: "15px", lineHeight: "25px"});
        $("#zuo4").html("商城 交互");
        $("#zuo4-1").stop().slideDown(200);
    });
    $("#zuo4,#zuo4-1").mouseout(function () {
        $("#zuo4").css({background: "rgba(0,0,0,0)", fontSize: "20px", lineHeight: "50px"});
        $("#zuo4").html("商");
        $("#zuo4-1").stop().slideUp(200);
    });
    $("#zuo5,#zuo5-1").mouseover(function () {
        $("#zuo5").css({background: "#ff6600", fontSize: "15px", lineHeight: "25px"});
        $("#zuo5").html("手机 微网");
        $("#zuo5-1").stop().slideDown(200);
    });
    $("#zuo5,#zuo5-1").mouseout(function () {
        $("#zuo5").css({background: "rgba(0,0,0,0)", fontSize: "20px", lineHeight: "50px"});
        $("#zuo5").html("移");
        $("#zuo5-1").stop().slideUp(200);
    });
    /*
     右侧固定栏效果：
     */
    $("#you1,#you1-1").mouseover(function () {
        $("#you1").css({backgroundPosition: "-292px 266px"});
        $("#you1-1").stop().slideDown(200);
    });
    $("#you1,#you1-1").mouseout(function () {
        $("#you1").css({backgroundPosition: "-292px 202px"});
        $("#you1-1").stop().slideUp(200);
    })
    $("#you2").mouseover(function () {
        $("#you2").css({backgroundPosition: "-231px 270px"});
    });
    $("#you2").mouseout(function () {
        $("#you2").css({backgroundPosition: "-231px 206px"});
    })
    /*
     固定栏返回顶部
     */
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            $(".you").css("height", "200px");
            $(".banner").css("background", "rgba(0,0,0,0.8)");
        }
        else {
            $(".you").css("height", "150px");
            $(".banner").css("background", "rgba(0,139,0,0.5)");
        }
    })
    /*
     运动返回顶部
     */
    $("#you4").click(function () {
        var num = $(window).scrollTop();
        var timer = setInterval(function () {
            $(window).scrollTop(num);
            num -= 30;
            if (num < -20) {
                clearInterval(timer);
            }
        })
    })
})/**
 * Created by Administrator on 2016/11/7 0007.
 */
