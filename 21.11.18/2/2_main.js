var reserseArray = (array) => {
    var a = [];
    for (var i = array.length-1; i >= 0; i--){
        a.push(array[i]);
    }
    return a;
}

var reserseArraylnPlace = (array) => {
    var temp = [];
    for (var i = 0; i < (array.length - 1)/2; i++){
        temp [i] = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp [i];
    }
    return array;
}

console.log(reserseArray(['A','B','C']))

var arr_value = [1, 2, 3, 4, 5, 6];
reserseArraylnPlace(arr_value);
console.log(arr_value)