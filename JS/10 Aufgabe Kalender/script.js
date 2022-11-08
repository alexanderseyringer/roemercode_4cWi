let month = 2;
let monthLength = 0;
let startingDayOfWeek = 3;
//let dayLettering = "| MO | DI | MI | DO | FR | SA | SO |";
let empty = "|    ";
let daysInAWeek = 7;
let dayOfMonth = 1;

switch (month) {
    case 1:
        monthLength = 31;
        break;
    case 2:
        monthLength = 28;
        break;
    case 3:
        monthLength = 31;
        break;
     case 4:
        monthLength = 30;
        break;
    case 5:
        monthLength = 31;
        break;
    case 6:
        monthLength = 30;
        break;
    case 7:
        monthLength = 31;
        break;
    case 8:
        monthLength = 31;
        break;
    case 9:
        monthLength = 30;
        break;
     case 10:
        monthLength = 31;
        break;
    case 11:
        monthLength = 30;
        break;
    case 12:
        monthLength = 31;
        break;    

    default:
        break;
}

let outputLine = "";

for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= daysInAWeek; j++) {
        if(j < startingDayOfWeek) {
            outputLine += empty
        }

        else {
            if(j <= 10) {
                outputLine += "|  " + dayOfMonth;
                dayOfMonth++;
            }

            else {
                outputLine += "| " + dayOfMonth;
                dayOfMonth++;
            }
            
        }

        if(j % 7 == 0) {
            outputLine += "| \n";
            console.log(outputLine);
        }
    } 
}