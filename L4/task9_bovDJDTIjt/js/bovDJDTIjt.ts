class temp2{
    id: number;
    name: string;
    age: number;
}

let t_arr: temp2[] = [];

function t_arr_init(l: number): void{
    for (let c=0; c<l; c++){
        const elem: temp2 = {
        id : c+1,
        name : 'elem_name_'+(c+1),
        age : c+20
        };
        t_arr.push(elem);
    }
}

t_arr_init(20);
console.log(t_arr);

function arr_show(t_arr: temp2[], class_name: string){
    document.write('<div class="'+class_name+'">');
    for (const t_obj of t_arr){
        document.write('<div class="'+class_name+'_elem'+'">');
        for (const t_key in t_obj){
            document.write('<p>'+t_key+" : "+t_obj[t_key]+'</p>');
        }
        document.write('</div>');
    }
    document.write('</div>');
}

arr_show(t_arr, 'arr');