import { morseToEnglishTranslator, englishToMorseTranslator } from "./morse.js";

const englishValue = document.querySelector(".english-input");
const morseValue = document.querySelector(".morse-output");

document.querySelector(".english-to-morse").addEventListener("click", () => {
    morseValue.value = englishToMorseTranslator(englishValue.value);
});
document.querySelector(".morse-to-english").addEventListener("click", () => {
    englishValue.value = morseToEnglishTranslator(morseValue.value);
});