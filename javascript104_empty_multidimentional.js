//creating multidimentional js

var rows = 3;
var cols = 3;
var multi_dimen = [];
//creating empty rows
for (let i = 0; i < rows; i++) {
    multi_dimen[i] = [];
}

//creating columns
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        document.write([i][j]);
    }
}