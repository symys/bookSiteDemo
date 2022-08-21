import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {
  // books$ = this.http.get('http://localhost:3000/books');
  booksTitle:string="Book List"
  books: Book[] = [];

 

  constructor( private bookService: BookService,
    private activatedRoute: ActivatedRoute,) { }

// bookRepository = new BookRepository();
// books = this.bookRepository.getBooks();


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.bookService
        .getBooks(params['categoryId'])
        .subscribe((data) => {
          this.books = data
        })
    })
  }
  
}
