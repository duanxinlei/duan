$(function () {
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
    固定栏返回顶部
     */
    $(window).scroll(function () {
        if($(this).scrollTop()>=200){
            $(".you").css("height","200px");
            $(".banner").css("background","rgba(0,0,0,0.8)");
        }
        else{
            $(".you").css("height","150px");
            $(".banner").css("background","rgba(0,139,0,0.5)");
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
            if(num<-20){
                clearInterval(timer);
            }
        })
    })
    /*
    加载更多
     */
    var count=1;
    $(".more").click(function () {
        var url="../json/more.json";
        $.ajax({
            type:"get",
            url:url,
            success: function (response,status,xhr) {
                var arr=response;
                for(var j=0;j<arr.length;j++) {
                    if (arr[j].page == count) {
                        console.log(arr[j]);
                        var lis=arr[j].list;
                        for (var i = 0; i < lis.length; i++) {
                            /*
                             <li><a href=""><div class="list-img"><img src="../images/new2/007.jpg" alt=""/></div><h2>附件是迪奥和沃尔玛从设计而</h2> </a>
                             <p>随着中等收入人群的扩大，我国的传统家庭结构将发生相应的演进，同时，未来各互联网金融细分领域的边界也或将出现不同程度的延展或调整。</p>
                             <span>10-19 01:40</span>
                             </li>
                             */
                            var li = $("<li><a href=\"\"><div class=\"list-img\"><img src=\"" + lis[i].src + "\" alt=\"\"/></div><h2>" + lis[i].h2 + "</h2></a><p>" + lis[i].p + "</p><span>" + lis[i].span + "</span></li>");
                            console.log(li);
                            $(".list").first().append(li);

                        }
                        count++;
                        break;

                    }
                    if(count>arr.length){
                        $(".more").html("已经没有更多了╮(╯▽╰)╭");
                        $(".more").css("background","gray");
                    }
                }

            }

        })
    })
    /*
    轮播图
     */
    var num=0;
    var timer1=setInterval(function () {
        $(".zhanshi-1").css("left",num+"px");
        num-=400;
        if(num<-400){
            num=0;
        }
    },2500)
    $(".zhanshi").mouseover(function () {
        clearInterval(timer1);
    })
    $(".zhanshi").mouseout(function () {
        timer1=setInterval(function () {
            $(".zhanshi-1").css("left",num+"px");
            num-=400;
            if(num<-400){
                num=0;
            }
        },2500)
    })
    /*
    排行榜的点击事件：
     */
    $(".zhou").click(function () {
        $(".paihang1").css("display","block");
        $(".paihang2").css("display","none");
    })
    $(".ri").click(function () {
        $(".paihang2").css("display","block");
        $(".paihang1").css("display","none");
    })
})/**
 * Created by Administrator on 2016/10/31 0031.
 */
