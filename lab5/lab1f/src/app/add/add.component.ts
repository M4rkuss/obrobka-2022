import { Component, OnInit, Input, Output } from '@angular/core';
import { Int1 } from '../interfaces/int1';
import { Serv1Service } from '../services/serv1.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  footballerList: Int1[] = [];
  constructor(private service: Serv1Service) {}

  ngOnInit(): void {}

  getRest(): void {
    this.service.getRest().subscribe((rest1) => {
      this.footballerList = rest1._embedded.footballers;
    });
  }

  addRest(footballer: Int1) {
    this.service.postRest(footballer).subscribe(() => {
      this.getRest();
    });
  }
}
