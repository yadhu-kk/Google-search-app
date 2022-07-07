import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { searchResult } from 'src/app/models/resultmodel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showMe: boolean = true;
  searchQuery = '';
  results: searchResult[] = [];
  appIcons = [
    { backgroundPosition: '0px -1104px', label: 'Gmail' },
    { backgroundPosition: '0px -2001px', label: 'Drive' },
    { backgroundPosition: '0px -69px', label: 'Docs' },
    { backgroundPosition: '0px -966px', label: 'Sheets' },
    { backgroundPosition: '0px -276px', label: 'Slides' },
    { backgroundPosition: '0px -621px', label: 'Calendar' },
    { backgroundPosition: '0px -138px', label: 'Chat' },
    { backgroundPosition: '0px -2691px', label: 'Meet' },
    { backgroundPosition: '0px -2415px', label: 'Forms' },
    { backgroundPosition: '0px -1242px', label: 'Currents' },
    { backgroundPosition: '0px -1380px', label: 'Sites' },
    { backgroundPosition: '0px -1587px', label: 'Contacts' },
  ];
  constructor(private SearchService: SearchService) {}

  ngOnInit(): void {}
  onClick() {
    this.results = this.SearchService.search(this.searchQuery);
  }
  toggleTag() {
    this.showMe = !this.showMe;
  }
}
