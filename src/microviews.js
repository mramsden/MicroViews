var MicroViews = function($) {
  console.log("MICROVIEWS");

  var MICROVIEWS_BASE_URL = "http://localhost:4567";
  var JQUERY_SRC = "http://code.jquery.com/jquery-1.5.min.js";	

  var
    // This will become the MicroViews object.
    _mv = {},
    // Storage for user options.
    opts;

  function isJQueryAvailable() {
    return !(typeof($) === 'undefined');
  }

  function fetchMicroViewsDependencies() {
    loadJavascript(MICROVIEWS_BASE_URL+"/js/jquery.qtip.pack.js");
    loadCSS(MICROVIEWS_BASE_URL+"/css/jquery.qtip.min.css");
  }

  function loadJavascript(src, loadHandler, errorHandler) {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", src);
    if (script.addEventListener) {
      script.addEventListener("load", loadHandler, false);
      script.addEventListener("error", errorHandler, false);
    } else {
      script.attachEvent("onload", loadHandler);
      script.attachEvent("onerror", errorHandler);
    }
    
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(script);
  }
  
  function loadCSS(src, loadHandler, errorHandler) {
    var link = document.createElement("link");
    link.setAttribute("type", "text/css");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", src);
    if (link.addEventListener) {
      link.addEventListener("load", loadHandler, false);
      link.addEventListener("error", errorHandler, false);
    } else {
      link.attachEvent("onload", loadHandler);
      link.attachEvent("onerror", errorHandler);
    }
    
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
  }

  /**
   * Initialises the MicroViews library.
   */
  _mv.init = function(userOpts) {
    opts = userOpts;
    if (!isJQueryAvailable()) {
      // We will need to load jQuery before continuing.
      loadJavascript(JQUERY_SRC, fetchMicroViewsDependencies());
    } else {
      fetchMicroViewsDependencies();
    }
  }

  _mv.parse = function() {
	
  }

  return _mv;
};
