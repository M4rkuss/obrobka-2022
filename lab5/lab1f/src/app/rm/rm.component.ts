import { Component, OnInit, Input, Output } from '@angular/core';
import { Int1 } from '../interfaces/int1';
import { Serv1Service } from '../services/serv1.service';

@Component({
  selector: 'app-rm',
  templateUrl: './rm.component.html',
  styleUrls: ['./rm.component.scss'],
})
export class RmComponent implements OnInit {
  footballerList: Int1[] = [];
  constructor(private service: Serv1Service) {}

  getRest(): void {
    this.service.getRest().subscribe((rest1) => {
      this.footballerList = rest1._embedded.footballers;
    });
  }

  ngOnInit(): void {
    this.getRest();
  }

  removeRest(footballer: Int1) {
    this.service.deleteRest(footballer).subscribe(() => {
      this.getRest();
    });
  }
}
