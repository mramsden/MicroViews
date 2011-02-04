var MicroViews = function($) {
  console.log("MICROVIEWS");

  var JQUERY_SRC = "http://code.jquery.com/jquery-1.5.min.js";	

  var
    // This will become the MicroViews object.
    _mv = {},
    // Storage for user options.
    opts;

  function isJQueryAvailable() {
    return !(typeof($) === 'undefined');
  }

  /**
   * Initialises the MicroViews library.
   */
  _mv.init = function(userOpts) {
    opts = userOpts;
    if (!isJQueryAvailable()) {
      // We will need to load jQuery before continuing.
      var script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", JQUERY_SRC);
      if (script.addEventListener) {
        // DOM compliant
        script.addEventListener("load", _mv.parse, false);
      } else {
        // A pissy comment about IE 8 and earlier
        script.attachEvent("onload", _mv.parse);
      }
      var head = document.getElementsByTagName("head")[0];
      head.appendChild(script);
    } else {
      // Great we have jQuery, so lets get on with parsing straight
      // away.
      _mv.parse();
    }
  }

  _mv.parse = function() {
	
  }

  return _mv;
};
