let t_arr: Array<number | string | boolean> = [];

function t_arr_init(l: number, n_type: number){
    t_arr = [];
    let el: number | string | boolean = 0;
    for (let c=0; c<l; c++){
        if (n_type===0){
            el = c*c;
        } else if (n_type===1){
            el = 'elem_'+(c+1);
        } else if (n_type===2){
            el = (c % 2 === 0) ? true : false;
        }
    t_arr.push(el);    
    }
}

t_arr_init(8,0);
console.log(t_arr);

let t_arr_show = (sh_arr: Array<number | string | boolean>) => {
    document.write('<ul>');
    for (const elem of sh_arr){
        document.write('<li>'+elem+'</li>');
    }
    document.write('</ul>');
}

let tval = t_arr_show(t_arr);