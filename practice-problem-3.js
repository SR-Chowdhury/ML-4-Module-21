var sum = 0;
var arr = [5, 7, 8, 10, 45, 30];
function findOddSum (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]%2 != 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(findOddSum(arr));

// Output: 57