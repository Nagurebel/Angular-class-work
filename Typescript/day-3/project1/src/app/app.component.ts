import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  flag:boolean=false

  //two typw code for show and hide 

  // show=true

  show:boolean
  showdata(){
    this.show=!this.show
  }

  



  






}
