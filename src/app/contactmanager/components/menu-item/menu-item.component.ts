import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../../models/nav-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() items: NavItem[];
  @ViewChild('childMenu') public childMenu;

  constructor(public router: Router) {}

  ngOnInit() {}
}
