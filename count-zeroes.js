function countZeroes(arr) {
    if (arr[0] === 0) return arr.length;
    else if (arr[arr.length - 1] !== 0) return 0;

    let leftIndx = 0,
        rightIndx = arr.length - 1;

    while (arr[rightIndx] === 0) {
        let middleIndx = Math.floor((leftIndx + rightIndx) / 2);
        if (arr[middleIndx] !== 0) {
            leftIndx = middleIndx + 1;
        } else {
            rightIndx = middleIndx - 1;
        }
    }
    return arr.length - rightIndx - 1;
}

module.exports = countZeroes