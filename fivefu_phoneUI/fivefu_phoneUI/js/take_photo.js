define(["jquery"], function($) {
    return {
        takePhoto: function(dom, limitNum) {
            $(dom).each(function() {
                // multiple
                var inhtml = '<span class="nowNum">0/' + limitNum + '</span><ul class="uploaderFiles"></ul><div class="add_box"><input class="addphoto_ipt uploaderInput" type="file" accept="image/*" ></div><div class="gallery"><span class="gallery_img"></span><span class="del">删除照片</span><span class="cancel">返回</span></div>';
                // 判断手机系统
                var ua = navigator.userAgent.toLowerCase();
                $(this).append(inhtml);
                if (/iphone|ipad|ipod/.test(ua)) {} else if (/android/.test(ua)) {
                    $(this).find(".addphoto_ipt").attr("capture", "camera");
                }

                var tmpl = '<li class="photo_box" style="background-image:url(#url#)"></li>',
                    $gallery = $(this).find(".gallery"),
                    $galleryImg = $(this).find(".gallery").find(".gallery_img"),
                    $del = $(this).find(".gallery").find(".del"),
                    $uploaderInput = $(this).find(".add_box").find(".uploaderInput"),
                    $uploaderFiles = $(this).find(".uploaderFiles"),
                    $add_box = $(this).find(".add_box"),
                    $nowNum = $(this).find(".nowNum");

                var str = "";
                $uploaderInput.on("change", function(e) {
                    //获得当前拍的照片的个数
                    len = $(this).parent().prev().children(".photo_box").length;
                    current_len = len + 1;
                    $(this).parent(".add_box").prev(".uploaderFiles").prev(".nowNum").html(current_len + "/" + limitNum);

                    var src, url = window.URL || window.webkitURL || window.mozURL,
                        files = e.target.files;
                    // 存文件路径的容器
                    filesA = e.target.files;
                    for (var i = 0, len = files.length; i < len; ++i) {
                        var file = files[i];
                        if (url) {
                            src = url.createObjectURL(file);

                        } else {
                            src = e.target.result;
                        }
                        $uploaderFiles.append($(tmpl.replace('#url#', src)));

                        $uploaderFiles.on("click", "li", function() {
                            var liDex = $(this).index();
                            var $that = $(this);
                            var liLen = $uploaderFiles.find("li").length;
                            $galleryImg.attr("style", this.getAttribute("style"));
                            $gallery.fadeIn(100);
                            // 删除
                            $del.on("click", function() {
                                $that.remove();
                                if (liLen < limitNum + 1) {
                                    $add_box.show();
                                }
                                len = (liLen - 1) + "/" + limitNum;
                                $nowNum.html(len);
                            });
                        });

                    }
                    var liLen = $uploaderFiles.find("li").length;
                    if (liLen >= limitNum) {
                        $add_box.hide();
                    }
                });

                $uploaderFiles.on("click", "li", function() {
                    var liDex = $(this).index();
                    $cur_click_li = $(this);
                    liLen = $uploaderFiles.find("li").length;
                    $galleryImg.attr("style", this.getAttribute("style"));
                    $gallery.fadeIn(100);
                    // $(this).addClass("nowPic");

                });
                // 删除
                $del.on("click", function() {
                    $cur_click_li.remove();
                    if (liLen < limitNum + 1) {
                        $add_box.show();
                    }
                });

                $gallery.on("click", function() {
                    $gallery.fadeOut(100);
                });

            });
            // 遍历结束
            // 样式定义
            $(".nowNum").css({
                "position": "absolute",
                "right": "10px",
                "top": "10px",
                "color": "#888"

            });
        }
        // return结束
    }

})