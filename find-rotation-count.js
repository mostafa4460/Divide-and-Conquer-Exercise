function findRotationCount(arr) {
    let start = 0,
        end = arr.length - 1;
    
    if (arr[start] < arr[end]) return 0;

    while (end >= start) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid + 1]) {
            return mid + 1;
        } else if (arr[start] <= arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

module.exports = findRotationCount