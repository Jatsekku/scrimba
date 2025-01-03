const book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951
}

const librarianNote = Symbol()
book[librarianNote] = 'This title has gone missing'

console.log(book[librarianNote])
