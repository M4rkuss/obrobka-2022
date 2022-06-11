import { Component } from '@angular/core';
import { footballerss } from './interfaces/footballers';
import { Service1Service } from './services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lab1f';
  footballerssList: Footballerss[] = [];
}
