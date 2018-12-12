export function functionsDatePicker(year, min, max) {
    let arr = [];
    while(year >= min || year <= max){
        if(year < min){
            arr = [min-1,min-2,min-3,min-4,min-5,min-6,min-7,min-8,min-9,min-10,min-11,min-12,min-13,min-14,min-15,min-16,min-17,min-18,min-19,min-20,min-21,min-22,min-23,min-24].reverse();
            max = arr[23];
            min = arr[0];
        }else if(year > max){
            arr = [max+1,max+2,max+3,max+4,max+5,max+6,max+7,max+8,max+9,max+10,max+11,max+12,max+13,max+14,max+15,max+16,max+17,max+18,max+19,max+20,max+21,max+22,max+23,max+24];
            max = arr[23];
            min = arr[0];
        }else{
            break
        }
    }
    return {arr, min, max}
}

function defineEndDay(month, year){
    switch (month) {
        case 1 :
            return 31;
        case 2 :
            if(year % 4 === 0){
                return 29;
            }else{
                return 28;
            }
        case 3 :
            return 31;
        case 4 :
            return 30;
        case 5 :
            return 31;
        case 6 :
            return 30;
        case 7 :
            return 31;
        case 8 :
            return 31;
        case 9 :
            return 30;
        case 10 :
            return 31;
        case 11 :
            return 30;
        case 12 :
            return 31;
    }
}

export function daysOfTheMonth(primaryDay, month, year) {
    let obj = {
        week1: [],
        week2: [],
        week3: [],
        week4: [],
        week5: [],
        week6: [],
    };
    const endDay = defineEndDay(month, year);

    // set up the first week
    if(primaryDay === "Sun"){
        obj.week1 = [7,1,2,3,4,5,6,7]
    }else if(primaryDay === "Mon"){
        obj.week1 = [7,0,1,2,3,4,5,6]
    }else if(primaryDay === "Tue"){
        obj.week1 = [2,1,2,3,4,5]
    }else if(primaryDay === 'Wed'){
        obj.week1 = [3,1,2,3,4]
    }else if(primaryDay === 'Thu'){
        obj.week1 = [4,1,2,3]
    }else if(primaryDay === 'Fri'){
        obj.week1 = [5,1,2]
    }else if(primaryDay === 'Sat'){
        obj.week1 = [6,1]
    }
    // set up the second week
    if(obj.week1[obj.week1.length-1] === 1){
        obj.week2 = [2,3,4,5,6,7,8]
    }else if(obj.week1[obj.week1.length-1] === 2){
        obj.week2 = [3,4,5,6,7,8,9]
    }else if(obj.week1[obj.week1.length-1] === 3){
        obj.week2 = [4,5,6,7,8,9,10]
    }else if(obj.week1[obj.week1.length-1] === 4){
        obj.week2 = [5,6,7,8,9,10,11]
    }else if(obj.week1[obj.week1.length-1] === 5){
        obj.week2 = [6,7,8,9,10,11,12]
    }else if(obj.week1[obj.week1.length-1] === 6){
        obj.week2 = [7,8,9,10,11,12,13]
    }else if(obj.week1[obj.week1.length-1] === 7){
        obj.week2 = [8,9,10,11,12,13,14]
    }
    // set up the third week -- fourth, fifth, sixth
    if(obj.week2[6] === 8){
        obj.week3 = [9,10,11,12,13,14,15]
    }else if(obj.week2[6] === 9){
        obj.week3 = [10,11,12,13,14,15,16]
    }else if(obj.week2[6] === 10){
        obj.week3 = [11,12,13,14,15,16,17]
    }else if(obj.week2[6] === 11){
        obj.week3 = [12,13,14,15,16,17,18]
    }else if(obj.week2[6] === 12){
        obj.week3 = [13,14,15,16,17,18,19]
    }else if(obj.week2[6] === 13){
        obj.week3 = [14,15,16,17,18,19,20]
    }else if(obj.week2[6] === 14){
        obj.week3 = [15,16,17,18,19,20,21]
    }
    // set up the fourth week -- fifth, sixth
    if(obj.week3[6] === 15){
        obj.week4 = [16,17,18,19,20,21,22]
    }else if(obj.week3[6] === 16){
        obj.week4 = [17,18,19,20,21,22,23]
    }else if(obj.week3[6] === 17){
        obj.week4 = [18,19,20,21,22,23,24]
    }else if(obj.week3[6] === 18){
        obj.week4 = [19,20,21,22,23,24,25]
    }else if(obj.week3[6] === 19){
        obj.week4 = [20,21,22,23,24,25,26]
    }else if(obj.week3[6] === 20){
        obj.week4 = [21,22,23,24,25,26,27]
    }else if(obj.week3[6] === 21){
        obj.week4 = [22,23,24,25,26,27,28]
    }
    // set up the fifth week -- sixth
    if(obj.week4[6] === 22 && endDay === 28){
        obj.week5 = [23,24,25,26,27,28]
    }else if(obj.week4[6] === 22){
        obj.week5 = [23,24,25,26,27,28,29]
    }else if(obj.week4[6] === 23 && endDay === 28){
        obj.week5 = [24,25,26,27,28]
    }else if(obj.week4[6] === 23 && endDay === 29){
        obj.week5 = [24,25,26,27,28,29]
    }else if(obj.week4[6] === 23){
        obj.week5 = [24,25,26,27,28,29,30]
    }else if(obj.week4[6] === 24 && endDay === 28){
        obj.week5 = [25,26,27,28]
    }else if(obj.week4[6] === 24 && endDay === 29){
        obj.week5 = [25,26,27,28,29]
    }else if(obj.week4[6] === 24 && endDay === 30){
        obj.week5 = [25,26,27,28,29,30]
    }else if(obj.week4[6] === 24){
        obj.week5 = [25,26,27,28,29,30,31]
    }else if(obj.week4[6] === 25 && endDay === 28){
        obj.week5 = [26,27,28]
    }else if(obj.week4[6] === 25 && endDay === 29){
        obj.week5 = [26,27,28,29]
    }else if(obj.week4[6] === 25 && endDay === 30){
        obj.week5 = [26,27,28,29,30]
    }else if(obj.week4[6] === 25){
        obj.week5 = [26,27,28,29,30,31]
    }else if(obj.week4[6] === 26 && endDay === 28){
        obj.week5 = [27,28]
    }else if(obj.week4[6] === 26 && endDay === 29){
        obj.week5 = [27,28,29]
    }else if(obj.week4[6] === 26 && endDay === 30){
        obj.week5 = [27,28,29,30]
    }else if(obj.week4[6] === 26){
        obj.week5 = [27,28,29,30,31]
    }else if(obj.week4[6] === 27 && endDay === 28){
        obj.week5 = [28]
    }else if(obj.week4[6] === 27 && endDay === 29){
        obj.week5 = [28,29]
    }else if(obj.week4[6] === 27 && endDay === 30){
        obj.week5 = [28,29,30]
    }else if(obj.week4[6] === 27){
        obj.week5 = [28,29,30,31]
    }else if(obj.week4[6] === 28 && endDay === 29){
        obj.week5 = [29]
    }else if(obj.week4[6] === 28 && endDay === 30){
        obj.week5 = [29,30]
    }else if(obj.week4[6] === 28){
        obj.week5 = [29,30,31]
    }
    // set up the sixth week
    if(obj.week5[6] === 29 && endDay === 30){
        obj.week6 = [30]
    }else if(obj.week5[6] === 29){
        obj.week6 = [30,31]
    }else if(obj.week5[6] === 30) {
        obj.week6 = [31]
    }
    return obj;
}