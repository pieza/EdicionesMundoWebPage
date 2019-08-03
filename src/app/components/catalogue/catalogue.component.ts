import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'app/entities/book';
import { BookService } from 'app/services/book.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  books: Book[];
  categories: any[] = [
    { text: 'Todos', value: ''}, 
    { text: 'Infantiles', value: 'infatiles'}, 
    { text: 'Diccionarios y enciclopedias', value: 'diccionarios'}
  ];
  title: string;
  category: string;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  ngOnInit() {
    // Combine them both into a single observable
    const urlParams = Observable.combineLatest(
      this.route.params,
      this.route.queryParams,
      (params, queryParams) => ({ ...params, ...queryParams })
    );

    // Subscribe to the single observable, giving us both
    urlParams.subscribe(routeParams => {
      this.title = routeParams.title || '';
      this.category = routeParams.category || '';

      this.load();
    });

    
  }
  onSubmit(){
    this.router.navigate([this.category, this.title != '' ? '?title=' + this.title : '']);
  }
  async load() {
    console.log(this.category, this.title)

    this.books = [];
    this.bookService.findAll(this.category).subscribe(_books => {
      _books.map(_book => {
        if (this.title == undefined || this.title == '' || _book.title.toLowerCase().indexOf(this.title.toLowerCase()) >= 0) {
          this.books.push(_book);
        }
      })
    });
  }
}
