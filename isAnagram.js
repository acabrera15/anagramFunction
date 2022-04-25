let isAnagram = function(toCheck, word) {
    let isAnagram = false;

    //remove all chars that are not letters and makes lowercase
    let tempWord = word.replace(/[^a-z0-9]/gi, '');
    tempWord = tempWord.toLowerCase();
    let tempToCheck = toCheck.replace(/[^a-z0-9]/gi, '');
    tempToCheck = tempToCheck.toLowerCase();

    //false if not the same length
    if (tempToCheck.length !== tempWord.length) {
        return isAnagram;
    } else {
        let charInStr = false;
        let counter = 0;

        //if char is in word, charInStr is true and removes from the tempWord
        //returns true if goes though all chars in tempToCheck 
        for (let i = 0; i < tempToCheck.length; i++) {
            charInStr = false;
            counter = 0;

            while (!charInStr) {
                if (tempToCheck[i] === tempWord[counter]) {
                    charInStr = true;
                    let subStr1 = tempWord.substr(0, counter);
                    let subStr2 = tempWord.substr(counter + 1, tempWord.length - 1);
                    tempWord = subStr1 + subStr2;
                } else if (counter >= tempToCheck.length - 1 && charInStr === false) {
                    break;
                } else {
                    counter++;
                }
            }

            if (!charInStr) {
                break;
            }

            if (i === tempToCheck.length - 1 && charInStr) {
                isAnagram = true;
            }
        }
    }

    return isAnagram;
}