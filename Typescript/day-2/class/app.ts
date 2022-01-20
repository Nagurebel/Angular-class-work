class user{
    firstName:string='testyantra'
lastname:string
display(){
    console.log('inside the disply function');
}
}

var obj=new user();
console.log(obj.display());
console.log(obj.firstName);


//class with constructor
class person{
    name:string
    id:number
    constructor(name,id){
        this.name=name,
        this.id=id
    }
}
var p=new person('virat',21)
console.log(p.name);

interface car{
    brand:string
    price:number
    result():string
}

class honda implements car{
    brand:string
    price:number
    result():string{
        return 'abcd'
    }
}
var h=new honda();
var x=h.result();
console.log(x);

var c2: car={
    brand:'honda',
    price:200000,
    result(){
        return 'ab'
    }
}
console.log(c2.brand);
console.log(c2.result());

//enumerated datatype
console.log('=========enum=======');

enum books{
    book1=10,
    book2=20,
    book3=30,
    book4=40
}

function displayBooks():books{
    if(true){
        return books.book3
    }
}
console.log(displayBooks());

enum books1{
    book11=10,
    book12,
    book13,
    book14
}

function displayBook():books1{
    if(true){
        return books1.book13
    }
}
console.log(displayBook1());

function displayBook1():books1{
    if(true){
        return books1.book13+10
    }
}
console.log(displayBook1());


console.log('--------eneric dunction----------');
//Generics

function displayValue<t>(item:t):t{
    return item
}

console.log(displayValue('technoElevate'));
console.log(displayValue(20));
console.log(displayValue(true));

function displayValue1<t>(item1:t,item2:t):t{
    return item1
}

console.log(displayValue1('Nagu','Rebel'));

