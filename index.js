var _ = require('lodash')

module.exports = function() {
  var hasOwn = {}.hasOwnProperty;
  var styles = []

  if(arguments.length === 0) {
    styles.push(arguments[0])
  } else {
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i]
			if (!arg) continue

			var argType = typeof arg

			if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key] === true) {
						styles.push(key)
					} else if (arg[key] !== false) {
            styles.push(arg)
          }
				}
			}
    }
  }

  return styles
}
