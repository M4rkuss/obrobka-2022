import { Component } from '@angular/core';
import { Foorballers } from './interfaces/foorballers';
import { Service1Service } from './services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lab1f';

  foorballersList: Foorballers[] = [];

  constructor(private service: Service1Service) {}
  getFoorballers(): void {
    this.service.getFoorballers().subscribe((foorballers) => {
      this.foorballersList = foorballers;
    });
  }
}
