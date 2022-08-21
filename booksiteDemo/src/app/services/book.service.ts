import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, tap } from 'rxjs'
import { Book } from '../models/book'

@Injectable()
export class BookService {
  url = 'http://localhost:3000/'
  url_firebase = 'https://frontend-proje-default-rtdb.firebaseio.com/'

  constructor(private http: HttpClient) {}

seciliKitap:Book;
getBooks(categoryId: number): Observable<Book[]> {
    return this.http.get<Book[]>(this.url + 'books').pipe(
      map((response) => {
        const books: Book[] = []

        for (const key in response) {
          if (categoryId) {
            if (categoryId == response[key].categoryId) {
                books.push({ ...response[key], id: key })
            }
          } else {
            books.push({ ...response[key], id: key })
          }
        }

        return books
      }),
      tap((data) => console.log(data)),
    )
  }


  getBookById(bookId:number): Observable<Book>{
    return this.http.get<Book>(this.url + 'book-detail/' + bookId)
  }
}
