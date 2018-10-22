import {Component, OnInit} from '@angular/core';
import {UserService} from 'src/app/shared/services/user.service';
import {APP_NAME} from 'src/environments/environment';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {labels} from './login.strings';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  labels = labels;
  app_name = APP_NAME;
  id: string;
  password: string;
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
  }

  submit() {
    if (this.id === '') {
      return;
    }
    this.showSnackBar(this.labels.snackBarMessage, this.labels.snackBarAction, 2500);
    if (!this.authService.authenticate()) {
      return;
    }
    // this.router.navigate(['/chat']);
  }
  showSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, {
      duration: duration
    });
  }
}
