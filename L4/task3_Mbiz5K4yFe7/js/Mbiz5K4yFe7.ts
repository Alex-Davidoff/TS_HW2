function calc_cylinder_area(r : number, h : number) : number {
    return 2 * Math.PI * r * (r + h);
}

const r : number = 4;
const h : number = 5;
const cylinder_area : number = calc_cylinder_area(r,h);

console.log(r,h, cylinder_area);
document.write(`
    <p>r = ${r}</p>
    <p>h = ${h}</p>
    <p>cylinder_area = ${cylinder_area}</p>
`);