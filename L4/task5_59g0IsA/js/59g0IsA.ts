function write_in_tag(input_text: string, tag_name: string): void{
    document.write('<'+tag_name+'>'+input_text+'</'+tag_name+'>');
}

for (let c=0; c<4; c++){
    write_in_tag('test text '+c,'p');
}