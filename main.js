const formContent = document.getElementById('addBook');
const uploadbtn = document.getElementById('upload');
const books = document.getElementById('books')
const table = document.getElementById('table')
    fetch('http://localhost:3000/books')
        .then(response => {
            response.json()
                .then(data => {
                    console.log(data);
                    data.forEach(book => {
                        let row = table.insertRow()
                        let title = row.insertCell([0]);
                        let author = row.insertCell([1]);
                        let image = row.insertCell([2]);
                        title.innerHTML = book.book
                        author.innerHTML = book.author
                        image.innerHTML = `<img src=${book['image-url']}>`
                        console.log(book)
                    //     books.innerHTML +=
                    });
                });
        });
        
// console.log("hello");
formContent.addEventListener('submit', event => {
    event.preventDefault();
    const addBook = document.getElementById('addBook');
    const book = document.getElementById('book-name')   ;
    const imageUrl = document.getElementById('image-url');
    const author = document.getElementById('author');
    
console.log(formContent.value);

    fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            book: book.value,
            imageurl: imageUrl.value,
            author: author.value
        })
    })
        .then(response => {
            response.json()
                .then(data => {
                    // addBook.innerHTML = data
                    // console.log(data);
                });
        });
});



