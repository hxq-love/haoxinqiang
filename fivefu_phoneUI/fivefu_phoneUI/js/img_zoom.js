// 依赖 jq和swiper
define(["jquery","swiper"], function($) {
    return {
    	mySwiper: null,
            imgZoom: function(dom) {
                var zoomPopup = '<div class="swiper-container img_zoom_mask"><a class="close">&times;</a><div class="swiper-wrapper"></div><div class="swiper-pagination" style="color:rgba(255,255,255,0.6);"></div></div>';
                $(dom).append(zoomPopup);
                var imgLen = $(dom).find(".img_zoom img").length;
                $(dom).find(".img_zoom img").each(function(i) {
                    var imgSrc = $(dom).find("img")[i].src;
                    $(dom).children(".img_zoom_mask").find(">.swiper-wrapper").append('<div class="swiper-slide"><div class="swiper-zoom-container"><img src = ' + imgSrc + '></div></div>');

                    $(this).bind("click", function() {
                        $(dom).children(".img_zoom_mask").css("visibility", "visible");
                        var mySwiper = new Swiper($(dom).children(".img_zoom_mask"), {
                            loop: true,
                            pagination: '.swiper-pagination',
                            paginationType: 'fraction',
                            initialSlide: i,
                            // zoom: true
                        });
                        // close
                        $(dom).children(".img_zoom_mask").find(".close").bind("click", function() {
                            $(this).parent(".img_zoom_mask").css("visibility", "hidden");
                            // mySwiper.updateProgress();
                        });
                    });

                });
                // 样式渲染 可以写在css中的
                $(".img_zoom_mask").css({
                    "position": "fixed",
                    "top": 0,
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    // "background": "rgba(0, 113, 255, .2)",
                    "background": "rgba(0, 0, 0, 1)",
                    // "background": "rgba(255, 255, 255, .1)",
                    "visibility": "hidden"
                });
                $(".img_zoom_mask .swiper-slide").css({
                    "display": "-webkit-box",
                    "display": "-moz-box",
                    "display": "-ms-flexbox",
                    "display": "-webkit-flex",
                    "display": "flex",
                    "-webkit-box-pack": "center",
                    "-moz-box-pack": "center",
                    "-ms-flex-pack": "center",
                    "-webkit-justify-content": "center",
                    "justify-content": "center",
                    "-webkit-box-align": "center",
                    "-moz-box-align": "center",
                    "-ms-flex-align": "center",
                    "-webkit-align-items": "center",
                    "align-items": "center",
                    "text-align": "center"
                });
                $(".img_zoom_mask .swiper-slide img").css({
                    "object-fit": "contain"
                });
                $(dom).children(".img_zoom_mask").find(".close").css({
                    "position": "absolute",
                    "top": 0,
                    "right": 0,
                    "padding": "5px  10px 15px 10px",
                    "display": "inline-block",
                    "z-index": 2,
                    "color": "#fff",
                    "font-size": "30px"
                });
            },

    }
});