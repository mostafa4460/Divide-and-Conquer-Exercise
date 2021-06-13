function sortedFrequency(arr, value) {
    let first = findFirst(arr, value);
    if (first === -1) return first;
    let last = findLast(arr, value);
    return last - first + 1;
}

function findFirst(arr, value) {
    if (arr[0] === value) return 0;
    
    let low = 0,
        high = arr.length - 1;
    while (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if (value > arr[mid]) {
            low = mid + 1;
        } else {
            if (value === arr[mid] && value > arr[mid - 1]) return mid;
            high = mid - 1;
        }
    }
    return -1;
}

function findLast(arr, value) {
    const lastIndx = arr.length - 1;
    if (arr[lastIndx] === value) return lastIndx;

    let low = 0,
        high = arr.length - 1;
    while (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if (value < arr[mid]) {
            high = mid - 1;
        } else {
            if (value === arr[mid] && value < arr[mid + 1]) return mid;
            else low = mid + 1;
        }
    }
}

module.exports = sortedFrequency