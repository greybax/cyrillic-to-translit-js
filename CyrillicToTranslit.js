var CyrillicToTranslit = function(str) {
	var _association = {
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

	var new_str = '';
	for (var i = 0; i < str.length; i++) {
		var strLowerCase = str[i].toLowerCase();
		if (typeof _association[strLowerCase] === 'undefined') {
			new_str += strLowerCase;
		}  
		else {
			new_str += _association[strLowerCase];
		}
	}
	return new_str;
};