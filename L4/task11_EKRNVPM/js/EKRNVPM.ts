let t_arr: Array<number> = [];

function t_arr_init(l: number): void{
    t_arr = [];
    for (let c=0; c<l; c++){
        let el: number = Math.pow(2,c);
        t_arr.push(el);    
    }
}

t_arr_init(8);
console.log(t_arr);

function sum_arr(arr: Array<number>): number{
    let tsum: number = 0;
    for (const el of arr){
        tsum = tsum + el;
    }
    return tsum;
}

const sum: number = sum_arr(t_arr)
console.log(sum);
document.write('<p>'+'summary : '+sum+'</p>');