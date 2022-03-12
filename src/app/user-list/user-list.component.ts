import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UsersService} from "../services/users.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  user !:  Observable<User[]>;

  constructor(
    private userService : UsersService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.user = this.userService.findAll();
  }

  deleteUser(id : number){
    this.userService.deleteUser(id)
      .subscribe(
        result =>{
          console.log(result);
          this.reloadData();
        },
        error => {
          console.log(error);
        }
      )
  }

  userDetail(id : number){
    this.router.navigate(['details',id]);
  }

  updateUser(id : number){
    this.router.navigate(['update',id]);
  }
}
