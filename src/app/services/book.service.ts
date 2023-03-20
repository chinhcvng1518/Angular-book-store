import { Injectable } from '@angular/core';
import { sample_books, sample_tags } from 'src/data';
import { Book } from '../shared/models/Book';
import { Tag } from '../shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  getAll():Book[] {
    return sample_books;
  }
  getAllBooksBySearchTerm(searchTerm: string) {
    return this.getAll().filter(book => book.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getAllTags(): Tag[] {
    return sample_tags;
  }
  getAllBooksByTag(tag: string): Book[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(book => book.tags?.includes(tag));
  }

  getBookById(bookId:string):Book{
    return this.getAll().find(book => book.id == bookId) ?? new Book();
  }
}
