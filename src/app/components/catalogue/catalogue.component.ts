import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'app/entities/book';
import { BookService } from 'app/services/book.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  books: Book[];
  categories: string[] = ['Todos', 'Infantiles', 'Diccionarios y enciclopedias'];
  title:string;
  category: string;
  
  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  ngOnInit() {
      this.load()  
  }
  
  async load() {
    this.title = this.route.snapshot.queryParamMap.get("title");
    this.category = this.route.snapshot.paramMap.get("category");

    console.log(this.category, this.title)

    this.books = [];
    this.bookService.findAll(this.category).subscribe(_books => {
      _books.map(_book => {
        if(this.title == undefined || this.title == '' || _book.title.toLowerCase().indexOf(this.title.toLowerCase()) >= 0){
          this.books.push(_book);
        }
      })
    });
  }

  byRoute(param: string){
    this.route.queryParams.subscribe(params => {
      console.log( params[param]);
    });
  }
}
