# react-native-multiple-styles

A simple utility for handeling mutiple styles (classes) in react-native

Install with npm.

```sh
npm install react-native-multiple-styles --save
```

Import it to your project
```js
import multipleStyles from 'react-native-multiple-styles'
```

## Usage
```js
var styles = StyleSheet.create({
  icon: {
    backgroundColor: 'black'
  },
  iconRed: {
    backgroundColor: 'red'
  }
});

multipleStyles(styles.icon, styles.iconRed) // => [1, 2]
multipleStyles(styles.icon, { [styles.iconRed]: true }) // => [1, 2]
multipleStyles(styles.icon, { [styles.iconRed]: false }) // => [1]
```

It returns an array of the IDs representing the style objects. More info about that [here](https://facebook.github.io/react-native/docs/stylesheet.html).

## Tests

```sh
npm test
```
