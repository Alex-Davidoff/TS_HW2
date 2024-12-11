function calc_circle_area(r : number) : number {
    return r*r*Math.PI;
}

const r : number = 20;
const circle_area : number = calc_circle_area(r);

console.log(r,circle_area);
document.write(`
    <p>r = ${r}</p>
    <p>circle_area = ${circle_area}</p>
`);