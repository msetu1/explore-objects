const firstNum = 4;
const secondNum = 4;
if (firstNum === secondNum) {
    console.log(true);
}

else {
    console.log(false);
};

const first = { a: 4 };
const second = { a: 4 };
const third = second;
if (third === second) {
    console.log(true);
}
else {
    console.log(false);
};

const num1 = { a: 5, b: 4, c: 2 };
const num2 = { a: 5, c: 2, b: 4 };
const num1String = JSON.stringify(num1);
const num2String = JSON.stringify(num2);

// console.log(num1String, num2String);
/* if (num1String === num2String) {
    console.log('same');
}
else {
    console.log('different');
} */

function compareObject(first, second) {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
        return true;
    }
    else {
        return false;
    }

}
const isSame = compareObject(first, second);
console.log(isSame);
