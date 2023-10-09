var nilai = 1;
var result = "";

for (var i = 1; i <= 55; i++) {
    result += nilai;

    if (i !== 55) {
        result += ", ";
    }

    nilai += (i % 10) + 1;
}

console.log(result);
