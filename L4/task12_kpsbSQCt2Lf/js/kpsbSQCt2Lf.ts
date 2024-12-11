let t_arr: Array<any> = [];

function t_arr_init(l: number): void{
    t_arr = [];
    for (let c=0; c<l; c++){
        const el: number = Math.pow(2,c);
        t_arr.push(el);    
    }
}

t_arr_init(8);
console.log(t_arr);

function swap(arr: Array<any>, index1: number, index2: number){
    let t_elem: any;
    t_elem = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = t_elem;
}

swap(t_arr,3,4);
console.log(t_arr);