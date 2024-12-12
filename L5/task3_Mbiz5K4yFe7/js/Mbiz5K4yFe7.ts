let calc_cylinder_area = (r: number, h: number) => 2 * Math.PI * r * (r + h);

let r2: number = 4;
let h2 = 5;
let cylinder_area = calc_cylinder_area(r2,h2);

console.log(r2,h2, cylinder_area);
document.write(`
    <p>r = ${r2}</p>
    <p>h = ${h2}</p>
    <p>cylinder_area = ${cylinder_area}</p>
`);