import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'app/entities/book';
import { BookService } from 'app/services/book.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  books: Book[];
  categories: string[] = ['Todos', 'Infantiles', 'Diccionarios y enciclopedias']
  
  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.load();
  }
  
  load() {
    this.bookService.findAll().subscribe(_books => {
      this.books = _books;
    });
  }

}
