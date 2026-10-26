import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor(
    private sessionService: SessionService
  ) { }

  async ngOnInit() {

    const role = await this.sessionService.getRole();

    console.log(role);
    
  }

}
