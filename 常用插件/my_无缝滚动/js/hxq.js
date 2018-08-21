(function($) {
    $.fn.tooltip = function(options) {
        var Imgs_lunbo = $.extend({
            'times': 20,
            "width": 130,
            "margin": 10
        }, options);
        return this.each(function() {


            // Tooltip插件代码
            var setImgs;
            var sLeft = 0;

            var son_box1_length = $(".son_box1 .img_list").length * 2;
            var margin_ = Imgs_lunbo.margin * son_box1_length * 2;

            $(".boxs").find(".img_list").css({
                'width': Imgs_lunbo.width,
                'margin-left': Imgs_lunbo.margin,
                'margin-right': Imgs_lunbo.margin,
            });;


            var width_son = $(".img_list").outerWidth();
            $(".boxs_fu").append('<div class="son_box2"></div>');
            $(".boxs_fu").css("width", (width_son * son_box1_length + margin_) + "px");
            var son_win = $(".son_box1").outerWidth();



            if (son_win > $(".boxs").outerWidth()) {
                $(".son_box2").html($(".son_box1").html());

                imgSetval();
                $(".boxs img").hover(function() {
                    clearInterval(setImgs);
                }, function() {
                    imgSetval();
                });
            }

            function imgSetval() {
                setImgs = setInterval(function() {
                    if (sLeft >= son_win) {
                        sLeft = 0;
                    }
                    $(".boxs").scrollLeft(sLeft);
                    sLeft = sLeft + 1;

                }, Imgs_lunbo.times);
            };



        });

    };
})(jQuery);