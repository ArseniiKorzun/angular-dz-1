import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-book',
  styleUrl: './book.css',
  templateUrl: './book.html',
})
export class Book {
  title = 'Майстер і Маргарита';
  author = 'Михайло Опанасович Булгаков';
  genre = 'Роман, фантастика, сатира';
  pages = 480;
}
