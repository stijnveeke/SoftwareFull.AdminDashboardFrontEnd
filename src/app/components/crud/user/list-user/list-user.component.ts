import { Component, OnInit } from '@angular/core';
import { UserOutput } from 'src/app/dto/user-output';
import { UserService } from 'src/app/services/user.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: Observable<UserOutput[]>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
  }
}
