import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {

  protected readonly appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Catálogo',
      url: '/catalog',
      icon: 'grid'
    },
    {
      title: 'Pedidos',
      url: '/orders',
      icon: 'receipt'
    },
  ];

  protected readonly labels: string[] = [];

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) { }

  async logout(){
    
    await this.sessionService.clearSession();

    this.router.navigate(['/login']);

  }

}