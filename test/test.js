'use strict';

var cyrillicToTranslit = require('..');
var assert = require('assert');
var should = require('should');

describe('cyrillicToTranslit', () => {
  it('cyrillicToTranslit should return an object with 1 public method transform', () => {
    var c2t = cyrillicToTranslit();
    c2t.should.be.a.Object();
    c2t.should.have.property('transform');
    c2t.transform.should.be.a.Function();
  });
  describe('transform', () => {
    it('should return empty string when parameters are empty', () => {
      assert.equal("", cyrillicToTranslit().transform());
      assert.equal("", cyrillicToTranslit().transform(null));
    });
    it('should return translit when cyrillic string not nomalized', () => {
      assert.equal("russkii", cyrillicToTranslit().transform("русский".normalize('NFD')));
    });
    it('should return translit when first parameter cyrillic', () => {
      assert.equal("privet mir!", cyrillicToTranslit().transform("привет мир!"));
    });
    it('should return translit when first parameter cyrillic with using ыьъ', () => {
      assert.equal("uchebnii_material_1!", cyrillicToTranslit().transform("учебный материал 1ьъ!", '_'));
    });
    it('should return translit when first parameter cyrillic whith using ъ', () => {
      assert.equal("novii_podezd", cyrillicToTranslit().transform("новый подъезд", '_'));
    });
    it('should return translit when first parameter cyrillic whith using ь', () => {
      assert.equal("plohaya_svyaz", cyrillicToTranslit().transform("плохая связь", '_'));
    });
    it('should return translit with replaced " " on "_"', () => {
      assert.equal("privet_mir!", cyrillicToTranslit().transform("привет мир!", "_"));
    });
    it('should return translit if translit passed', () => {
      assert.equal("privet mir!", cyrillicToTranslit().transform("privet mir!"));
    });
  });
});