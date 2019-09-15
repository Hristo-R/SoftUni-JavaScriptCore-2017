function bookGenerator() {
    createBook("#wrapper", "Alice in Wonderland", "Lewis Carroll", 1111);
    createBook("#wrapper", "Alice in Wonderland", "Lewis Carroll", 1111);
    createBook("#wrapper", "Alice in Wonderland", "Lewis Carroll", 1111);

    function createBook(selector, title, author, isbn) {
        let bookId = 1;
        let result = $(selector)
            .append($('<div>')
            .attr('id', 'book' + bookId++)
            .append($('<p>').addClass('title').text(title))
            .append($('<p>').addClass('author').text(author))
            .append($('<p>').addClass('isbn').text(isbn))
            .append($('<button>').text('Select')
                .click(function () {
                    $(this).parent().css('border', '2px solid blue')
                }))
            .append($('<button>').text('Deselect')
                .click(function () {
                    $(this).parent().css('border', 'none')
                })));

        return result;
    }
};