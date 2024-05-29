"use strict";
// ypescript enumeration 
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["April"] = 3] = "April";
    Month[Month["may"] = 4] = "may";
    Month[Month["jun"] = 5] = "jun";
    Month[Month["july"] = 6] = "july";
    Month[Month["aug"] = 7] = "aug";
    Month[Month["sep"] = 8] = "sep";
    Month[Month["oct"] = 9] = "oct";
    Month[Month["nov"] = 10] = "nov";
    Month[Month["dec"] = 11] = "dec";
})(Month || (Month = {}));
;
function isSummer(month) {
    let isSummer;
    switch (month) {
        case Month.Jan:
        case Month.Feb:
        case Month.Mar:
        case Month.April:
        case Month.may:
        case Month.jun:
        case Month.july:
        case Month.aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isSummer(Month.Jan));
console.log(isSummer(Month.Feb));
