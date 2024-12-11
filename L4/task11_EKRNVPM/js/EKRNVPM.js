var t_arr = [];
function t_arr_init(l) {
    t_arr = [];
    for (var c = 0; c < l; c++) {
        var el = Math.pow(2, c);
        t_arr.push(el);
    }
}
t_arr_init(8);
console.log(t_arr);
function sum_arr(arr) {
    var tsum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        tsum = tsum + el;
    }
    return tsum;
}
var sum = sum_arr(t_arr);
console.log(sum);
document.write('<p>' + 'summary : ' + sum + '</p>');
