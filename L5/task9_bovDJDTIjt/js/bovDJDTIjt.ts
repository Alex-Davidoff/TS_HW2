class Arr_elem{
    id: number;
    name: String;
    age: number;
}

let t_arr: Arr_elem[] = [];

function t_arr_init(l: number){
    for (let c=0; c<l; c++){
        const elem: Arr_elem = {
        id : c+1,
        name : 'elem_name_'+(c+1),
        age : c+20
        };
        t_arr.push(elem);
    }
}

t_arr_init(20);
console.log(t_arr);

let arr_show = (t_arr: Arr_elem[], class_name: string) => {
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

let tval= arr_show(t_arr, 'arr');