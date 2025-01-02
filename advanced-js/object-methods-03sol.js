const books = {
    "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
    "b002": { title: "1984", price: 15.99, isAvailable: false },
    "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
    "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
}

const bookEntries = Object.entries(books)
bookEntries
   .filter(([id, book]) => book.price > 16)
   .forEach(([id, {title, price}]) => {
      console.log(`ID: ${id} Book: ${title} ${price}`)
   });
