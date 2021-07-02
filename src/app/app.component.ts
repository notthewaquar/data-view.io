import { Component, ElementRef, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'data-view-io';
  themeStatus: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  changeTheme(): void {
    let themeModeLink = (<HTMLLinkElement>document.getElementById('themeMode'))
      .href;
    if (themeModeLink.includes('mdc-light-indigo.css')) {
      (<HTMLLinkElement>document.getElementById('themeMode')).href =
        'assets/css/mdc-dark-indigo.css';
    } else {
      (<HTMLLinkElement>document.getElementById('themeMode')).href =
        'assets/css/mdc-light-indigo.css';
    }
    this.themeStatus = !this.themeStatus;
  }
}
