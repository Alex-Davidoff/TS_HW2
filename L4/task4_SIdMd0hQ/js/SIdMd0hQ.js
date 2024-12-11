var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var temp_arr = [];
function temp_arr_init(len) {
    temp_arr = [];
    for (var c = 0; c < len; c++) {
        var user = {
            id: c + 1,
            name: 'user_name_' + (c + 1),
            genre: (c % 2 === 0) ? 'M' : 'F',
            status_active: (c % 3 === 0) ? false : true
        };
        temp_arr.push(user);
    }
}
temp_arr_init(12);
console.log(temp_arr);
function arr_show(inp_arr, class_name) {
    document.write('<div class="' + class_name + '">');
    for (var _i = 0, inp_arr_1 = inp_arr; _i < inp_arr_1.length; _i++) {
        var t_obj = inp_arr_1[_i];
        document.write('<div class="' + class_name + '_element' + '">');
        for (var t_key in t_obj) {
            document.write('<p>' + t_key + " : " + t_obj[t_key] + '</p>');
        }
        document.write('</div>');
    }
    document.write('</div>');
}
arr_show(temp_arr, 'arr');
