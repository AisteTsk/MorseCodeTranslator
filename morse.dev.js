"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.englishToMorseTranslator = exports.morseToEnglishTranslator = void 0;

var _alphabetData = require("./alphabetData.js");

var englishToMorseTranslator = function englishToMorseTranslator(inputValue) {
  if (inputValue == null || inputValue == undefined) return "Null or undefined value was entered. Please try again.";

  for (var i = 0; i < _alphabetData.morseAlphabet.length; i++) {
    if (inputValue.includes(_alphabetData.morseAlphabet[i])) return "N/A";
  }

  var translatedArr = [];
  var inputArr = inputValue.toUpperCase().split("");
  inputArr.forEach(function (input) {
    for (var _i = 0; _i < _alphabetData.englishAlphabet.length; _i++) {
      if (_alphabetData.englishAlphabet[_i] == input) {
        translatedArr.push(_alphabetData.morseAlphabet[_i]);
        translatedArr.push(" ");
      }
    }
  });
  return translatedArr.join("");
};

exports.englishToMorseTranslator = englishToMorseTranslator;

var morseToEnglishTranslator = function morseToEnglishTranslator(inputValue) {
  if (inputValue == null || inputValue == undefined) return "Null or undefined value was entered. Please try again.";

  for (var i = 0; i < _alphabetData.englishAlphabet.length; i++) {
    if (inputValue.includes(_alphabetData.englishAlphabet[i])) return "N/A";
  }

  var translatedArr = [];
  var inputArr = inputValue.toUpperCase().split(" ");
  inputArr.forEach(function (input) {
    for (var _i2 = 0; _i2 < _alphabetData.morseAlphabet.length; _i2++) {
      if (_alphabetData.morseAlphabet[_i2] == input) translatedArr.push(_alphabetData.englishAlphabet[_i2]);
    }
  });
  return translatedArr.join("");
};

exports.morseToEnglishTranslator = morseToEnglishTranslator;