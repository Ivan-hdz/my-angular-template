import { Component, OnInit } from '@angular/core';
import {labels, positions} from './create.strings';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  labels = labels;
  form = {
    id: '',
    name: '',
    firstSurname: '',
    secondSurname: '',
    title: ''
  };

  positions = positions;

  constructor() { }

  ngOnInit() {
  }

  submit() {
  }

}
