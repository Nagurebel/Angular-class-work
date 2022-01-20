import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, observable, Subscription } from 'rxjs';
import {filter} from 'rxjs/operators'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {

  count=0
  private mySub: Subscription = new Subscription;
  constructor() { }
  ngOnDestroy(): void {
    console.log('user destroyed ');
    this.mySub.unsubscribe()
  }

  ngOnInit(): void {

  //promise

  let promise=new Promise(resolve=>{
    setTimeout(()=>{
      resolve('Data 1 from promises')
      resolve('Data 2 from promises')
      resolve('Data 3 from promises')
    },1000)
  })//listening the promises

  promise.then(result=>{ console.log(result); })

  //observable

  let observable=new Observable(sub=>{
    console.log('observable has been called');

    setInterval(()=>{
     sub.next("data from observable"+this.count++)
      // console.log('data from observale'+this.count);
    //  sub.next('Data 1 from observable')
    //  sub.next('Data 2 from observable')
    //  sub.next('Data 3 from observable')
    //  sub.next('Data 4 from observable')
    },1000)
  })

//listening to the observable
this.mySub=observable
.subscribe((result)=>{console.log(result);
})

  }

  
}
