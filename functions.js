export function caesarCipher(string, shift) {
    shift = ((shift % 26) + 26) % 26;
    let encMsg = '';
    let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let arr = string.split('');
    for (let letter of arr) {
        let letterFound = alph.includes(letter.toLowerCase());
        if (!letterFound) {
            encMsg += letter;
            continue;
        }

        let smallerOrBigger = alph.length - 1 - alph.indexOf(letter.toLowerCase());

        if (smallerOrBigger < shift) {
            let newIndex = (shift - smallerOrBigger - 1 + 26) % 26;
            if (letter === letter.toUpperCase()) {
                encMsg += alph[newIndex].toUpperCase();
            } else {
                encMsg += alph[newIndex];
            }
        } else {
            let newIndex = (alph.indexOf(letter.toLowerCase()) + shift) % 26;
            if (letter === letter.toUpperCase()) {
                encMsg += alph[newIndex].toUpperCase();
            } else {
                encMsg += alph[newIndex];
            }
        }
    }
    return encMsg;
}
