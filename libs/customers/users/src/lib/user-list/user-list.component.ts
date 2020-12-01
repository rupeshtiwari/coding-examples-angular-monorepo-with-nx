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
        company: 'Alfreds Futterkiste',
        country: 'Germany',
      },
      {
        name: 'Christina Berglund',
        company: 'Berglunds snabbköp',
        country: 'Sweden',
      },
      {
        name: 'Francisco Chang',
        company: 'Centro comercial Moctezuma',
        country: 'Mexico',
      },
      {
        name: 'Roland Mendel',
        company: 'Ernst Handel',
        country: 'Austria',
      },
      {
        name: 'Helen Bennett',
        company: 'Island Trading',
        country: 'UK',
      },

      {
        name: 'Philip Cramer',
        company: 'Königlich Essen',
        country: 'Germany',
      },
      {
        name: 'Laughing Bacchus Winecellars',
        company: 'Yoshi Tannamuri',
        country: 'Canada',
      }
    );
  }

}
