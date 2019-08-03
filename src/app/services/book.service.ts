import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Book } from 'app/entities/book';
import { Observable } from 'rxjs';

@Injectable()
export class BookService {

  constructor(private db: AngularFirestore) { }

  // findAll(title?: string): Observable<Book[]>  {
  //   return this.db.list<Book>('/books', ref => 
  //     title ? ref.orderByChild('title').equalTo(title) : ref.orderByChild('title')
  //   ).valueChanges();
  // }

  findAll(title?: string): Observable<Book[]>  {
    return this.db.collection<Book>('books', ref => 
      title ? ref.where('title', '>=', title) : ref
    ).valueChanges()
  }
}
