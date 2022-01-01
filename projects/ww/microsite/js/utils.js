//bind.js
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var aArgs = Array.prototype.slice.call(arguments, 1), 
        fToBind = this, 
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
                                 ? this
                                 : oThis,
                               aArgs.concat(Array.prototype.slice.call(arguments)));
        };
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
  };
}

//debouncer - prevent multiple quick repeated calls (eg onresize)
var debounce = function (func, threshold, execAsap) {
	var timeout;
	return function debounced(){
		var obj = this, args = arguments;
		function delayed () {
			if (!execAsap) func.apply(obj, args);
			timeout = null;
		};
	if (timeout) clearTimeout(timeout);
	else if (execAsap) func.apply(obj, args);
	timeout = setTimeout(delayed, threshold || 100); 
  };
};

//equalize heights by returning tallest height
function equalHeight(group) {
    var tallest = 0;
    group.each(function() {
        var thisHeight = $(this).height();
        if(thisHeight > tallest) tallest = thisHeight;
    });
    return tallest;
};