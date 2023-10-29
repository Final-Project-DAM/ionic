import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.openWebPage();

    // Browser.addListener('browserFinished', () => {
    //   console.log('Browser finished');
    //   App.exitApp();
    // });
  }

  async openWebPage() {
    try {
      await Browser.open({ url: 'https://final-project-dam.netlify.app'});
    } catch (error) {
      console.error('Error al abrir la página web', error);
    }
  }

}
