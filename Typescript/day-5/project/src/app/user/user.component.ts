import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private users:UserserviceService) { }
values
  ngOnInit(): void {
    this.values=this.users.getData()
  }

}
