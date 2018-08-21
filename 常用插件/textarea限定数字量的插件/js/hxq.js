
var wf_camera = function(params) {
        this.params = params;
        this.drawImg();
        this.init();
    };
    wf_camera.prototype = {
        init: function() {
            var len, file, src, url, me = this,
                tmpl = '<li class="photo_box nowPic" style="background-image:url(#url#)"></li>';
            $("#uploaderInput").on("change", function(e) {
                //清空模态框里图片，防止第二次点击显示第一次点击后的图
                $(".galleryImg").attr("style", '');
                //获得当前拍的照片的个数
                len = $(this).parent().prev().children(".photo_box").length;
                $("#nowNum").html(len + 1);
                src, url = window.URL || window.webkitURL || window.mozURL,
                    files = e.target.files;
                //如果达到要求图片最大值，那就移除+号的按钮
                len === me.params.max - 1 && $(this).parent(".add_box").hide();
                file = files[0];
                if (url) {
                    src = url.createObjectURL(file);
                } else {
                    src = e.target.result;
                };
                //设置定时器，延迟加载
                // setTimeout(function() {
                //     $(".galleryImg").attr("style", 'background-image:url(' + src + ')');
                // }, 1000);
                //先追加到页面里
                $(".files").append($(tmpl.replace('#url#', src)));
                // $(".gallery").fadeIn(100);
            });
            //点击确认，追加照片
            $(document).on("click", ".yes", function() {
                $(".gallery").fadeOut(100);
            });
            //删除确认去除照片
            $(document).on("click", ".wf_dialog_2 .right", function() {
                $(".gallery").fadeOut(100);
                //让当前class为nowPic的元素移除
                $(".files .nowPic").remove();
                len = $(".files .photo_box").length;
                //如果没有达到要求图片最大值，那就添加+号的按钮
                len < me.params.max && $(".add_box").show();
                //更新当前图片个数
                $("#nowNum").html(len);
            });
            //追加完的照片的点击触发模态框事件
            $(document).on("click", ".files .photo_box", function() {
                //转换nowPic
                $(this).addClass("nowPic").siblings().removeClass("nowPic");
                $(".gallery").fadeIn(100);
                //或者点击图片的链接，让对应的图出现在模态框中
                var ustyle = $(this).attr("style");
                $(".galleryImg").attr("style", ustyle);
            });
        },
        drawImg: function() {
            var uhtml = '<div class="wf_camera border">' +
                '<div class="title flexbox">' +
                '<p>图片上传</p>' +
                '<p><span id="nowNum">0</span>/' + this.params.max + '</p>' +
                '</div>' +
                '<div class="imgWrap">' +
                '<ul class="files">' +
                '</ul>' +
                '<div class="add_box">' +
                '<input id="uploaderInput" class="addphoto_ipt" type="file" accept="image/*" capture="camera" multiple />' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="gallery">' +
                '<span class="galleryImg"></span>' +
                '<div class="mask_btn no">' +
                '<i class="iconfont">&#xed44;</i>' +
                '</div>' +
                '<div class="mask_btn yes">' +
                '<i class="iconfont">&#xed41;</i>' +
                '</div>' +
                '</div>';

            $(this.params.elem).prepend(uhtml);
        },
    };
    window["wf_camera"] = wf_camera;
    var wf_dialog_2 = function(params) {
        this.params = params;
        this.drawImg();
        this.init();
    };
    wf_dialog_2.prototype = {
        init: function() {
            $(document).on("click", this.params.elem, function() {
                $(".wf_dialog_2").show();
            });
            $(document).on("click", ".wf_dialog_2 .menu a", function() {
                $(this).parents(".wf_dialog_2").hide();
            });
        },
        drawImg: function() {
            var uhtml = '<div class="wf_dialog_2">' +
                '<div class="min_box">' +
                '<p>' + this.params.tit + '</p>' +
                '<div class="txt">' + this.params.wrd + '</div>' +
                '<div class="menu flexbox">' +
                '<a class="left flexbox_item">取消</a>' +
                '<a class="right flexbox_item">确定</a>' +
                '</div>';
            $("body").prepend(uhtml);
        }
    };
    window["wf_dialog_2"] = wf_dialog_2;