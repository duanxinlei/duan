onload= function () {
    var inputs = document.getElementsByTagName("input");
    var checkbox = document.getElementById("check");
    var reg1 = /^1[0-9]{10}$/;
    var reg2 = /^\w{5,20}$/;
    var flag=false;

    //   console.log(checkbox);
    inputs[4].onclick = function () {//点击验证格式并且10天免登陆
        var val1 = inputs[0].value;
        var val2 = inputs[1].value;
        var url = "../json/login.json";
        /*
         ajax验证json里的数据
         */
        $.ajax({
            type: "get",
            url: url,
            success: function (response, status, xhr) {
                var arr = response;
                console.log(response);
                console.log(arr.password);
                if (arr.username == inputs[0].value && arr.password == inputs[1].value) {//如果符合要求
                    if (checkbox.checked) {
                        var date = new Date();
                        date.setDate(date.getDate() + 10);
                        setCookie("username", val1, date);
                        setCookie("password", val2, date);
                    }
                    if(flag==true){
                        open("index.html");
                    }else{
                        alert("请将滑动条滑到最右");
                    }
                } else {
                    alert("用户名或密码格式错误");
                }
            }
        })


    }
    inputs[0].value = getCookie("username");
    inputs[1].value = getCookie("password");

    var $document = $(document);
    var selector = '[data-rangeslider]';
    var $inputRange = $(selector);

    // Example functionality to demonstrate a value feedback
    // and change the output's value.
    function valueOutput(element) {
        var value = element.value;
        var output = element.parentNode.getElementsByTagName('output')[0];

        output.innerHTML = value;
    }

    // Initial value output
    for (var i = $inputRange.length - 1; i >= 0; i--) {
        valueOutput($inputRange[i]);
    }
    ;

    // Update value output
    $document.on('input', selector, function (e) {
        valueOutput(e.target);
    });

    // Initialize the elements
    $inputRange.rangeslider({
        polyfill: false
    });

    // Example functionality to demonstrate programmatic value changes
    $document.on('click', '#js-example-change-value button', function (e) {
        var $inputRange = $('input[type="range"]', e.target.parentNode);
        var value = $('input[type="number"]', e.target.parentNode)[0].value;

        $inputRange
            .val(value)
            .change();
    });

    // Example functionality to demonstrate programmatic attribute changes
    $document.on('click', '#js-example-change-attributes button', function (e) {
        var $inputRange = $('input[type="range"]', e.target.parentNode);
        var attributes = {
            min: $('input[name="min"]', e.target.parentNode)[0].value,
            max: $('input[name="max"]', e.target.parentNode)[0].value,
            step: $('input[name="step"]', e.target.parentNode)[0].value
        };

        $inputRange
            .attr(attributes)
            .rangeslider('update', true);
    });

    // Example functionality to demonstrate destroy functionality
    $document
        .on('click', '#js-example-destroy button[data-behaviour="destroy"]', function (e) {
            $('input[type="range"]', e.target.parentNode).rangeslider('destroy');
        })
        .on('click', '#js-example-destroy button[data-behaviour="initialize"]', function (e) {
            $('input[type="range"]', e.target.parentNode).rangeslider({ polyfill: false });
        });
    console.log($("output").val());
    /*
     滑动检测
     */
    $("html").mouseup(function () {
        console.log($(".huadong").css("color"));
        if ($(this).find("output").val() == 100) {
            $(".huadong").css("color", "lawngreen");
            flag=true;
        } else {
            $(".huadong").css("color", "gray");
            flag=false;
        }
    })
}


