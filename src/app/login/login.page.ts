import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
  }

  async login() {

    await this.sessionService.saveRole('cliente');

    this.router.navigate(['/home']);

  }

}