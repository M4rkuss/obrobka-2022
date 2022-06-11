import { Component, OnInit } from '@angular/core';
import { Footballers } from 'src/app/interfaces/footballers';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
})
export class Component1Component implements OnInit {
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
