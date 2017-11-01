// This code does not run, but it is type-checked.

import CyrillicToTranslit = require(".");
new CyrillicToTranslit().transform("привет мир!");
new CyrillicToTranslit().transform("привет мир!", "_");
new CyrillicToTranslit({ preset: "uk" }).transform("привіт світе!", "_");
