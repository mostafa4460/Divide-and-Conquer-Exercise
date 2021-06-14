function findFloor(arr, value) {
    let start = 0,
        end = arr.length - 1;
    
    if (value < arr[start]) return -1;
    if (value > arr[end]) return arr[end];

    while (end >= start) {
        let mid = Math.floor((start + end) / 2);
        if (value < arr[mid]) {
            end = mid - 1;
        } else if (value > arr[mid]) {
            while (end >= mid) {
                let mid2 = Math.floor((mid + end) / 2);
                if (value >= arr[mid2] && value < arr[mid2 + 1]) {
                    return arr[mid2];
                } else {
                    mid = mid2 + 1;
                }
            }
            return -1;
        } else {
            return arr[mid];
        }
    }
}

module.exports = findFloor