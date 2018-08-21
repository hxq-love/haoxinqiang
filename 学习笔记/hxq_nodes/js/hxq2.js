$(function() {
    $(".guanbi .node_biaoti").click(function(event) {
        /* Act on the event */
        $(this).parent().siblings('.guanbi').children('.node_menu').fadeOut();
    });
    //1.notejs
    $(".guanbi .node_biaoti").click(function() {
        $(this).siblings('.node_menu').fadeToggle("slow");
    });

    $(".note .node_menu .dianji").click(function() {
        $(this).siblings('.line').toggleClass('xianshi');
    });

    //2.note js
    $(".note2 .node_menu .yuan").hover(function() {
            $(".note2 .node_menu .yuan .wenbenkuang input").addClass('note2_input');
        },
        function() {
            if ($(".note2 .node_menu .yuan .wenbenkuang input").val() == "") {
                $(".note2 .node_menu .yuan .wenbenkuang input").removeClass('note2_input');
            }

        });

    //3.note js
    $(".note3 .kuang input").bind('input propertychange', function() {
        var neirong = $(this).val();
        $(".note3 .kuang .neirong").text(neirong);

    });

    /*4.note js*/
    $(".note4 .node_menu .neirong").scroll(function() {
        var gaodu = $(this).scrollTop();
        if (gaodu >= 100) {
            $(".note4 .node_menu .neirong div:nth-child(2)").addClass('note4_dingwei');
            $(".note4 .node_menu .neirong div:nth-child(2)").css("top", gaodu);
        } else {
            console.info("小于");
            $(".note4 .node_menu .neirong div:nth-child(2)").removeClass('note4_dingwei');
        }

    });

    /*5.note js*/
    $(".note5 .wenbenkuang input ").keyup(function() {
        if (event.keyCode == 13) {
            //这里写你要执行的事件;
            $(this).val("");
        }
    });

    $(document).keydown(function(event) {
        if (event.keyCode == 13) {
            $(".note5 .wenbenkuang input").each(function() {
                //你的要运行的代码
                $(".note5 .wenbenkuang input").val("");
            });
        }
    });

    $('.note8_btn').mousedown(function(e) {
        if (3 == e.which) {
            alert('这是右键单击事件');
        } else if (1 == e.which) {
            alert('这是左键单击事件');
        }
    });
    /*第九个JS的代码*/
    
    
    $(".btn9 .btn").bind('click', function() {

        var num = $("ul").attr("data");
        console.info(num);
        if (num == 1) {
             $("ul").removeClass('hide2');
             $(".box").removeClass('hide');
             $("li").addClass('li_show');
             $("ul").attr("data","2");
        }
        else{
             $(".box").addClass('hide');
             $("ul").addClass('hide2')
            setTimeout(function() {
                $("li").removeClass('li_show')
            }, 500);
            $("ul").attr("data","1");
        }

    });


    $(".note29 .one input").bind("click",function(){
         if($(this).is(':checked')){
        
            $(this).siblings('input').prop("checked",false)
        }else{
            $(this).siblings('input').prop("checked",true)
        }
    });
})
