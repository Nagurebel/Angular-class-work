import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
// result:any

cmp:string='TY'
finalid:any
randomNumbers:any
rand:any
value01
@ViewChild('input',{static:false})val:ElementRef
createId(){
  this.value01=this.val.nativeElement.value
  for(let i=0;i<3;i++){
    this.cmp+=this.value01[i]
    this.finalid=this.cmp.toLocaleUpperCase()
    this.finalid+='DEV'
  }
  this.randomNumbers=Math.floor(Math.random()*1000)
  this.finalid+=this.randomNumbers
}




  constructor(private user:UserserviceService) { }

  ngOnInit(): void {
    // this.result=this.user.getData()
  }

}
