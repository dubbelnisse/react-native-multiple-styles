module.exports = function() {
  var hasOwn = {}.hasOwnProperty;
  var styles = []

  for (var key in arguments) {
    if (typeof arguments[key] === 'object') {
      var arg = arguments[key]
      for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key] === true) {
					styles.push(parseInt(key))
				}
			}
    } else {
      styles.push(arguments[key])
    }
  }

  return styles
}
