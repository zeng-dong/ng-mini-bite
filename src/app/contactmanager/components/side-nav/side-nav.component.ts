import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavItem } from '../../models/nav-item';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  public isScreenSmall: boolean;
  users: Observable<User[]>;
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  objectKeys = Object.keys;

  isDarkTheme: boolean = false;
  direction: string = 'ltr';

  menu = {
    Purchasing: ['Customers', 'Orders'],
    Sales: ['Vendors', 'Orders', 'Sellers'],
    Catalog: ['Items', 'UOM', 'UOW', 'Customers'],
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      //.observe([Breakpoints.XSmall])
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    this.users = this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav.close();
      }
    });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDirection() {
    this.direction = this.direction == 'ltr' ? 'rtl' : 'ltr';
  }

  navItems: NavItem[] = [
    {
      displayName: 'AngularMix',
      iconName: 'close',
      children: [
        {
          displayName: 'Speakers',
          iconName: 'group',
          children: [
            {
              displayName: 'Michael Prentice',
              iconName: 'person',
              route: 'michael-prentice',
              children: [
                {
                  displayName: 'Delight your Organization',
                  iconName: 'star_rate',
                  route: 'material-design',
                },
              ],
            },
            {
              displayName: 'Stephen Fluin',
              iconName: 'person',
              route: 'stephen-fluin',
              children: [
                {
                  displayName: "What's up with the Web?",
                  iconName: 'star_rate',
                  route: 'what-up-web',
                },
              ],
            },
            {
              displayName: 'Mike Brocchi',
              iconName: 'person',
              route: 'mike-brocchi',
              children: [
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'my-ally-cli',
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'become-angular-tailer',
                },
              ],
            },
          ],
        },
        {
          displayName: 'Sessions',
          iconName: 'speaker_notes',
          children: [
            {
              displayName: 'Delight your Organization',
              iconName: 'star_rate',
              route: 'material-design',
            },
            {
              displayName: "What's up with the Web?",
              iconName: 'star_rate',
              route: 'what-up-web',
            },
            {
              displayName: 'My ally, the CLI',
              iconName: 'star_rate',
              route: 'my-ally-cli',
            },
            {
              displayName: 'Become an Angular Tailor',
              iconName: 'star_rate',
              route: 'become-angular-tailer',
            },
          ],
        },
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'feedback',
        },
      ],
    },
  ];
}
