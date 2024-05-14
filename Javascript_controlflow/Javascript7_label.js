// break statement 
// In this syntax, the label can be any valid identifier. 
outer: for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i >= 3) {
        break outer;
    }
}


//   continue is used to skip the variable sin 
outer: for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
        if (i + j == 3) continue outer;
        console.log(i, j);
    }
}