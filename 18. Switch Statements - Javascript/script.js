function getdaybynumber(day_num)                    //here day_num is 1-7 value
{
    var day;

    switch(day_num)
    {
        case 1:
            day = "Saturday";
            break;
        case 2:
            day = "Sunday";
            break;
        case 3:
            day = "Monday";
            break;
        case 4:
            day = "Tuesday";
            break;
        case 5:
            day = "Wednesday";
            break;
        case 6:
            day = "Thursday";
            break;
        case 7:
            day = "Friday";
            break;
        default:
            day = "Entered day number value " + day_num + " doesn't exist."        //default is very imp due to, if user doesnt put correct value
    }
    return day;
}

document.write(getdaybynumber(60));