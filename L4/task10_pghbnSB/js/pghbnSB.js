var arr = [69, 15, -26, 10, 68, -94, -88, -3, -93, 67, -22, -9, 65, -56, -36, -78, -42, 8, -76, -27];
console.log(arr);
function get_snallest_elem(inp_arr) {
    var sm = 0;
    for (var _i = 0, inp_arr_1 = inp_arr; _i < inp_arr_1.length; _i++) {
        var el = inp_arr_1[_i];
        if (el < sm) {
            sm = el;
        }
    }
    return sm;
}
var smallestitem = get_snallest_elem(arr);
console.log(smallestitem);
document.write('<p>' + 'smallest value = ' + smallestitem + '</p>');
