import { Component } from '@angular/core';
import { Int1 } from './interfaces/int1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lab1f';
  footballersList: Int1[] = [];
}
