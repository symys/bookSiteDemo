import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
  providers: [BookService]
})
export class AuthorDetailComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService,
    private activatedRoute: ActivatedRoute) { }

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
