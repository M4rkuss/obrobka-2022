import { Component, OnInit } from '@angular/core';
import { Int1 } from '../interfaces/int1';
import { Serv1Service } from '../services/serv1.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  footballerList: Int1[] = [];
  constructor(private service: Serv1Service) {}

  getRest(): void {
    this.service.getRest().subscribe((rest1) => {
      this.footballerList = rest1._embedded.footballers;
    });
  }

  ngOnInit(): void {
    this.getRest();

    let add = document.getElementsByClassName('addbtn');
    let addform = document.getElementById('add-hidden');
    let upd = document.getElementsByClassName('updbtn');
    let updform = document.getElementById('upd-hidden');
    let rm = document.getElementsByClassName('rmbtn');
    let rmform = document.getElementById('rm-hidden');

    add[0].addEventListener('click', () => {
      if (addform!.style.display == 'block') {
        addform!.style.display = 'none';
      } else {
        addform!.style.display = 'block';
      }
    });

    upd[0].addEventListener('click', () => {
      if (updform!.style.display == 'block') {
        updform!.style.display = 'none';
      } else {
        updform!.style.display = 'block';
      }
    });

    rm[0].addEventListener('click', () => {
      if (rmform!.style.display == 'block') {
        rmform!.style.display = 'none';
      } else {
        rmform!.style.display = 'block';
      }
    });
  }
}
