var write_in_tag = function (input_text, tag_name) {
    document.write('<' + tag_name + '>' + input_text + '</' + tag_name + '>');
};
for (var c = 0; c < 4; c++) {
    write_in_tag('test text ' + c, 'p');
}
