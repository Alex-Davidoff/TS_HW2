var t_arr = [];
function t_arr_init(l, n_type) {
    t_arr = [];
    var el = 0;
    for (var c = 0; c < l; c++) {
        if (n_type === 0) {
            el = c * c;
        }
        else if (n_type === 1) {
            el = 'elem_' + (c + 1);
        }
        else if (n_type === 2) {
            el = (c % 2 === 0) ? true : false;
        }
        t_arr.push(el);
    }
}
t_arr_init(8, 0);
console.log(t_arr);
var t_arr_show = function (sh_arr) {
    document.write('<ul>');
    for (var _i = 0, sh_arr_1 = sh_arr; _i < sh_arr_1.length; _i++) {
        var elem = sh_arr_1[_i];
        document.write('<li>' + elem + '</li>');
    }
    document.write('</ul>');
};
var tval = t_arr_show(t_arr);
