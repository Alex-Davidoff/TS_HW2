function write_text_in_ul(input_text, repeats) {
    document.write('<ul>');
    for (var c = 0; c < repeats; c++) {
        document.write('<li>' + input_text + '</li>');
    }
    document.write('</ul>');
}
write_text_in_ul('test text', 3);
