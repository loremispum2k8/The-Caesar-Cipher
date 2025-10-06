export function caesarCipher(string,shift){
        shift = shift % 26
        let encMsg = '';
        let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        let arr = string.split('');
        for(let letter of arr){
                let letterFound = false
                let smallerOrBigger = alph.length-1 - alph.indexOf(letter.toLowerCase())

                if(alph.indexOf(letter.toLowerCase()) !== -1){
                        letterFound = true;
                }

                if(!letterFound){
                        encMsg += letter;
                }

                if(smallerOrBigger < shift && letterFound){
                        if(letter === letter.toUpperCase()){
                                encMsg += (alph[shift - (smallerOrBigger) - 1 ]).toUpperCase();
                        }
                        else{
                                encMsg += alph[shift - (smallerOrBigger) - 1 ];
                        }
                }
                else if(smallerOrBigger >= shift && letterFound){
                        if(letter === letter.toUpperCase()){
                                encMsg += (alph[ alph.indexOf(letter.toLowerCase()) + shift ]).toUpperCase();
                        }
                        else{
                                encMsg += alph[ alph.indexOf(letter.toLowerCase()) + shift ];
                        }
                }
        }
        return encMsg;

}