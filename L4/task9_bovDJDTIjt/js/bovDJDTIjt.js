var temp2 = /** @class */ (function () {
    function temp2() {
    }
    return temp2;
}());
var t_arr = [];
function t_arr_init(l) {
    for (var c = 0; c < l; c++) {
        var elem = {
            id: c + 1,
            name: 'elem_name_' + (c + 1),
            age: c + 20
        };
        t_arr.push(elem);
    }
}
t_arr_init(20);
console.log(t_arr);
function arr_show(t_arr, class_name) {
    document.write('<div class="' + class_name + '">');
    for (var _i = 0, t_arr_1 = t_arr; _i < t_arr_1.length; _i++) {
        var t_obj = t_arr_1[_i];
        document.write('<div class="' + class_name + '_elem' + '">');
        for (var t_key in t_obj) {
            document.write('<p>' + t_key + " : " + t_obj[t_key] + '</p>');
        }
        document.write('</div>');
    }
    document.write('</div>');
}
arr_show(t_arr, 'arr');
