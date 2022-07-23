import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ANTs';
  hideHeaderNFooter: boolean = false;

  constructor(private router: Router) {

  }

  onActivate(): void {
    if (this.router.url.toLowerCase().includes("login")) {
      this.hideHeaderNFooter = true;
    }
    else {
      this.hideHeaderNFooter = false;
    }

  }


}

