import { morseAlphabet, englishAlphabet } from "./alphabetData.js";

const englishToMorseTranslator = (inputValue) => {
    if (inputValue == null || inputValue == undefined) return "Null or undefined value was entered. Please try again.";

    for (let i = 0; i < morseAlphabet.length; i++) {
        if(inputValue.includes(morseAlphabet[i])) return "N/A";
    }
    const translatedArr = [];
    const inputArr = inputValue.toUpperCase().split("");

    inputArr.forEach(input => {
        for (let i = 0; i < englishAlphabet.length; i++) {
            if (englishAlphabet[i] == input) {
                translatedArr.push(morseAlphabet[i]);
                translatedArr.push(" ");
            }
        }
    });
    return translatedArr.join("");
}

const morseToEnglishTranslator = (inputValue) => {
    if (inputValue == null || inputValue == undefined) return "Null or undefined value was entered. Please try again.";

    for (let i = 0; i < englishAlphabet.length; i++) {
        if(inputValue.includes(englishAlphabet[i])) return "N/A";
    }
    const translatedArr = [];
    const inputArr = inputValue.toUpperCase().split(" ");

    inputArr.forEach(input => {
        for (let i = 0; i < morseAlphabet.length; i++) {
            if (morseAlphabet[i] == input) translatedArr.push(englishAlphabet[i]);
        }
    });
    return translatedArr.join("");
}

export { morseToEnglishTranslator, englishToMorseTranslator };