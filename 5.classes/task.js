class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }
    
    set state(newConditionState) {
        if(newConditionState < 0) {
            this._state = 0;
        } else if(newConditionState > 100) {
            this._state = 100;
        } else {
            this._state = newConditionState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }    
}

class FantasticBook  extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }    
}

class DetectiveBook  extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }    
}

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if(book.state > 30) {
            return this.books.push(book);
        }
        return;
    }

    findBookBy(type, value){
        let searchResult = this.books.find(book => book[type] === value);
        return (typeof searchResult === 'object') ? searchResult : null;
    }

    giveBookByName(bookName) {
        let requestBook = this.books.find(book => book.name === bookName); // находим книгу в массиве и сравниваем свойство name со значением (названием книги,которую ищем)
        if(typeof requestBook === 'object'){ 
            this.books.splice(this.books.indexOf(requestBook), 1);
            return requestBook;
        } else {
            return null;
        }
    }
}


