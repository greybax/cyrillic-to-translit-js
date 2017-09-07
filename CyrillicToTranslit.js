'use strict';

module.exports = function cyrillicToTranslit() {
  const _associations = {
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
    "я": "ya"
  };

  function transform(str, spaceReplacement) {
    if (!str) {
      return "";
    }

    let new_str = "";
    for (let i = 0; i < str.length; i++) {
      let strLowerCase = str[i].toLowerCase();
      if (strLowerCase === " " && spaceReplacement) {
        new_str += spaceReplacement;
        continue;
      }
      let new_letter = _associations[strLowerCase];
      if ("undefined" === typeof new_letter) {
        new_str += strLowerCase;
      }
      else {
        new_str += new_letter;
      }
    }
    return new_str;
  }

  return {
    transform: transform
  };
};
