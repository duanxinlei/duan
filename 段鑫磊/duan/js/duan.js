$(function () {//jquery的页面加载后
    /*
    左侧固定栏的事件效果：
    */
    $("#zuo1,#zuo1-1").mouseover(function () {
        $("#zuo1").css({background:"#ff6600",fontSize:"15px",lineHeight:"25px"});
        $("#zuo1").html("套餐 服务");
        $("#zuo1-1").stop().slideDown(200);
    });
    $("#zuo1,#zuo1-1").mouseout(function () {
        $("#zuo1").css({background:"rgba(0,0,0,0)",fontSize:"20px",lineHeight:"50px"});
        $("#zuo1").html("快");
        $("#zuo1-1").stop().slideUp(200);
    });
    $("#zuo2,#zuo2-1").mouseover(function () {
        $("#zuo2").css({background:"#ff6600",fontSize:"15px",lineHeight:"25px"});
        $("#zuo2").html("企业 营销");
        $("#zuo2-1").stop().slideDown(200);
    });
    $("#zuo2,#zuo2-1").mouseout(function () {
        $("#zuo2").css({background:"rgba(0,0,0,0)",fontSize:"20px",lineHeight:"50px"});
        $("#zuo2").html("企");
        $("#zuo2-1").stop().slideUp(200);
    });
    $("#zuo3,#zuo3-1").mouseover(function () {
        $("#zuo3").css({background:"#ff6600",fontSize:"15px",lineHeight:"25px"});
        $("#zuo3").html("集团 官网");
        $("#zuo3-1").stop().slideDown(200);
    });
    $("#zuo3,#zuo3-1").mouseout(function () {
        $("#zuo3").css({background:"rgba(0,0,0,0)",fontSize:"20px",lineHeight:"50px"});
        $("#zuo3").html("官");
        $("#zuo3-1").stop().slideUp(200);
    });
    $("#zuo4,#zuo4-1").mouseover(function () {
        $("#zuo4").css({background:"#ff6600",fontSize:"15px",lineHeight:"25px"});
        $("#zuo4").html("商城 交互");
        $("#zuo4-1").stop().slideDown(200);
    });
    $("#zuo4,#zuo4-1").mouseout(function () {
        $("#zuo4").css({background:"rgba(0,0,0,0)",fontSize:"20px",lineHeight:"50px"});
        $("#zuo4").html("商");
        $("#zuo4-1").stop().slideUp(200);
    });
    $("#zuo5,#zuo5-1").mouseover(function () {
        $("#zuo5").css({background:"#ff6600",fontSize:"15px",lineHeight:"25px"});
        $("#zuo5").html("手机 微网");
        $("#zuo5-1").stop().slideDown(200);
    });
    $("#zuo5,#zuo5-1").mouseout(function () {
        $("#zuo5").css({background:"rgba(0,0,0,0)",fontSize:"20px",lineHeight:"50px"});
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
    返回顶部出现
     */
//    $(window).scroll(function(){
//        console.log($(".qiye").scrollTop());
//        if ($(window).scrollTop()>100){
//
//            $(".you").css("height","200px");
//        }
//        })
//    $(".show-banner").click(function () {
//        console.log($(window).scrollTop());
//    })
//           $(window)function () {
//               var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
//               console.log(parseInt(scrollTop));
//           }
//    $(window).scroll(function () {
//        alert($(document).scrollTop());
//    })
            /*
            首页第二页的动画队列：因为jQuery插件的原因，width：100%时会出现页面抖动
             */
    $(".section .duan").mouseenter(function () {
        //this.siblings
//        $(this).siblings(".duan").animate({opacity:0.5},200);
        $(this).siblings(".duan").stop().animate({width:"19.98%",opacity:0.4},500).queue(function (next) {
            $(this).find(".qi").animate({top:"20%",left:"37%"});
            $(this).find(".qi-1").show({padding:"800px"},500);
            $(this).find("h2").show({padding:"800px"},500);
            next();
        }).queue(function (next) {
            $(this).find(".qi2").hide();
            next();
        })
        $(this).stop().animate({width:"40%",opacity:1},500).queue(function (next) {
            //this
            $(this).find(".qi").animate({top:"30%",left:"10%"},500);
            $(this).find(".qi-1").hide({padding:"800px"},500);
            $(this).find("h2").hide({padding:"800px"},500);
            next();
        }).queue(function (next) {
            $(this).find(".qi2").show();
            next();
        })
    })
    /*
    首页第三页的展示效果，引用jQuery插件：
     */
    var images = "", count = 8;
    for(var i = 1; i <= count; i++)
        images += '<a href=""><img src="../images/'+i+'.jpg" /></a>';

//appending the images to .grid
    $(".grid").append(images);

    var d = 0; //delay
    var ry, tz, s; //transform params

//animation time
    $(".grid").on("mouseenter", function(){
        //fading out the thumbnails with style
        $("img").each(function(){
            d = Math.random()*1000; //1ms to 1000ms delay
            $(this).delay(d).animate({opacity: 0}, {
                step: function(n){
                    s = 1-n; //scale - will animate from 0 to 1
                    $(this).css("transform", "scale("+s+")");
                },
                duration: 1000,
            })
        }).promise().done(function(){
            //after *promising* and *doing* the fadeout animation we will bring the images back
            storm();
        })
    })
//bringing back the images with style
    function storm()
    {
        $("img").each(function(){
            d = Math.random()*1000;
            $(this).delay(d).animate({opacity: 1}, {
                step: function(n){
                    //rotating the images on the Y axis from 360deg to 0deg
                    ry = (1-n)*360;
                    //translating the images from 1000px to 0px
                    tz = (1-n)*1000;
                    //applying the transformation
                    $(this).css("transform", "rotateY("+ry+"deg) translateZ("+tz+"px)");
                },
                duration: 1000,
                //some easing fun. Comes from the jquery easing plugin.
                easing: 'easeOutQuint',
            })
        })
    }
    /*
    首页第五页效果：
     */
    $(".four1").mouseenter(function () {
        //this
        $(this).attr("class","active-6");
        $(".zhuti").html($(this).find("span").html());
        $(".four p").html($(this).find("strong").html());
        console.log($(this).index());
    })
    $(".four1").mouseleave(function () {
        $(this).attr("class","four1");
    })
/*
留言显示和关闭功能
 */
    $("#you2").click(function () {
        $(".message").css({zIndex:"20"});
        setTimeout(function () {
            $(".message-1").slideDown(500);
        },500)
    })
    $(".message-close").click(function () {
        $(".message-1").slideUp(500);
        setTimeout(function () {
            $(".message").css({zIndex:"0"});
        },500)
    })
    /*
    首页登录效果
     */
    $("#banner-1-2,.login").mouseover(function () {
        $(".login").stop().slideDown(500);
    })
    $("#banner-1-2,.login").mouseout(function () {
        $(".login").stop().slideUp(500);
    })
    /*
    首页返回顶部
     */
    $(".ttoopp").mouseenter(function () {
        $(".you").css("height","200px");
    })
    $(".ppop").mouseenter(function () {
        $(".you").css("height","150px");
    })
});
$(function(){//fullpage代码
    $('#dowebok').fullpage({
        sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        loopBottom: true
    });

    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 5000);
});
