import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) {}

  goToRemote() {
    this.router
      .navigate(['/angular13'])
      .then((res) => {
        console.log('res :', res);
      })
      .catch((err) => {
        console.log('error :', err);
        this.router.navigate(['/404'])
      });
  }

  clearCache() {
    window['cache'].clear()
  }

  openCamera() {

  }

  getNative() {
    
  }

}
