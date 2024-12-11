function calc_cylinder_area(r, h) {
    return 2 * Math.PI * r * (r + h);
}
var r = 4;
var h = 5;
var cylinder_area = calc_cylinder_area(r, h);
console.log(r, h, cylinder_area);
document.write("\n    <p>r = " + r + "</p>\n    <p>h = " + h + "</p>\n    <p>cylinder_area = " + cylinder_area + "</p>\n");
