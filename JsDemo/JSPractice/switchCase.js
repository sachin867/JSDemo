function checkDayOfWeek(dayNumber){

let day;
    switch (dayNumber) {
        case 0:
            day ="sun";
            break;
            case 1:
                day ="mon";
                break;
                case 2:
                    day ="tue";
                    break;
                    case 3:
                        day ="wed";
                        break;
                        case 4:
                            day ="thu";
                            break;
    
        default:
            console.log("Invalid Input");
            break;
    }
    return day;

}
console.log(checkDayOfWeek(1));