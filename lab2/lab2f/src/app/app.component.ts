import { Component } from '@angular/core';
import { Footballers } from './interfaces/footballers';
import { Service1Service } from './services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lab1f';
  footballersList: Footballers[] = [];

  constructor(private service: Service1Service) {}
  getFootballers(): void {
    this.service.getFootballers().subscribe((footballers) => {
      this.footballersList = footballers;
    });
  }
  addFootballers(footballers: Footballers) {
    this.service.setFootballers(footballers).subscribe((footballers) => {
      console.log(footballers);
      this.getFootballers();
    });
  }
}
