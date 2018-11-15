var result = "\n";
for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= 8; j++) {
        if (i % 2 == j % 2)
        result += '#';
        else 
        result += ' ';
    }
    result += "\n";
}
console.log(result);


