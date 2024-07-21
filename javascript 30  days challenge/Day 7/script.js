//Task-1 : Create an object reepresenting a book with properties like title, author, and year, and  log the object to the console.

let book = {
    title:"Atomic Habits",
    author:"James Clear",
    year:2008
}

console.log(book);


//Task-2 : Access and log the title and author properties of the book object.

console.log(book.title);
console.log(book.author);


//Task-3 : Add a method to the book object that return a string with the books title and author, and log the result of calling this method.

book.strgReturn = ()=>{
console.log(`the title of the book is ${book.title} and the auhter is ${book.author}`)
}
book.strgReturn();


//Task-4 : Add a method to the book object that takes parameter (year)and updates the book's year property, then log the updated object.

book.updatedYear = function(year){
    this.year = year;
    return  this.year
}

console.log(book.updatedYear(2009));


//Task-5 : Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let library = [
    {
        title : "b1",
        author : "a1",
        year : 1
    },
    {
        title : "b2",
        author : "a2",
        year : 2
    },
    {
        title : "b3",
        author : "a3",
        year : 3
    },
]

console.log(library);


//Task-6 : Access and log the name of the library and titles of all the books in the library.

library.forEach((books)=>{
    console.log(books.title)
})


//Task-7 : Add a method to the book object that uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.

let book = {
    title:"Atomic Habits",
    author:"James Clear",
    year:2008,
    start:function(){
        return `title: ${this.title}  ::  author: ${this.author}`
    }
}

let startThis = book.start();
console.log(startThis)


//Task-8 : Use a for...in loop to iterate over the properties of the book object and log each property and its value. 

for(let key in book){
    console.log(key + ":" + book[key])
}


//Task-9 : Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book))
console.log(Object.values(book))
console.log(Object.entries(book))