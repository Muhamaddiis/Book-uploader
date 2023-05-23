// const formContent = document.getElementById('addBook');
const uploadbtn = document.getElementById('upload');

//     // fetch('http://localhost:3000/books')
//     //     .then(response => {
//     //         response.json()
//     //             .then(data => {
//     //                 console.log(data);
//     //             });
//     //     });
console.log("hello");
uploadbtn.addEventListener('submit', event => {
    event.preventDefault();
    const addBook = document.getElementById('addBook');
    const book = document.getElementById('book-name')   ;
    const imageUrl = document.getElementById('image-url');
    const author = document.getElementById('author');
    
console.log(book);
//     fetch('http://localhost:3000/books', {
//         method: 'POST',
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify({
//             book: book,
//             imageurl: imageUrl,
//             author: author
//         })
//     })
//         .then(response => {
//             response.json()
//                 .then(data => {
//                     addBook.innerHTML = data
//                     console.log(data);
//                 });
//         });
});



