function write_text_in_ul2(input_text: string, repeats: number): void{
    document.write('<ul>');
    for (let c = 0; c<repeats; c++){
        document.write('<li>'+input_text+'</li>');
    }
    document.write('</ul>');
}

write_text_in_ul2('test text',8);