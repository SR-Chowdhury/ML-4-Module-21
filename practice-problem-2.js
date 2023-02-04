let leapYear = [];
function findLeapYear (arr) {
    for (var i = 0; i < arr.length; i++) {
        if( (arr[i]%4 == 0 && arr[i]%100 !=0) || arr[i]%400 == 0 ) {
            leapYear.push(arr[i]);
        }
    }
    return leapYear;
}

var arr = [2023, 2024, 2025, 2028, 2030];
console.log(findLeapYear(arr));

// Output: [2024,2028]