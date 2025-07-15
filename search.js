var linearsearch = function (arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            return i;
        }
    }
};
console.log(linearsearch([3, 5, 6, 7, 8, 9, 9, 10], 7));
