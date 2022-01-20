import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

users=[
  {name:"robert",city:"dublin",id:101,sal:24000,dob:new Date("2 jun 1998")},
  {name:"john",city:"benglore",id:102,sal:44000,dob:new Date("3 mar 1992")},
  {name:"mark",city:"london",id:103,sal:80000,dob:new Date("23 feb 1998")},
  {name:"smith",city:"delhi",id:104,sal:18000,dob:new Date("21 jul 1995")}


]

  constructor() { }

  ngOnInit(): void {
  let observable= new Observable(sub=>{sub.next(Math.random());
})
//1st listener
observable.subscribe(result=>{console.log(result);})

//2nd listener

observable.subscribe(result=>{console.log(result);})

let subject=new Subject()
//1st listener
subject.subscribe(result=>{console.log(result);})

//2nd listener
subject.subscribe(result=>{console.log(result);})

subject.next(Math.random())

  }

}
