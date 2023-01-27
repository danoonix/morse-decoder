const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const space = '**********';
    const dot = '10';
    const dash = '11';
    let res = '';
    for(let i = 0; i < expr.length; i = i + 10) {
        let resStr = '';
        let str = expr.slice(i, i + 10);
        if(str === space) {
            res = res + ' ';
            continue;
        } else {
            str = (+(str / 1)).toString();
        }
        for(let j = 0; j < str.length; j = j + 2) {
            let strPart = str.slice(j, j+2);
            if(strPart === dot) {
                resStr = resStr + '.';
            }
            if(strPart === dash) {
                resStr = resStr + '-';
            }
        }
        res += MORSE_TABLE[resStr];
        resStr = '';
    }
    return res;
}

module.exports = {
    decode
}