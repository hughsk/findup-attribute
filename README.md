# findup-attribute
![](http://img.shields.io/badge/stability-stable-orange.svg?style=flat)
![](http://img.shields.io/npm/v/findup-attribute.svg?style=flat)
![](http://img.shields.io/npm/dm/findup-attribute.svg?style=flat)
![](http://img.shields.io/npm/l/findup-attribute.svg?style=flat)

Given a child attribute, `findup-attribute` will traverse its way up the DOM
until it finds and returns an element with the expected attribute.

## Usage

[![NPM](https://nodei.co/npm/findup-attribute.png)](https://nodei.co/npm/findup-attribute/)

### `findup(child, nodeAttr)`

Find the closest parent `attribute` with attribute `nodeAttr`.

For example, the following will pick up clicks on elements using a
`on-click` attribute with only a single event listener:

``` javascript
var findupAttribute = require('findup-attribute')

document.body.addEventListener('click', function(e) {
  var li = findupAttribute(e.srcElement, 'on-click')
}, false)
```

``` html
<body>
  <ul>
    <li on-click="thing"><a href="#">click me</a></li>
    <li on-click="thing"><a href="#">click me</a></li>
    <li on-click="thing"><a href="#">click me</a></li>
    <li on-click="thing"><a href="#">click me</a></li>
  </ul>
</body>
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/findup-attribute/blob/master/LICENSE.md) for details.
