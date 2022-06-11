import { Component, OnInit, Input, Output } from '@angular/core';
import { Footballers } from '../interfaces/footballers';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-rm',
  templateUrl: './rm.component.html',
  styleUrls: ['./rm.component.scss'],
})
export class RmComponent implements OnInit {
  footballersList: Footballers[] = [];
  constructor(private service: Service1Service) {}

  getFootballers(): void {
    this.service.getFootballers().subscribe((footballers) => {
      this.footballersList = footballers;
      this.service.setList(footballers);
    });
  }

  ngOnInit(): void {
    this.getFootballers();
  }

  removeFootballers(footballers: Footballers) {
    this.service.deleteFootballers(footballers).subscribe(() => {
      this.getFootballers();
    });
  }
}
