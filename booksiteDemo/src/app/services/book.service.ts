import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable, tap } from 'rxjs'
import { Book } from '../models/book'

@Injectable()
export class BookService {
  url = 'http://localhost:3000/books'
  // url_firebase = 'https://frontend-proje-default-rtdb.firebaseio.com/'

  constructor(private http: HttpClient) {}

getBooks(categoryId: number): Observable<Book[]> {
  let newUrl=this.url;

  if(categoryId){
    newUrl+='?categoryId='+categoryId;
  }
  return this.http.get<Book[]>(newUrl)
  }


  getBookById(bookId:number):Observable<Book>{
    return this.http.get<Book>(this.url+'/'+bookId)
  }


  
}
