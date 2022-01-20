var user = /** @class */ (function () {
    function user() {
        this.firstName = 'testyantra';
    }
    user.prototype.display = function () {
        console.log('inside the disply function');
    };
    return user;
}());
var obj = new user();
console.log(obj.display());
console.log(obj.firstName);
//class with constructor
var person = /** @class */ (function () {
    function person(name, id) {
        this.name = name,
            this.id = id;
    }
    return person;
}());
var p = new person('virat', 21);
console.log(p.name);
var honda = /** @class */ (function () {
    function honda() {
    }
    honda.prototype.result = function () {
        return 'abcd';
    };
    return honda;
}());
var c = new honda();
var x = c.result();
console.log(x);
var c2 = {
    brand: 'honda',
    price: 200000,
    result: function () {
        return 'ab';
    }
};
console.log(c2.brand);
console.log(c2.result());
//enumerated datatype
console.log('=========enum=======');
var books;
(function (books) {
    books[books["book1"] = 10] = "book1";
    books[books["book2"] = 20] = "book2";
    books[books["book3"] = 30] = "book3";
    books[books["book4"] = 40] = "book4";
})(books || (books = {}));
function displayBooks() {
    if (true) {
        return books.book3;
    }
}
console.log(displayBooks());
var books1;
(function (books1) {
    books1[books1["book11"] = 10] = "book11";
    books1[books1["book12"] = 11] = "book12";
    books1[books1["book13"] = 12] = "book13";
    books1[books1["book14"] = 13] = "book14";
})(books1 || (books1 = {}));
function displayBook() {
    if (true) {
        return books1.book13;
    }
}
console.log(displayBook1());
function displayBook1() {
    if (true) {
        return books1.book13 + 10;
    }
}
console.log(displayBook1());
console.log('--------eneric dunction----------');
//Generics
function displayValue(item) {
    return item;
}
console.log(displayValue('technoElevate'));
console.log(displayValue(20));
console.log(displayValue(true));
function displayValue1(item1, item2) {
    console.log(displayValue1('Rebel', 'Nagu'));
    //return `${item1}-${item2}`
}
//console.log(displayValue1('Nagu','Rebel'));
// console.log(displayValue1(20,30));
