'use strict';

module.exports = function cyrillicToTranslit(config) {
  const _preset = config ? config.preset : "ru";

  const _firstLetterAssociations = {
    "а": "a",
    "б": "b",
    "в": "v",
    "ґ": "g",
    "г": "g",
    "д": "d",
    "е": "e",
    "ё": "e",
    "є": "ye",
    "ж": "zh",
    "з": "z",
    "и": "i",
    "і": "i",
    "ї": "yi",
    "й": "i",
    "к": "k",
    "л": "l",
    "м": "m",
    "н": "n",
    "о": "o",
    "п": "p",
    "р": "r",
    "с": "s",
    "т": "t",
    "у": "u",
    "ф": "f",
    "х": "h",
    "ц": "c",
    "ч": "ch",
    "ш": "sh",
    "щ": "sh'",
    "ъ": "",
    "ы": "i",
    "ь": "",
    "э": "e",
    "ю": "yu",
    "я": "ya",
  };

  if (_preset === "uk") {
    Object.assign(_firstLetterAssociations, {
      "г": "h",
      "и": "y",
      "й": "y",
      "х": "kh",
      "ц": "ts",
      "щ": "shch",
      "'": "",
      "’": "",
      "ʼ": "",
    });
  }

  const _associations = Object.assign({}, _firstLetterAssociations);

  if (_preset === "uk") {
    Object.assign(_associations, {
      "є": "ie",
      "ї": "i",
      "й": "i",
      "ю": "iu",
      "я": "ia",
    });
  }

  function transform(str, spaceReplacement) {
    if (!str) {
      return "";
    }

    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      let strLowerCase = str[i].toLowerCase();
      if (strLowerCase === " " && spaceReplacement) {
        newStr += spaceReplacement;
        continue;
      }
      let newLetter = _preset === "uk" && strLowerCase === "г" && i > 0 && str[i - 1].toLowerCase() === "з"
        ? "gh"
        : (i === 0 ? _firstLetterAssociations : _associations)[strLowerCase];
      if ("undefined" === typeof newLetter) {
        newStr += strLowerCase;
      }
      else {
        newStr += newLetter;
      }
    }
    return newStr;
  }

  return {
    transform: transform
  };
};
