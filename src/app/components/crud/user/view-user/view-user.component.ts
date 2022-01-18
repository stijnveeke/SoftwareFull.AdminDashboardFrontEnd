import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserOutput } from 'src/app/dto/user-output';
import { UserService } from 'src/app/services/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private userService: UserService,  private route: ActivatedRoute) { }


  user: Observable<UserOutput>;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userIdFromRoute = String(routeParams.get('userId'));

    this.user = this.userService.getUser(userIdFromRoute);
    console.log(this.user);
  }

}
