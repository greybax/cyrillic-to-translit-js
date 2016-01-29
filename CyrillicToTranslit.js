'use strict';

module.exports = function cyrillicToTranslit() {
    
	var _associations = {
		"а": "a",
		"б": "b",
		"в": "v",
		"г": "g",
		"д": "d",
		"е": "e",
		"ё": "e",
		"ж": "zh",
		"з": "z",
		"и": "i",
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
		"x": "h",
		"ц": "c",
		"ч": "ch",
		"ш": "sh",
		"щ": "sh'",
		"ъ": "",
		"ы": "",
		"ь": "",
		"э": "",
		"ю": "yu",
		"я": "ya" 
	};
    
    return {
        transform: transform
    }   
    
    function transform(str, spaceReplacement) {
        if (!str) {
            return "";
        }
        
        var new_str = "";
        for (var i = 0; i < str.length; i++) {
            var strLowerCase = str[i].toLowerCase();
            if (strLowerCase === " " && spaceReplacement) {
                new_str += spaceReplacement;
                continue;
            }
            if (typeof _associations[strLowerCase] === 'undefined') {
                new_str += strLowerCase;
            }
            else {
                new_str += _associations[strLowerCase];
            }
        }
        return new_str;
    }
};