class User{
    id : number;
    name : string;
    genre : string;
    status_active : boolean;
}

let temp_arr: User[] = [];

function temp_arr_init(len : number){
    temp_arr = [];
    for (let c = 0; c<len; c++){
        let user: User = {
        id : c+1,
        name : 'user_name_' + (c+1),
        genre : (c % 2 === 0) ? 'M' : 'F',
        status_active : (c % 3 === 0) ? false : true,
        };
        temp_arr.push(user);
    }
}

temp_arr_init(12);
console.log(temp_arr);

function arr_show(inp_arr: User[], class_name: string){
    document.write('<div class="'+class_name+'">');
    for (const t_obj of inp_arr){
        document.write('<div class="'+class_name+'_element'+'">');
        for (const t_key in t_obj){
            document.write('<p>'+t_key+" : "+t_obj[t_key]+'</p>');
        }
        document.write('</div>');
    }
    document.write('</div>');
}

arr_show(temp_arr, 'arr');