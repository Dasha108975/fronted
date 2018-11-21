var arrayToList = (value_1, value_2, value_3) => {
    var list ={
        value : value_1,
        next : {
            value : value_2,
            next : {
                value : value_3,
                next : null
                }
            }
    };
    return list;
}

var listToArray = (list) => {
    console.log(list.value);

    if (list.next)
        listToArray(list.next);
}

var prepend = (value_1, list) => {
    return { 
        value : value_1, next : list};
}

var nth = (list, index) => {
    if (!index) return undefined;
    if (index) 
        return list.value;
    

}
//console.log(arrayToList(10,20));

//console.log(listToArray(arrayToList(10,20,30)));

//console.log(prepend(10,prepend(20,null)));

console.log(nth(arrayToList([10, 20, 30]), 80));