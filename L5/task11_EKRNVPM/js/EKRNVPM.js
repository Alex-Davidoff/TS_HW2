function t_arr_init(l) {
    var inp_arr = [];
    for (var c = 0; c < l; c++) {
        var el = Math.pow(2, c);
        inp_arr.push(el);
    }
    return inp_arr;
}
var t_arr = t_arr_init(8);
console.log(t_arr);
var sum_arr = function (arr) {
    var tsum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        tsum = tsum + el;
    }
    return tsum;
};
var t_sum = sum_arr(t_arr);
console.log('val output', t_sum);
document.write('<p>' + 'summary : ' + t_sum + '</p>');
