function findRotatedIndex(arr, value) {
    const pivotPoint = findPivotPoint(arr);
    if (value >= arr[pivotPoint] && value <= arr[arr.length - 1]) {
        return binarySearch(arr, value, pivotPoint, arr.length - 1);
    } else {
        return binarySearch(arr, value, 0, pivotPoint);
    }
}

function findPivotPoint(arr) {
    let start = 0,
        end = arr.length - 1;
    
    if (arr[end] > arr[start]) return 0;

    while (end >= start) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid + 1]) return mid + 1;
        else if (arr[mid] > arr[start]) start = mid + 1;
        else end = mid - 1;
    }
}

function binarySearch(arr, value, start, end) {
    while (end >= start) {
        let mid = Math.floor((start + end) / 2);
        if (value > arr[mid]) {
            start = mid + 1;
        } else if (value < arr[mid]) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

module.exports = findRotatedIndex