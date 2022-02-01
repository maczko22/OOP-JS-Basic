function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};


// MAgazine Construtor
function Magazine(title, author, year, month) {
    Book.call(this,title,author,year)

    this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine('Mag one', 'john Doe', '2018', 'Jan')

// Inherit Prototype

// Use Magazine Construtor

Magazine.prototype.constructor = Magazine;

console.log(mag1.getSummary());