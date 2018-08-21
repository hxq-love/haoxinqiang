;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-11" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M921.745408 890.734592 628.006912 596.996096c100.204544-116.133888 95.511552-292.040704-14.687232-402.189312-55.927808-55.9104-130.2784-86.69696-209.378304-86.69696-79.099904 0-153.450496 30.78656-209.378304 86.69696-115.429376 115.377152-115.429376 303.172608 0 418.54976 55.927808 55.9104 130.279424 86.69696 209.378304 86.69696 72.699904 0 141.193216-26.302464 195.244032-73.95328l293.597184 293.597184L921.745408 890.734592zM403.958784 660.615168c-68.557824-0.016384-132.998144-26.699776-181.465088-75.132928-100.038656-100.005888-100.038656-262.759424 0-362.765312 48.484352-48.45056 112.907264-75.132928 181.466112-75.132928 68.557824 0 132.98176 26.682368 181.465088 75.132928 100.056064 100.005888 100.056064 262.7584 0 362.765312C536.940544 633.931776 472.517632 660.615168 403.958784 660.615168z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)