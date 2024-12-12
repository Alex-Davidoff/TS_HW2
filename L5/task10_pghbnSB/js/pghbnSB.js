var arr = [69, 15, -26, 10, 68, -94, -88, -3, -93, 67, -22, -9, 65, -56, -36, -78, -42, 8, -76, -27];
console.log(arr);
var get_snallest_elem = function (inp_arr) {
    var sm = 0;
    for (var _i = 0, inp_arr_1 = inp_arr; _i < inp_arr_1.length; _i++) {
        var el = inp_arr_1[_i];
        if (el < sm) {
            sm = el;
        }
    }
    return sm;
};
var t_smallest = get_snallest_elem(arr);
console.log(t_smallest);
document.write('<p>' + 'smallest value = ' + t_smallest + '</p>');
