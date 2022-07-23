import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  currentUrl: string = '';
  menus: any[] = [
    {
      src: '../../../assets/home.svg',
      name: 'Home',
      route: '/home',
    },
    {
      src: '../../../assets/inquiry.svg',
      name: 'Inquiry',
      route: '/inquiry',
    },
    {
      src: '../../../assets/report.svg',
      name: 'Report',
      route: '/report',
    },
    {
      src: '../../../assets/settings.svg',
      name: 'Setting',
      route: '/setting',
    },
  ];
  constructor(private route: Router) {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit(): void {
  }

  isActive(route: string): boolean {
    if (this.currentUrl === '/') {
      this.currentUrl = '/inquiry';
    }
    if (route === '/inquiry' && this.currentUrl.includes('inquiry')) {
      return true;
    }
    if (route === '/setting' && this.currentUrl.includes('setting')) {
      return true;
    }
    return this.currentUrl === route;
  }

  navigate(route: string): void {
    this.route.navigateByUrl(route);
  }

}
