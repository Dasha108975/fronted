var countBs = (str) => {
    var length = str.length;
    count = 0;
    for (var i = 0; i < length; i++){
        var value = str.charAt(i);
        if (value == 'B')
            count++;
    }
    return count;
}

var countChar = (str_1,str_2) => {
    var length = str_1.length;
    count = 0;
    for (var i = 0; i < length; i++){
        var value = str_1.charAt(i);
        if (value == str_2)
            count++;
    }
    return count;
}

console.log (countBs('Boasc BBBBsawxB'));

console.log (countChar('Boasc BoBBsawxB','o'));