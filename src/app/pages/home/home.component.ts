import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { searchResult } from 'src/app/models/resultmodel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchQuery = '';
  results: searchResult[] = [];

  constructor(private SearchService: SearchService) {}

  ngOnInit(): void {}
  onClick() {
    this.results = this.SearchService.search(this.searchQuery);
  }
}
