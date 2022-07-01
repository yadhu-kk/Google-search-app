import { Component, OnInit } from '@angular/core';

import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchItem = '';
  Resultmodel: any;

  constructor(private http: SearchService) {}

  ngOnInit(): void {}
  onSubmit() {
    this.Resultmodel = this.http.search(this.searchItem);
  }
}
