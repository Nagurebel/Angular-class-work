import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  getData(){
    return[
      {name:"ravi",department:'devloper',id:100},
      {name:"ram",department:'devloper',id:102},
      {name:"raj",department:'devloper',id:103}
    ]
  }
  constructor() { }
}
