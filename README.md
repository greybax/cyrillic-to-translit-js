# CyrillicToTranslitJS

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

[npm-url]: https://npmjs.org/package/cyrillic-to-translit-js
[npm-image]: https://img.shields.io/npm/v/cyrillic-to-translit-js.svg

[travis-url]: https://travis-ci.org/greybax/CyrillicToTranslitJS
[travis-image]: https://travis-ci.org/greybax/CyrillicToTranslitJS.svg

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