for (let i = 0; i < 4; i++) {
    let rowNumber = "";
    for (let i2 = 0; i2 < 4; i2++) {
        if (i%2!=0) {
            rowNumber += "O";
        }

        else {
            rowNumber += "X";
        } 
    }
    console.log(rowNumber);
}