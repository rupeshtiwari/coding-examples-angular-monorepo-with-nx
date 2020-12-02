import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private _snackBar: MatSnackBar) {}
  user: User = {};
  showThanks = false;

  ngOnInit(): void {}

  addUser() {
    this.showThanks = true;
    this._snackBar.open(
      `${this.user.firstName} ${this.user.lastName} added successfully!`,
      'Thanks',
      {
        duration: 3 * 1000,
      }
    );
  }
}
