import { Component, OnInit, Input, Output } from '@angular/core';
import { Footballers } from '../interfaces/footballers';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  FootballersList: Footballers[] = [];

  constructor(private service: Service1Service) {}

  ngOnInit(): void {}

  getFootballers(): void {
    this.service.getFootballers().subscribe((footballers) => {
      this.FootballersList = footballers;
      this.service.setList(footballers);
    });
  }

  addFootballers(footballers: Footballers) {
    this.service.postFootballers(footballers).subscribe(() => {
      this.getFootballers();
    });
  }
}
