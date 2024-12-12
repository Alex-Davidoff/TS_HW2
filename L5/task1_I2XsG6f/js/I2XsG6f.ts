let calc_area = (a: number, b: number) => a * b;

let a: number = 5;
let b: number = 10;

console.log(calc_area(a,b));

document.write(`
    <p>a= ${a}</p>
    <p>b= ${b}</p>
    <p>rect_area= ${calc_area(a,b)}</p>
`);