import { Component, OnInit } from '@angular/core';
import {APP_NAME} from '../../../../environments/environment';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  appName = APP_NAME;

  constructor() { }

  ngOnInit() {
  }

}
