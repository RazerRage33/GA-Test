import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ROUTE } from 'src/app/APP_CONFIG';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  menus = [
    {
      name: 'Dashboard',
      icon: 'grid_view',
      link: 'production-order-form',
    },
    {
      name: 'Report',
      icon: 'grid_view',
      link: 'moulding-parameters-report',
    },
    {
      name: 'Production Order',
      icon: 'factory',
      link: 'production-order',
    },
  ];

  routes = ROUTE;

  constructor() {}

  ngOnInit(): void {
    this.bindTopNav();
  }

  /**
   * open side nav
   */
  openMenu() {
    const sideMenu = document.querySelector('aside');
    sideMenu!.style.display = 'block';
  }

  /**
   * close side nav
   */
  closeMenu() {
    const sideMenu = document.querySelector('aside');
    sideMenu!.style.display = 'none';
  }

  /**
   * top nav animation
   */
  bindTopNav() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar')!.style.top = '0';
        document.getElementById('navbar')!.style.boxShadow =
          '0 1rem 1rem rgba(132, 139, 200, 0.18)';
      } else {
        document.getElementById('navbar')!.style.top = '-4.6rem';
        document.getElementById('navbar')!.style.boxShadow = 'none';
      }
      prevScrollpos = currentScrollPos;
    };
  }
}
