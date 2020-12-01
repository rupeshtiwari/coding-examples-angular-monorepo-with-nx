import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myorg-cu-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }
  list = [];
  ngOnInit(): void {
    this.list.push(
      {
        name: 'Maria Anders',
        compnay: 'Alfreds Futterkiste',
        country: 'Germany',
      },
      {
        name: 'Christina Berglund',
        compnay: 'Berglunds snabbköp',
        country: 'Sweden',
      },
      {
        name: 'Francisco Chang',
        compnay: 'Centro comercial Moctezuma',
        country: 'Mexico',
      },
      {
        name: 'Roland Mendel',
        compnay: 'Ernst Handel',
        country: 'Austria',
      },
      {
        name: 'Helen Bennett',
        compnay: 'Island Trading',
        country: 'UK',
      },

      {
        name: 'Philip Cramer',
        compnay: 'Königlich Essen',
        country: 'Germany',
      },
      {
        name: 'Laughing Bacchus Winecellars',
        compnay: 'Yoshi Tannamuri',
        country: 'Canada',
      }
    );
  }

}
