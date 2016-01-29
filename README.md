CyrillicToTranslitJS
====================

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