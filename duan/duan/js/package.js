$(function () {//jquery的页面加载后
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
    返回顶部
     */
    $(window).scroll(function () {
        if($(this).scrollTop()>=200){
            $(".you").css("height","200px");
            $(".banner").css({background:"rgba(0,0,0,0.8)"});
            $(".banner-1 li a").css("color","#fff");
        }
        else{
            $(".you").css("height","150px");
            $(".banner").css("background","rgba(255,200,200,0.5)");
            $(".banner-1 li a").css("color","#000");
        }
    })
    /*
     运动返回顶部
     */
    $("#you4").click(function () {
        var num=$(window).scrollTop();
        var timer=setInterval(function () {
            $(window).scrollTop(num);
            num-=30;
            if(num<-5){
                clearInterval(timer);
            }
        },20)
    })
    /*
    套餐页轮播图：
     */
//   var timer= setInterval(function () {
//        var left=getStyle($(".lunbo ul")[0],"left");
//        move($(".lunbo ul")[0],{left:num*(-302)-70});
//        num++;
//        if(num>4){
//            setTimeout(function () {
//                num=0;
//            },1000)
//        }
//    },1500)
    duan();
    function duan() {
        var num = 1;
        $(".lunbo ol").find("li").eq(num - 1).attr("class", "active");
        var timer = setInterval(function () {
            move($(".lunbo ul")[0], {left: (-20) + num * (-302)});
            num++;
            $(".lunbo ol li").attr("class", "");
            $(".lunbo ol li").eq(num - 1).attr("class", "active");

            if (num > 4) {

                clearInterval(timer);
                setTimeout(function () {
                    $(".lunbo ul").eq(0).css("left", "-80px");
                    duan();
                }, 2000);
            }
        }, 2000)

        $(".lunbo ul").mouseover(function () {
            clearInterval(timer);
        })
        $(".lunbo ul").mouseout(function () {
            clearInterval(timer);
            num=$(this).index()+1;
            console.log(num);
            timer= setInterval(function () {
                move($(".lunbo ul")[0],{left:(-20)+num*(-302)});
                num++;
                $(".lunbo ol li").attr("class","");
                $(".lunbo ol li").eq(num-1).attr("class","active");

                if(num>4){

                    clearInterval(timer);
                    setTimeout(function(){$(".lunbo ul").eq(0).css("left","-80px"); duan();},2000);
                }
            },2000)
        })
    }
    /*
    鼠标移上事件：
     */
    $(".lunbo ul li").mouseover(function () {
        $(this).find("div").stop().slideDown(500);
    })
    $(".lunbo ul li").mouseout(function () {
        $(this).find("div").stop().slideUp(500);
    })
    /*
    点击事件出现bug,原因是上面的js写的太繁琐，点击事件以后再加
     */
//    $(".lunbo ol li").click(function () {
//        $(".lunbo ul").css("left",($(this).index()+1)*(-302)+"px");
//    })

})/**
 * Created by Administrator on 2016/11/3 0003.
 */
