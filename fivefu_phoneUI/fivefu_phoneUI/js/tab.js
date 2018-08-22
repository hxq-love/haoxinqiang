define(["jquery"], function($) {
    return {
        t:function() {
            $(".tab_content>div:first-child").css("display", "block").siblings('div').css("display", "none");
            $(document).delegate('.tab_wrap>.tab>a', 'click', function() {
                //一定要使用delegate的方法来写 否则在元素隐藏或者后来生成的情况下有可能不起作用
                $(this).addClass("tab_active").siblings().removeClass("tab_active");
                var li_index = $(this).index();
                $(this).parent(".tab").siblings(".tab_content").find(">div").eq(li_index).css("display", "block").siblings().css("display", "none");
            });
        }

    }

})