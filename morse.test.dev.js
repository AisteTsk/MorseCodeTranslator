"use strict";

var _morse = require("./morse.js");

it("Should translate a to .- ", function () {
  var translateToMorse = (0, _morse.englishToMorseTranslator)("a");
  expect(translateToMorse).toBe(".- ");
});
it("Should translate .- to A", function () {
  var translateToEnglish = (0, _morse.morseToEnglishTranslator)(".-");
  expect(translateToEnglish).toBe("A");
}); // Invalid inputs:

it("Should return N/A when english is used in the englishToMorseTranslator function", function () {
  var translateToMorse = (0, _morse.englishToMorseTranslator)(".-");
  expect(translateToMorse).toBe("N/A");
});
it("Should return N/A when english is used in the morseToEnglishTranslator function", function () {
  var translateToEnglish = (0, _morse.morseToEnglishTranslator)("A");
  expect(translateToEnglish).toBe("N/A");
}); // Null/no inputs:

it("Should return an error message when a null agrument is passed", function () {
  var translateToMorse = (0, _morse.englishToMorseTranslator)(null);
  expect(translateToMorse).toBe("Null or undefined value was entered. Please try again.");
});
it("Should return an error message when a null agrument is passed", function () {
  var translateToEnglish = (0, _morse.morseToEnglishTranslator)(null);
  expect(translateToEnglish).toBe("Null or undefined value was entered. Please try again.");
});
it("Should return an error message when an undefined agrument is passed", function () {
  var translateToMorse = (0, _morse.englishToMorseTranslator)(null);
  expect(translateToMorse).toBe("Null or undefined value was entered. Please try again.");
});
it("Should return an error message when an undefined agrument is passed", function () {
  var translateToEnglish = (0, _morse.morseToEnglishTranslator)(null);
  expect(translateToEnglish).toBe("Null or undefined value was entered. Please try again.");
});