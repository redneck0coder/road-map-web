import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {

  chapters = [
    {id: 0, name: 'Chapter 1'},
    {id: 1, name: 'Chapter 2'},
    {id: 2, name: 'Chapter 3'},
    {id: 3, name: 'Chapter 4'},
    {id: 4, name: 'Chapter 5'},
    {id: 5, name: 'Chapter 6'},
    {id: 6, name: 'Chapter 7'},
    {id: 7, name: 'Chapter 8'},
    {id: 8, name: 'Chapter 9'},
    {id: 9, name: 'Chapter 10'},
    {id: 10, name: 'Chapter 11'},
    {id: 11, name: 'Chapter 12'},
    {id: 12, name: 'Chapter 13'},
    {id: 13, name: 'Chapter 14'},
  ]

  constructor() { }

  getAll() {
    return this.chapters;
  }
}
