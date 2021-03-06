import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Authentication } from '@core/authentication/authentication';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public token;

  constructor(
    private router: Router,
    private authentication: Authentication,
  ) {
    this.loadAuth();
  }

  async loadAuth() {
    try {
      await this.authentication.loadAuth();
      this.token = this.authentication.token;
    } catch (error) {
      
    }
  }

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

  async openCamera() {
    await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  }

}
