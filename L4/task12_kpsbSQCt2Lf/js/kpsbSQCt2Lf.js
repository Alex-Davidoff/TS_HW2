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
function swap(arr, index1, index2) {
    var t_elem;
    t_elem = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = t_elem;
}
swap(t_arr, 3, 4);
console.log(t_arr);
