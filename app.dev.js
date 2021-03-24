"use strict";

var _morse = require("./morse.js");

var englishValue = document.querySelector(".english-input");
var morseValue = document.querySelector(".morse-output");
document.querySelector(".english-to-morse").addEventListener("click", function () {
  morseValue.value = (0, _morse.englishToMorseTranslator)(englishValue.value);
});
document.querySelector(".morse-to-english").addEventListener("click", function () {
  englishValue.value = (0, _morse.morseToEnglishTranslator)(morseValue.value);
});