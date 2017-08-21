# cyrillic-to-translit-js

[![Greenkeeper badge](https://badges.greenkeeper.io/greybax/cyrillic-to-translit-js.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

[npm-url]: https://npmjs.org/package/cyrillic-to-translit-js
[npm-image]: https://img.shields.io/npm/v/cyrillic-to-translit-js.svg

[travis-url]: https://travis-ci.org/greybax/cyrillic-to-translit-js
[travis-image]: https://travis-ci.org/greybax/cyrillic-to-translit-js.svg

[coveralls-url]: https://coveralls.io/r/greybax/cyrillic-to-translit-js
[coveralls-image]: https://img.shields.io/coveralls/greybax/cyrillic-to-translit-js.svg

[depstat-url]: https://david-dm.org/greybax/cyrillic-to-translit-js
[depstat-image]: https://david-dm.org/greybax/cyrillic-to-translit-js.svg

[depstat-dev-url]: https://david-dm.org/greybax/cyrillic-to-translit-js
[depstat-dev-image]: https://david-dm.org/greybax/cyrillic-to-translit-js/dev-status.svg


Simple javascript function for converting Cyrillic symbols to Translit

## Simple to use
cyrillicToTranslit().transform(str, spaceReplacement);
* str - string which should be transformed
* spaceReplacement - symbol for space replacement

```javascript
    cyrillicToTranslit().transform('привет мир!');
    
    >privet mir!
```

```javascript
    cyrillicToTranslit().transform('привет мир!', "_")
    
    >privet_mir!
```

## Credits

* [kunashir](https://github.com/kunashir)
* [vasergen](https://github.com/vasergen)
* [nitruxa](https://github.com/nitruxa)

## License

MIT © Aleksandr Filatov [alfilatov.com](http://alfilatov.com)