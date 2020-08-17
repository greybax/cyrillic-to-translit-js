// This code does not run, but it is type-checked.
import cyrillicToTranslit from '.';

cyrillicToTranslit().transform("привет мир!");
cyrillicToTranslit().transform("привет мир!", "_");
cyrillicToTranslit({ preset: "uk" }).transform("привіт світе!", "_");
