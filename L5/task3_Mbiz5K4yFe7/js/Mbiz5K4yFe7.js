var calc_cylinder_area = function (r, h) { return 2 * Math.PI * r * (r + h); };
var r2 = 4;
var h2 = 5;
var cylinder_area = calc_cylinder_area(r2, h2);
console.log(r2, h2, cylinder_area);
document.write("\n    <p>r = " + r2 + "</p>\n    <p>h = " + h2 + "</p>\n    <p>cylinder_area = " + cylinder_area + "</p>\n");
