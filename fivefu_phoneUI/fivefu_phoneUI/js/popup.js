define(["jquery"], function($) {
    return {
        // 弹框的封装
     dialogue: function(obj) {
         var popHtml = '<div class="popup hide" id="popup_1"><div class="popup_header"><h3>标题</h3></div><div class="popup_body"><p class="popup_info">说明当前状态、提示用户解决方案，最好不要超过两行。</p></div><div class="popup_btns"><a class="popup_btn cancel">取消</a><a class="popup_btn confirm">确认</a></div></div><div class="mask"></div>';
         $("body").append(popHtml);
         var dom = obj.dom,
             cancel = obj.cancel,
             confirm = obj.confirm,
             options = obj.options, //自定义选项
             //默认设置
             defaultSetting = {
                 title: "我是标题", //弹框标题
                 content: "我是自定义的内容", //弹框内容
                 cancelT: "取消",
                 confirmT: "确定",
                 titleHide: true,
                 btnNum: 2
             };
         jQuery.extend(defaultSetting, options);
         $(dom).show().addClass("fadeInup").removeClass("fadeOutup");
         $(".mask").fadeIn(200);
         var winW = $(window).width(),
             winH = $(window).height(),
             w = $(dom).outerWidth(),
             h = $(dom).outerHeight();
         $(dom).css({
             "position": "fixed",
             "left": (winW - w) / 2 + "px",
             "top": (winH - h) / 2 + "px",
             "z-index": 1,
             "max-height": winH - winH * .2 + "px",
             "overflow-y": "auto"
         });
         $("body").css({
             "height": $(window).height() + "px",
             "overflow-y": "hidden"
         });
         // cancel
         $(dom).find(".cancel").unbind("click").on("click", function() {
             cancel(dom);
         });
         // confirm
         $(dom).find(".confirm").unbind("click").on("click", function() {
             confirm(dom);
         });
         // 默认设置
         $(dom).find(".popup_info").text(defaultSetting.content); //内容
         $(dom).find("h3").text(defaultSetting.title); //标题
         $(dom).find(".cancel").text(defaultSetting.cancelT); //取消按钮文字
         $(dom).find(".confirm").text(defaultSetting.confirmT); //确定按钮文字
         if (defaultSetting.titleHide == true) {
             $(dom).find(".popup_header").hide();
         }
         if (defaultSetting.btnNum < 2) {
             $(dom).find(".cancel").hide();
         }
     },
     dialogueHide: function(dom) {
         $(dom).fadeOut(200).addClass("fadeOutup").removeClass("fadeInup").remove();
         $(".mask").fadeOut(200).remove();
         $("body").css({
             "height": $(window).height() + "px",
             "overflow-y": "auto"
         });
     },
     // toast封装
     toast: function(obj) {
         var dom = obj.dom,
             dom1 = obj.dom1,
             dom2 = obj.dom2,
             dom3 = obj.dom3,
             dom4 = obj.dom4,
             time = obj.time,
             options = obj.options,
             defaultSetting = {
                 txt: "加载中",
                 type: "1",
                 selfClose: true,
                 time: 300
             };
         jQuery.extend(defaultSetting, options);
         var dom1Html = '<div class="toast" id="toast_1"><div class="loading-indicator white"><div class="loading-item"></div><div class="loading-item"></div><div class="loading-item"></div></div><p class="txt">加载中</p></div>';
         var dom2Html = '<div class="toast" id="toast_2"><div class="loading-gray"></div><p class="txt">加载中</p></div>';
         var dom3Html = '<div class="toast" id="toast_3"><div class="icon_tick"></div><p class="txt">已完成</p></div>';

         if (defaultSetting.type == 1) {
             if ($(".toast").length == 0) {
                 $("body").append(dom1Html);
             }
         } else if (defaultSetting.type == 2) {
             if ($(".toast").length == 0) {
                 $("body").append(dom2Html);
             }
         } else if (defaultSetting.type == 3) {
             if ($(".toast").length == 0) {
                 $("body").append(dom3Html);
             }
         }
         $(dom).fadeIn("fast").addClass('animated zoomIn');
         this.domCenter(".toast");
         // 默认设置
         $(dom).find(".txt").text(defaultSetting.txt);
         if (defaultSetting.selfClose == false) {
             setTimeout(function() {
                 $(dom).fadeOut(100).remove();
             }, defaultSetting.time);
         }
     },
     toastHide: function(dom) {
         $(dom).fadeOut(100).remove();
     },
     domCenter: function(dom) {
         var winW = $(window).width(),
             winH = $(window).height(),
             w = $(dom).outerWidth(),
             h = $(dom).outerHeight();
         $(dom).css({
             "position": "fixed",
             "left": (winW - w) / 2 + "px",
             "top": (winH - h) / 2 + "px"
         });
     },
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

    }
})