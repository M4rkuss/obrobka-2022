import { Component, OnInit } from '@angular/core';
import { Footballerss } from '../interfaces/footballers';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-upd',
  templateUrl: './upd.component.html',
  styleUrls: ['./upd.component.scss'],
})
export class UpdComponent implements OnInit {
  FootballerssList: Footballerss[] = [];

  constructor(private service: Service1Service) {}

  getFootballerss(): void {
    this.service.getFootballerss().subscribe((footballerss) => {
      this.FootballerssList = footballerss;
      this.service.setList(footballerss);
    });
  }

  ngOnInit(): void {
    this.getFootballerss();
  }

  updateFootballerss(footballerss: Footballerss) {
    this.service.putFootballerss(footballerss).subscribe(() => {
      this.getFootballerss();
    });
  }
}
