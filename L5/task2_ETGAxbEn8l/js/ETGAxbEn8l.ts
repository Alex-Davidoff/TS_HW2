let calc_circle_area = (r: number) => r*r*Math.PI;

let r: number= 20;
let circle_area: number = calc_circle_area(r);

console.log(r,circle_area);
document.write(`
    <p>r = ${r}</p>
    <p>circle_area = ${circle_area}</p>
`);