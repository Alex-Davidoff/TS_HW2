function t_arr_init(l: number): Array<number>{
    let inp_arr: number[] = [];
    for (let c=0; c<l; c++){
        let el = Math.pow(2,c);
        inp_arr.push(el);    
    }
    return inp_arr;
}

let t_arr: Array<number> = t_arr_init(8);
console.log(t_arr);

let sum_arr = (arr: Array<number>) => {
    let tsum: number = 0;
    for (const el of arr){
        tsum = tsum + el;
    }
    return tsum;
}

let t_sum: number = sum_arr(t_arr);

console.log('val output', t_sum);
document.write('<p>'+'summary : '+t_sum+'</p>');