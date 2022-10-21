let month = 1;
let startingDay = 2;
let monthLength = 0;


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
        monthLength = 31;
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

function lettering() {
    let dayLettering = ("| " + "MO" + " |" + " " + "| " + "DI" + " |" + " " + "| " + "MI" + " |" + " " + "| " + "DO" + " |" + " " + "| " + "FR" + " |" + " " + "| " + "SA" + " |" + " " + "| " + "SO" + " |");
    return dayLettering;
}

/*for (let i = 1; i < monthLength; i++) {
       console.log(monthLength); 
} */