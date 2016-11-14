onload= function () {
    /*
    获取元素
     */
    var inputs=document.getElementsByTagName("input");
    var btn=document.getElementById("btn");
    var test1=document.getElementById("iphone-test");
    var test2=document.getElementById("password-test");
    var dengji=document.getElementsByClassName("aa");
    var check=document.getElementById("checkbox");
    inputs[0].focus();
    /*
    手机号验证
     */
    inputs[0].onblur= function () {
        console.log(test1);
        var reg=/^1[0-9]{10}$/;
        if(!reg.test(this.value)){
            test1.innerHTML="手机号码格式不正确";
            test1.style.color="red";
        }else{
            test1.innerHTML="手机号码格式正确";
            test1.style.color="green";
        }
    }
    /*
    密码验证
     */
    inputs[1].onkeydown=function() {
        var reg123 = /^\w{5,8}$/i;
        var reg47 = /^\d{9,19}$/i;
        var reg9 = /\d{1,}/i;
        var reg91 = /[a-zA-Z]{1,}/i;
        var reg92 = /_{1,}/i;
        var reg93 = /^\w{13,19}$/i;
        var reg = /^\w{5,19}$/i;
        var val = inputs[1].value;
        if (reg.test(val)) {//这里用了3个div，每次判断都将重新给盒子背景
            if (reg123.test(val) || reg47.test(val)) {
                dengji[0].style.background = "red";
                dengji[1].style.background = "";
                dengji[2].style.background = "";
                test2.innerHTML="你的密码很危险啊！！！";
                test2.style.color="pink";
            } else if (reg9.test(val) && reg91.test(val) && reg92.test(val) && reg93.test(val)) {
                dengji[0].style.background = "";
                dengji[1].style.background = "";
                dengji[2].style.background = "green";
                test2.innerHTML="你的密码很安全！！！";
                test2.style.color="green";
            } else {
                dengji[1].style.background = "orange";
                dengji[2].style.background = "";
                dengji[0].style.background = "";
                test2.innerHTML="你的密码还可以的！！！";
                test2.style.color="orange";
            }
        } else {
            dengji[0].style.background = "";//当输入第二次密码时，让3个div的背景初始化...
            dengji[1].style.background = "";
            dengji[2].style.background = "";
            test2.innerHTML="由_、数字和字母组成,长度为6~20位";
            test2.style.color="red";
        }
    }
    /*
    登录验证
     */

    btn.onclick= function () {
        var reg1=/^1[0-9]{10}$/;
        var reg2=/^\w{5,19}$/;
        if(reg1.test(inputs[0].value)&&reg2.test(inputs[1].value)){
//            if(check.checked){
//                var date = new Date();
//                date.setDate(date.getDate()+10);
//                setCookie("iphone",val1,date);
//                setCookie("password",val2,date);
//            }
            open("list.html");
        }

    }
    /*
    cookie
     */



}/**
 * Created by Administrator on 2016/10/28 0028.
 */
