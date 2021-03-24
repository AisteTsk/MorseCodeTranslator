import { morseToEnglishTranslator, englishToMorseTranslator } from "./morse.js"
// Valid inputs:
it ("Should translate a to .- ", () => {
    const translateToMorse = englishToMorseTranslator("a");
    expect(translateToMorse).toBe(".- ");
});
it ("Should translate .- to A", () => {
    const translateToEnglish = morseToEnglishTranslator(".-");
    expect(translateToEnglish).toBe("A");
});
// Invalid inputs:
it ("Should return N/A when english is used in the englishToMorseTranslator function", () => {
    const translateToMorse = englishToMorseTranslator(".-");
    expect(translateToMorse).toBe("N/A");
});
it ("Should return N/A when english is used in the morseToEnglishTranslator function", () => {
    const translateToEnglish = morseToEnglishTranslator("A");
    expect(translateToEnglish).toBe("N/A");
});
// Null/no inputs:
it ("Should return an error message when a null agrument is passed", () => {
    const translateToMorse = englishToMorseTranslator(null);
    expect(translateToMorse).toBe("Null or undefined value was entered. Please try again.");
});
it ("Should return an error message when a null agrument is passed", () => {
    const translateToEnglish = morseToEnglishTranslator(null);
    expect(translateToEnglish).toBe("Null or undefined value was entered. Please try again.");
});
it ("Should return an error message when an undefined agrument is passed", () => {
    const translateToMorse = englishToMorseTranslator(null);
    expect(translateToMorse).toBe("Null or undefined value was entered. Please try again.");
});
it ("Should return an error message when an undefined agrument is passed", () => {
    const translateToEnglish = morseToEnglishTranslator(null);
    expect(translateToEnglish).toBe("Null or undefined value was entered. Please try again.");
});