import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogService } from '@myorg/shared/logger';
export interface User {
  firstName?: string;
  lastName?: string;
}
@Component({
  selector: 'myorg-cue-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
})
export class AdduserComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar, private logService: LogService) {}
  user: User = {};
  showThanks = false;

  ngOnInit(): void {}

  addUser() {
    this.showThanks = true;
    const msg =`${this.user.firstName} ${this.user.lastName} added successfully!`;
    
    this.logService.log(msg);
    this._snackBar.open(
      msg,
      'Thanks',
      {
        duration: 3 * 1000,
      }
    );
  }
}
