import { Component, OnInit ,Input,OnChanges,OnDestroy,SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges ,DoCheck,AfterContentInit,AfterViewChecked{
@Input() uname
  constructor() {
    console.log("child constructor has been called");
   }

  ngOnInit(): void {
    console.log("child ngOnInIt has been called");
  }

  ngOnDestroy(): void {
      console.log("child component has been destroyed");
  }
ngOnChanges(changes: SimpleChanges): void {
    console.log("child onchanges has been called");
    console.log(changes);
    
}
ngDoCheck():void {
  console.log("child DoCheck has been called");
  
}
ngAfterContentInit():void {
  console.log("child afterContent Init has been called");
  
}
ngAfterViewChecked(): void {
    console.log("child afterView Checked has beem called");
    
}

ngAfterContentChecked(): void {
  console.log('child AfterContentChecked has been called');
}





}
