require.config({
    paths: {
        "jquery": "jquery.min",
        "photo": "take_photo",
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
// require(["jquery", "photo", "swiper", "img_zoom", "picker", "popup", "tab", "fastclick"], function(jq, photo, Swiper, Zoom, Picker, p, tab, F) {});
// require 结束