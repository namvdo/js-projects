function displayMessage() {
    console.log(countCharacter("What is the color of the sky?", "t"));
    console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(reverseWord("What is the color of the sky?"));
    console.log(reverseAllWords("What is the color of the sky?"));
    console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(encode("What is the color of the sky?"));
    console.log(palidrome("This is a string, I don't know what I should type"));
    console.log(pigLatin("This is another string", "ay"));
}

displayMessage();
import { countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, encode, palidrome, pigLatin } from './messageMixer';