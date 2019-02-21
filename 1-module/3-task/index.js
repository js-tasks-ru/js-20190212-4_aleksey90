'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
     
 function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
 }

function getMinMax(string) {
     let arr = string.split(" ").join().split(',');
    let result = [];
    for ( var i = 0; i < arr.length; ++i) {
        if (isNumber(arr[i])) result.push(parseFloat(arr[i]));
    }
    result.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    });
    return {min: result[0], max: result[result.length-1]};
}
