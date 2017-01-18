/*! https://davidwalsh.name/essential-javascript-functions */
export const getAbsoluteUrl = (function(){
	var a;

	return function(url) {
		if(!a) a = document.createElement('a');
		a.href = url;

		return a.href;
	};
})();

/*! https://davidwalsh.name/essential-javascript-functions */
export function once(context) {
	let result;

	return function() {
		if (fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}

/*! https://davidwalsh.name/essential-javascript-functions */
export function poll(fn, callback, errback, timeout, interval) {
  var endTime = Number(new Date()) + (timeout || 2000);
  interval = interval || 100;

  (function p() {
    if(fn()) {
			callback();
    } else if (Number(new Date()) < endTime) {
			setTimeout(p, interval);
    } else {
			errback(new Error('timed out for ' + fn + ': ' + arguments));
    }
  })();
}

/*! http://stackoverflow.com/questions/24004791/can-someone-explain-the-debounce-function-in-javascript */
export function debounce(func, wait, immediate) {
  let timeout;

  return function() {
    const context = this;
    const args = arguments;
    const call_now = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(function(){
			timeout = null;

      if (!immediate) {
      	func.apply(context, args);
      }
    }, wait);

    if (call_now) {
			func.apply(context, args);
		}
   };
}
