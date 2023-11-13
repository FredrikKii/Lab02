import { books } from './books.js';


function countBooks(books) {
	return books.length;
  }

  const amountOfBooks = countBooks(books);

  console.log('\x1b[1m\x1b[35m%s\x1b[0m', 'Antal böcker i affären:');
  console.log(amountOfBooks);

  console.log();

console.log('\x1b[1m\x1b[35m%s\x1b[0m','Våra böcker:');
let i = 0;
while (i < books.length) {
  console.log(`${books[i].title}`);
  i++;
}
console.log();
console.log('\x1b[1m\x1b[35m%s\x1b[0m',"Kategori Fantasy:");
for (let i = 0; i < books.length; i++) {
    if (books[i].genre === 'Fantasy') {
      console.log(`${books[i].title}, Price: ${books[i].price}`);
    }
  }

  console.log();

  console.log('\x1b[1m\x1b[35m%s\x1b[0m', "Dystopier, Mysterieböcker & Klassiker:");
  for (let i = 0; i < books.length; i++) {
    if (books[i].genre === 'Dystopian' || books[i].genre === 'Mystery' || books[i].genre === 'Classic') {
      console.log(`${books[i].title}, Genre: ${books[i].genre}`);
    }
  }

console.log();

  console.log('\x1b[1m\x1b[35m%s\x1b[0m','Böcker som kostar över 10$:');
  for (let i = 0; i < books.length; i++) {
    if (books[i].price > 10) {
        console.log(`${books[i].title}, Price: ${books[i].price}`);
    }
  }

let totalValue = 0;

for (let i = 0; i < books.length; i++) {
  totalValue += books[i].price;
}
console.log();

console.log('\x1b[1m\x1b[35m%s\x1b[0m', 'Vad är det totala värdet av samtliga böcker?');
console.log(`${totalValue.toFixed(2)}`);

console.log();

const genreTotalValue = {};

for (let i = 0; i < books.length; i++) {
  const book = books[i];
  const genre = book.genre;
  
  if (!genreTotalValue[genre]) {
    genreTotalValue[genre] = 0;
  }
  genreTotalValue[genre] += book.price;
}

const dystopianTotalValue = genreTotalValue['Dystopian'] || 0;
const mysteryTotalValue = genreTotalValue['Mystery'] || 0;
console.log('\x1b[1m\x1b[35m%s\x1b[0m','Vilken genre är sammanlagt värt mest?');

if (dystopianTotalValue > mysteryTotalValue) {
  console.log('Dystopier är sammanlagt värda mest.');
} else if (mysteryTotalValue > dystopianTotalValue) {
  console.log('Mystery böcker är sammanlagt värda mest.');
} else {
  console.log('Dystopier och Mystery böcker är värda lika mycket.');
}
console.log();
console.log('\x1b[1m\x1b[35m%s\x1b[0m',"Böckerna i bokstavsordning:");
const bookTitles = books.map(book => book.title);

bookTitles.sort((a, b) => a.localeCompare(b));

for (let i = 0; i < bookTitles.length; i++) {
  console.log(bookTitles[i]);
}

const duplicateTitles = [];
const seenTitles = {};
console.log();
console.log('\x1b[1m\x1b[35m%s\x1b[0m','Dubbletter:');
for (let i = 0; i < books.length; i++) {
  const book = books[i];
  const title = book.title;

  if (seenTitles[title]) {
    if (!duplicateTitles.includes(title)) {
      duplicateTitles.push(title);
    }
  } else {
    seenTitles[title] = true;
  }
}

if (duplicateTitles.length === 0) {
  console.log('Inga dubbletter hittades.');
} else {
  duplicateTitles.forEach(title => {
    console.log(`${title}`);
  });
}

console.log();

const booksWithAuthorsMoreThanTwoWords = books.filter(book => {
    const authorName = book.author;
    return authorName.split(' ').length > 2 && !authorName.includes('.');
  });
  
  console.log('\x1b[1m\x1b[35m%s\x1b[0m', "Författare med mer än 2 ord i namnet och inga punkter:");
  booksWithAuthorsMoreThanTwoWords.forEach(book => {
    console.log(`${book.author}`);
  });
console.log();
  
const uniqueAuthors = new Set();
const sortedAuthors = [];

books.forEach(book => {
  const fullName = book.author;
  if (!uniqueAuthors.has(fullName)) {
    sortedAuthors.push({
      fullName,
      lastName: fullName.split(' ').pop(),
    });
    uniqueAuthors.add(fullName);
  }
});

sortedAuthors.sort((a, b) => a.lastName.localeCompare(b.lastName));

console.log('\x1b[1m\x1b[35m%s\x1b[0m',"Författare i alfabetisk ordning baserat på efternamn (utan dubbletter):");
sortedAuthors.forEach(author => {
  console.log(author.fullName);
});
console.log();

console.log('\x1b[1m\x1b[35m%s\x1b[0m', 'Böcker vars titel inte börjar med The:');
const böckerUtanThe = books.filter(book => !book.title.startsWith('The'));

böckerUtanThe.forEach(book => {
console.log(book.title);
});

console.log();

console.log('\x1b[1m\x1b[35m%s\x1b[0m', 'Böcker sorterade efter titelns längd:');
const sortedByLength = [...books]
.sort((a, b) => a.title.length - b.title.length);

sortedByLength.forEach(book => {
    console.log(book.title);
});

console.log();

console.log('\x1b[1m\x1b[35m%s\x1b[0m','Lägg till en ny bok:');

function addBook(list, title, author, genre, price) {
    let newBook = {
        title: title,
        author: author,
        genre: genre,
        price: price,
    }
};
