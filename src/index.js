function oneToNineteen(num) {
    const arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 
        'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 
        'nineteen'];
    return arr[num];
};

function twentyToHundred(num) {
    const arrToTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 
        'seven', 'eight', 'nine'];
    const arrTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 
        'sixty', 'seventy', 'eighty', 'ninety'];
    let str = arrTens[Math.trunc(num/10)];
    if ((num % 10) != 0 ) {
        str = str + ' ' + arrToTen[num % 10];
    };    
    return str;
};

function oneToHunderd(num) {
    if (num < 20) {
        return oneToNineteen(num);
    } else {
        return twentyToHundred(num);
    };
};

function hunderdToThousand(num) {
    if (num < 100) {
        return oneToHunderd(num);
    };
    const arrToTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 
        'seven', 'eight', 'nine'];
    let str = arrToTen[Math.trunc(num/100)] + ' hundred';
    if ((num % 100) != 0) {
        str = str + ' ' + oneToHunderd(num % 100);
    };
    return str;
};

function thousandToMillion(num) {
    let str = oneToHunderd(Math.trunc(num/1000)) + ' thousand';
    if ((num % 1000) != 0) {
        str = str + ' and '+ hunderdToThousand(num % 1000);
    };
    return str;
};

module.exports = function toReadable (number) {
    if (number == 0) {
        return 'zero';
    };
    switch (true) {        
        case number > 0 && number < 100:
            return oneToHunderd(number);
            break;
        case number >= 100 && number < 1000:
            return hunderdToThousand(number);
            break;
        case number >= 1000 && number < 1000000:
            return thousandToMillion(number);
            break;
        default: 
            return 'out of range';
            break;
    };
}