import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      if (!id) id = 1;

      // to trigger the spinner
      this.user = null;

      this.userService.users.subscribe((users) => {
        if (users.length == 0) return;

        // let the spinner spin
        setTimeout(() => {
          this.user = this.userService.userById(id);
          console.log('user: ', this.user);
        }, 500);
      });
    });
  }
}
