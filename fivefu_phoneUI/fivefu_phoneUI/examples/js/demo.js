require.config({
    baseUrl:"../js/",
    paths: {
        "jquery": "jquery.min", //jq
        "photo": "take_photo", //拍照
        "swiper": "swiper.min",
        "img_zoom": "img_zoom",
        "picker": "picker.min",
        "popup": "popup",
        "tab": "tab",
        "fastclick": "fastclick.min"
    },
    shim: {
        "swiper": {
            deps: ["jquery"],
            exports: "Swiper"
        },
        "picker": {
            deps: ["jquery"],
            exports: "Picker"
        },
        "fastclick": {
            deps: ["jquery"],
            exports: "f"
        }
    }
});


require(["jquery", "photo", "swiper", "img_zoom", "picker", "popup", "tab","fastclick"], function(jq, photo, Swiper, Zoom, Picker, p, tab,F) {
    // fastclick的调用
    F.attach(document.body);
    // 拍照的调用
    photo.takePhoto("#photo_1", 3);
    // 图片放大预览
    Zoom.imgZoom(".img_box");
    // 图片轮播
    var mySwiper = new Swiper('.swiper_box .swiper-container', {
        autoplay: 5000, //可选选项，自动滑动
        pagination: '.swiper-pagination',
        loop: true
    });
    $(".swiper_box").css({
        "position": "relative",
        "z-index": "0"
    });
    $(".swiper_box .swiper-container").css({
        "background": "pink"
    });
    // 幻灯片高度自适应 手机上默认高度这里设置为200，以200为基准，适应不同屏幕大小，防止图片变形
    var slideW = $(".swiper_box .swiper-container").outerWidth();
    $(".swiper_box .swiper-container").css("height", slideW * 200 / 375 + "px");

    // picker的调用
    function picker_1(dom) {
        var data1 = [{
            text: '垃圾收集器不规范',
            value: 1
        }, {
            text: '垃圾满溢',
            value: 2
        }, {
            text: '分类正确率',
            value: 3
        }];
        var picker = new Picker({
            data: [data1],
            selectedIndex: [2],
            title: '上报分类'
        });
        picker.on('picker.select', function(selectedVal, selectedIndex) {
            $(dom).text(data1[selectedIndex[0]].text);
        });
        $(dom).bind("click select", function() {
            picker.show();
        });
        // console.log(picker.selectedIndex + "--------")
    }

    function picker_2(dom) {
        var data1 = [{
            text: '上城区',
            value: 1
        }, {
            text: '下城区',
            value: 2
        }, {
            text: '江干区',
            value: 3
        }, {
            text: '拱墅区',
            value: 4
        }, {
            text: '西湖区',
            value: 5
        }, {
            text: '滨江区',
            value: 6
        }, {
            text: '萧山区',
            value: 7
        }, {
            text: '萧山区',
            value: 8
        }, {
            text: '余杭区',
            value: 9
        }];

        var data2 = [{
                text: '北山街道',
                value: 1
            },
            {
                text: '西溪街道',
                value: 2
            },
            {
                text: '翠苑街道',
                value: 3
            },
            {
                text: '古荡街道',
                value: 4
            },
            {
                text: '西湖街道',
                value: 5
            },
            {
                text: '留下街道',
                value: 6
            },
            {
                text: '转塘街道',
                value: 7
            },
            {
                text: '蒋村街道',
                value: 8
            }
        ];
        var picker = new Picker({
            data: [data1, data2],
            selectedIndex: [4, 0],
            title: '请选择 行政区域、小区'
        });

        picker.on('picker.select', function(selectedVal, selectedIndex) {
            $(dom).text(data1[selectedIndex[0]].text + ' ' + data2[selectedIndex[1]].text)
        })

        $(dom).bind("click", function() {
            picker.show();
        })
    }

    function picker_3(dom) {
        var data1 = [{
            text: '小美',
            value: 1
        }, {
            text: '猪猪',
            value: 2
        }];

        var data2 = [{
                text: '张三',
                value: 1
            },
            {
                text: '李四',
                value: 2
            },
            {
                text: '王五',
                value: 3
            },
            {
                text: '赵六',
                value: 4
            },
            {
                text: '吴七',
                value: 5
            },
            {
                text: '陈八',
                value: 6
            },
            {
                text: '杜九',
                value: 7
            },
            {
                text: '黄十',
                value: 8
            },
            {
                text: '呵呵',
                value: 9
            },
            {
                text: '哈哈',
                value: 10
            },
            {
                text: '嘿嘿',
                value: 11
            },
            {
                text: '啦啦',
                value: 12
            }
        ];

        var data3 = [{
                text: '开心',
                value: 1
            }, {
                text: '生气',
                value: 2
            },
            {
                text: '搞笑',
                value: 3
            }, {
                text: '难过',
                value: 4
            }
        ];

        var picker = new Picker({
            data: [data1, data2, data3],
            selectedIndex: [0, 0, 0],
            title: '我们都是小学生'
        });

        picker.on('picker.select', function(selectedVal, selectedIndex) {
            $(dom).text(data1[selectedIndex[0]].text + ' ' + data2[selectedIndex[1]].text + ' ' + data3[selectedIndex[2]].text)
        })

        $(dom).bind("click", function() {
            picker.show();
        })

    }
    picker_1("#name1");
    picker_2("#name2");
    picker_3("#name3");


    // 弹框的调用
    $("#btn_1").bind("click", function() {
        p.dialogue({
            dom: "#popup_1",
            cancel: function(dom) {
                alert("取消1");
                p.dialogueHide(dom);
            },
            confirm: function(dom) {
                alert("确定1");
                p.dialogueHide(dom);
            },
            options: {
                content: "说明当前状态、提示用户解决方案，最好不要超过两行。", //弹框内容
                cancelT: "取消1", //取消 文字设置
                confirmT: "确定1", //确认 文字设置
                titleHide: true, //标题隐藏
            }
        });
    });
    $("#btn_2").bind("click", function() {
        p.dialogue({
            dom: "#popup_1",
            cancel: function(dom) {
                alert("取消2");
                p.dialogueHide(dom);
            },
            confirm: function(dom) {
                alert("确定2");
                p.dialogueHide(dom);
            },
            options: {
                title: "有标题的弹框", //弹框标题
                content: "说明当前状态、提示用户解决方案，最好不要超过两行。", //弹框内容
                cancelT: "取消2", //取消 文字设置
                confirmT: "确定2", //确认 文字设置
                titleHide: false, //标题隐藏
            }
        });
    });
    $("#btn_3").bind("click", function() {
        p.dialogue({
            dom: "#popup_1",
            confirm: function(dom) {
                alert("确定3的执行");
                p.dialogueHide(dom);
            },
            options: {
                title: "有标题、不做操作", //弹框标题
                content: "说明当前状态、提示用户解决方案，最好不要超过两行。", //弹框内容
                confirmT: "确定3", //确认 文字设置
                titleHide: false, //标题隐藏
                btnNum: 1 //只显示一个按钮
            }
        });
    });
    $("#btn_4").bind("click", function() {
        p.dialogue({
            dom: "#popup_1",
            confirm: function(dom) {
                alert("确定4的执行");
                p.dialogueHide(dom);
            },
            options: {
                content: "说明当前状态、提示用户解决方案，最好不要超过两行。", //弹框内容
                confirmT: "确定4", //确认 文字设置
                titleHide: true, //标题隐藏
                btnNum: 1 //只显示一个按钮
            }
        });
    });
    // toast的调用
    $("#btn_5").bind("click", function() {
        p.toast({
            dom: "#toast_1",
            options: {
                txt: "加载中1",
                type: 1,
                selfClose: true
            }
        });
    });
    $("#btn_5a").bind("click", function() {
        p.toastHide("#toast_1");
    });
    $("#btn_6").bind("click", function() {
        p.toast({
            dom: "#toast_2",
            options: {
                txt: "加载中2",
                type: 2,
                selfClose: true
            }
        });
    });
    $("#btn_6a").bind("click", function() {
        p.toastHide("#toast_2");
    });
    $("#btn_7").bind("click", function() {
        p.toast({
            dom: "#toast_3",
            options: {
                txt: "已完成",
                type: 3,
                selfClose: true
            }
        });
    });
    $("#btn_7a").bind("click", function() {
        p.toastHide("#toast_3");
    });
    // 自动关闭
    $("#btn_8").bind("click", function() {
        p.toast({
            dom: "#toast_1",
            options: {
                txt: "已完成",
                type: 1,
                selfClose: false,
                time: 2000
            }
        });
    });
    // tab的调用
    tab.t();
});
// require 结束