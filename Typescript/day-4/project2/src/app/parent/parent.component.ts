import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit ,QueryList,SimpleChanges, ViewChildren,AfterContentChecked} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit ,AfterContentChecked{
  user:any

  flag=false
  uname:any
  @ViewChildren("header")elem:QueryList<any>
  toggleChild(){
    this.flag=!this.flag
  }

  constructor() { 
    console.log("parent onInit has been called " +this.elem);
  }

  ngOnInit() {
    console.log("parent ngOnInit has been called " +this.elem);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("parent Onchanges has been changed");
    console.log();
  }
  ngDoCheck(): void {
      console.log("parent Docheck has been called ");
      
  }
  ngAfterViewInit(): void {
      console.log("parent afterview INit has been called ");
      console.log(this.elem);
      
      
  }
  ngAfterViewChecked(): void {
      console.log("parent afterview cHECKED has been called ");
      
  }
  ngAfterContentInit(): void {
      console.log("parent Aftercontent InIt has been called ");
      
  }


ngAfterContentChecked(): void {
    console.log('parent AfterContentChecked has been called');
}










}
