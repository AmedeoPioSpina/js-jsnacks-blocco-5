const aryLet = ["a","b","c"];
const aryNum = [1,2,3];
const newAry = [];

const checkMaxAndMinAry = (firstAry, SecondAry) => {
    if(aryLet.length >= aryNum){
        return [aryLet, aryNum];
    }
    else if(aryLet.length < aryNum){
        return [aryNum, aryLet];
    }
}

const maxMinAry = checkMaxAndMinAry(aryLet, aryNum);

console.log(maxMinAry)

maxMinAry[0].forEach((item, index) => {
    newAry.push(item);
    if(maxMinAry[1][index] !== undefined){
        newAry.push(maxMinAry[1][index]);
    }
})

console.log(newAry);