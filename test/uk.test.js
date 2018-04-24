"use strict"

const assert = require("assert");
const CyrillicToTranslit = require("..");

describe("uk", () => {
  it("matches https://pasport.org.ua/vazhlivo/transliteratsiya", () => {
    const c2t = new CyrillicToTranslit({ preset: "uk" });

    assert.equal(c2t.transform("алушта"), "alushta");
    assert.equal(c2t.transform("андрій"), "andrii");

    assert.equal(c2t.transform("борщагівка"), "borshchahivka");
    assert.equal(c2t.transform("борисенко"), "borysenko");

    assert.equal(c2t.transform("вінниця"), "vinnytsia");
    assert.equal(c2t.transform("володимир"), "volodymyr");

    assert.equal(c2t.transform("гадяч"), "hadiach");
    assert.equal(c2t.transform("богдан"), "bohdan");
    assert.equal(c2t.transform("згурський"), "zghurskyi");

    assert.equal(c2t.transform("ґалаґан"), "galagan");
    assert.equal(c2t.transform("ґорґани"), "gorgany");

    assert.equal(c2t.transform("донецьк"), "donetsk");
    assert.equal(c2t.transform("дмитро"), "dmytro");

    assert.equal(c2t.transform("рівне"), "rivne");
    assert.equal(c2t.transform("олег"), "oleh");
    assert.equal(c2t.transform("есмань"), "esman");

    assert.equal(c2t.transform("єнакієве"), "yenakiieve");
    assert.equal(c2t.transform("гаєвич"), "haievych");
    assert.equal(c2t.transform("короп'є"), "koropie");

    assert.equal(c2t.transform("житомир"), "zhytomyr");
    assert.equal(c2t.transform("жанна"), "zhanna");
    assert.equal(c2t.transform("жежелів"), "zhezheliv");

    assert.equal(c2t.transform("закарпаття"), "zakarpattia");
    assert.equal(c2t.transform("казимирчук"), "kazymyrchuk");

    assert.equal(c2t.transform("іванків"), "ivankiv");
    assert.equal(c2t.transform("іващенко"), "ivashchenko");

    assert.equal(c2t.transform("їжакевич"), "yizhakevych");
    assert.equal(c2t.transform("кадиївка"), "kadyivka");
    assert.equal(c2t.transform("мар'їне"), "marine");

    assert.equal(c2t.transform("йосипівка"), "yosypivka");
    assert.equal(c2t.transform("стрий"), "stryi");
    assert.equal(c2t.transform("олексій"), "oleksii");

    assert.equal(c2t.transform("київ"), "kyiv");
    assert.equal(c2t.transform("коваленко"), "kovalenko");

    assert.equal(c2t.transform("лебедин"), "lebedyn");
    assert.equal(c2t.transform("леонід"), "leonid");

    assert.equal(c2t.transform("миколаїв"), "mykolaiv");
    assert.equal(c2t.transform("маринич"), "marynych");

    assert.equal(c2t.transform("ніжин"), "nizhyn");
    assert.equal(c2t.transform("наталія"), "nataliia");

    assert.equal(c2t.transform("одеса"), "odesa");
    assert.equal(c2t.transform("онищенко"), "onyshchenko");

    assert.equal(c2t.transform("полтава"), "poltava");
    assert.equal(c2t.transform("петро"), "petro");

    assert.equal(c2t.transform("решетилівка"), "reshetylivka");
    assert.equal(c2t.transform("рибчинський"), "rybchynskyi");

    assert.equal(c2t.transform("суми"), "sumy");
    assert.equal(c2t.transform("соломія"), "solomiia");

    assert.equal(c2t.transform("тернопіль"), "ternopil");
    assert.equal(c2t.transform("троць"), "trots");

    assert.equal(c2t.transform("ужгород"), "uzhhorod");
    assert.equal(c2t.transform("уляна"), "uliana");

    assert.equal(c2t.transform("фастів"), "fastiv");
    assert.equal(c2t.transform("філіпчук"), "filipchuk");

    assert.equal(c2t.transform("харків"), "kharkiv");
    assert.equal(c2t.transform("христина"), "khrystyna");

    assert.equal(c2t.transform("біла церква"), "bila tserkva");
    assert.equal(c2t.transform("стеценко"), "stetsenko");

    assert.equal(c2t.transform("чернівці"), "chernivtsi");
    assert.equal(c2t.transform("шевченко"), "shevchenko");

    assert.equal(c2t.transform("шостка"), "shostka");
    assert.equal(c2t.transform("кишеньки"), "kyshenky");

    assert.equal(c2t.transform("щербухи"), "shcherbukhy");
    assert.equal(c2t.transform("гоща"), "hoshcha");
    assert.equal(c2t.transform("гаращенко"), "harashchenko");

    assert.equal(c2t.transform("юрій"), "yurii");
    assert.equal(c2t.transform("корюківка"), "koriukivka");

    assert.equal(c2t.transform("яготин"), "yahotyn");
    assert.equal(c2t.transform("ярошенко"), "yaroshenko");
    assert.equal(c2t.transform("костянтин"), "kostiantyn");
    assert.equal(c2t.transform("знам'янка"), "znamianka");
    assert.equal(c2t.transform("феодосія"), "feodosiia");

    assert.equal(c2t.transform("згорани"), "zghorany");
    assert.equal(c2t.transform("розгон"), "rozghon");
  });

  it("handles U+0027 as apostrophe", () => {
    const c2t = new CyrillicToTranslit({ preset: "uk" });

    assert.equal(c2t.transform("короп'є"), "koropie");
    assert.equal(c2t.transform("мар'їне"), "marine");
    assert.equal(c2t.transform("знам'янка"), "znamianka");
  });

  it("handles U+2019 as apostrophe", () => {
    const c2t = new CyrillicToTranslit({ preset: "uk" });

    assert.equal(c2t.transform("короп’є"), "koropie");
    assert.equal(c2t.transform("мар’їне"), "marine");
    assert.equal(c2t.transform("знам’янка"), "znamianka");
  });

  it("handles U+02BC as apostrophe", () => {
    const c2t = new CyrillicToTranslit({ preset: "uk" });

    assert.equal(c2t.transform("коропʼє"), "koropie");
    assert.equal(c2t.transform("марʼїне"), "marine");
    assert.equal(c2t.transform("знамʼянка"), "znamianka");
  });
});