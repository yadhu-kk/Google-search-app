import { Injectable } from '@angular/core';
import { searchResult } from '../models/resultmodel';
const mockResults: searchResult[] = [
  {
    url: 'https://angular.io/',
    title: 'angular',
    description:
      'Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces',
    date: new Date('2022-02-01'),
    links: ['https://angular.io/'],
  },
  {
    url: 'https://www.w3schools.com/js/',
    title: 'JavaScript Tutorial - W3Schools',
    description:
      'JavaScript is the programming language of the Web. JavaScript is easy to learn',
    date: new Date('2022 - 03 - 04'),
    links: ['https://www.w3schools.com/js/'],
  },
];

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}
  search(query: string): searchResult[] {
    return mockResults.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
  }
}
