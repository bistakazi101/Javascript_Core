// ypescript enumeration 


enum Month{

    Jan, 
    Feb, 
    Mar,
    April,
    may,jun ,
    july,
    aug,
    sep,
    oct,
    nov,
    dec
};
function isSummer(month:Month){
    let isSummer: boolean;
    switch(month){
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