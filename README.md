# cyrillic-to-translit-js
 
[![Codeship Status for greybax/cyrillic-to-translit-js](https://app.codeship.com/projects/9666e180-f1e1-0136-edda-0a4322211bb2/status?branch=master)](https://app.codeship.com/projects/320439)

[![install size](https://packagephobia.com/badge?p=cyrillic-to-translit-js@3.2.1)](https://packagephobia.com/result?p=cyrillic-to-translit-js@3.2.1)
[![NPM version][npm-image]][npm-url]
[![NPM Downloads/month][npm-downloads-image]][npm-downloads-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]

[npm-url]: https://npmjs.org/package/cyrillic-to-translit-js
[npm-image]: https://img.shields.io/npm/v/cyrillic-to-translit-js.svg

[npm-downloads-url]: https://npmjs.org/package/cyrillic-to-translit-js
[npm-downloads-image]: https://img.shields.io/npm/dm/cyrillic-to-translit-js.svg

[travis-url]: https://travis-ci.org/greybax/cyrillic-to-translit-js
[travis-image]: https://travis-ci.org/greybax/cyrillic-to-translit-js.svg

[coveralls-url]: https://coveralls.io/r/greybax/cyrillic-to-translit-js
[coveralls-image]: https://img.shields.io/coveralls/greybax/cyrillic-to-translit-js.svg

<p align="center">
 <a href="https://greybax.github.com/cyrillic-to-translit-js">
   <img src="images/translit-256w.png">
 </a>
</p>

Ultra-lightweight JavaScript library for converting Cyrillic symbols to Translit and vice versa

[Demo page](https://greybax.github.io/cyrillic-to-translit-js)

## Install

`npm install --save cyrillic-to-translit-js`

## Simple to use

```ts
import CyrillicToTranslit from 'cyrillic-to-translit-js';

const cyrillicToTranslit = new CyrillicToTranslit();

cyrillicToTranslit.transform('Какая-то строка', '_').toLowerCase();
```

### Constructor

* `{ preset: 'ru' }` or _**empty**_ - transliteration preset for Russian language.
* `{ preset: 'uk' }` - transliteration preset for Ukranian language (see [PR #27](https://github.com/greybax/cyrillic-to-translit-js/pull/27)).
  * [Rules](https://pasport.org.ua/vazhlivo/transliteratsiya)
  * [Apostrophe](https://uk.wikipedia.org/wiki/%D0%90%D0%BF%D0%BE%D1%81%D1%82%D1%80%D0%BE%D1%84#.D0.A2.D0.B5.D1.85.D0.BD.D1.96.D1.87.D0.BD.D1.96_.D0.BE.D1.81.D0.BE.D0.B1.D0.BB.D0.B8.D0.B2.D0.BE.D1.81.D1.82.D1.96)
* `{ preset: 'mn' }` - transliteration preset for Mongolian language (see [PR #142](https://github.com/greybax/cyrillic-to-translit-js/pull/142)).

### transform()

> Convert Cyrillic symbols to Translit

`cyrillicToTranslit().transform(input, spaceReplacement);`

* `input` - string which should be transformed
* `spaceReplacement` - symbol for space replacement

### reverse()

> Convert Translit symbols to Cyrillic

`cyrillicToTranslit().reverse(input, spaceReplacement);`

* `input` - string which should be transformed
* `spaceReplacement` - symbol for space replacement

## Examples

* **transform()**
```js
  cyrillicToTranslit().transform('Привет Мир!');

  >Privet Mir!
```

```js
  cyrillicToTranslit().transform('привет мир!', "_")

  >privet_mir!
```

```js
  cyrillicToTranslit({ preset: "uk" }).transform('привіт світе!', "_")

  >pryvit_svite!
```

* **reverse()**
```js
  cyrillicToTranslit().reverse("ulitsa Soyuza Pechatnikov")

 >улица Союза Печатников
```

```js
  cyrillicToTranslit({ preset: "uk" }).reverse("Rozghon Uliana i Harashchenko Khrystyna")

  >Розгон Уляна і Гаращенко Христина
```

## Typescript

Typescript supports starting form v2.0.0. See definitions [here](./CyrillicToTranslit.d.ts)

## Credits

* [kunashir](https://github.com/kunashir)
* [Vasyl Gendzeliuk](https://github.com/vasergen)
* [Nikita Svesnikov](https://github.com/nitruxa)
* [Igor Deryabin](https://github.com/ideryabin)
* [makepost](https://github.com/makepost)
* [Aleksey Kislov](https://github.com/evenfrost)
* [Igor Kamyshev](https://github.com/igorkamyshev)
* [Sasha Kirillov](https://github.com/sasha-kir)
* [Booglejr](https://github.com/Rootyjr)
* [Пүрэвжаргал](https://github.com/TsPuujee)

## Why I've done this plugin?

https://alfilatov.com/posts/cyrillic-to-translit-js-library-for-converting-cyrillic-symbols-to-translit-and-vice-versa/

## License

MIT © Aleksandr Filatov [alfilatov.com](http://alfilatov.com)
