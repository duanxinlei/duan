/*
分页配合ajax进行加载
 */
$(function() {//这里代码都是相同，需要重构
    var url="../json/list.json";
    $.ajax({
        type: "get",
        url: url,
        success: function (response, status, xhr) {
            console.log($(".duan li").length);
            var arr = response;
            if($(".duan li").length>0){
                $(".duan").empty();
                for(var i=0;i<arr.length;i++){
                    console.log(arr[i]);
                    if(arr[i].page==1){
                        var arr2=arr[i].src;
                        var arr3=arr[i].src2;
                        for(var j=0;j<arr2.length;j++){
                            var li=$("<li><a href=\"\"><img src=\""+arr2[j]+"\" alt=\"\"/></a><div><a href=\"\"><img src=\""+arr3[j]+"\" alt=\"\"/></a></div></li>");
                            $(".duan").first().append(li);
                        }
                    }
                }
            }
            else{
                for(var i=0;i<arr.length;i++){
                    console.log(arr[i]);
                    if(arr[i].page==1){
                        var arr2=arr[i].src;
                        var arr3=arr[i].src2;
                        for(var j=0;j<arr2.length;j++){
                            var li=$("<li><a href=\"\"><img src=\""+arr2[j]+"\" alt=\"\"/></a><div><a href=\"\"><img src=\""+arr3[j]+"\" alt=\"\"/></a></div></li>");
                            $(".duan").first().append(li);
                        }
                    }
                }
            }
        }
    })
    $("#pagerArea").cypager({pg_size: 10, pg_nav_count: 5, pg_total_count: 194, pg_call_fun: function(count) {
        var url="../json/list.json";
        $.ajax({
            type:"get",
            url:url,
           success: function (response,status,xhr) {
               console.log($(".duan li").length);
               var arr=response;
/*
if  ul 里有子节点，删除，并且添加新的
 */
                          if($(".duan li").length>0){
                                $(".duan").empty();
                              for(var i=0;i<arr.length;i++){
                                  console.log(arr[i]);
                                  if(arr[i].page==count){
                                      var arr2=arr[i].src;
                                      var arr3=arr[i].src2;
                                      for(var j=0;j<arr2.length;j++){
                                          var li=$("<li><a href=\"\"><img src=\""+arr2[j]+"\" alt=\"\"/></a><div><a href=\"\"><img src=\""+arr3[j]+"\" alt=\"\"/></a></div></li>");
                                          $(".duan").first().append(li);
                                      }
                                  }
                              }
                          }
                          else{
                              for(var i=0;i<arr.length;i++){
                                  console.log(arr[i]);
                                  if(arr[i].page==count){
                                      var arr2=arr[i].src;
                                      var arr3=arr[i].src2;
                                      for(var j=0;j<arr2.length;j++){
                                          var li=$("<li><a href=\"\"><img src=\""+arr2[j]+"\" alt=\"\"/></a><div><a href=\"\"><img src=\""+arr3[j]+"\" alt=\"\"/></a></div></li>");
                              $(".duan").first().append(li);

                          }

                      }

                  }
               }
           }
        })
        setTimeout(function (){
            console.log($(".duan li"));
            $(".duan li").mouseenter(function () {
                $(this).find("div").slideDown();
            })
            $(".duan li").mouseleave(function () {
                $(this).find("div").slideUp();
            })
        },500)
    }
    });
    /*
    鼠标移上改变src的地址
     */

    setTimeout(function (){
        console.log($(".duan li"));
        $(".duan li").mouseenter(function () {
            $(this).find("div").slideDown();
        })
        $(".duan li").mouseleave(function () {
            $(this).find("div").slideUp();
        })
    },500)
    });
