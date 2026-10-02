import { Component } from '@angular/core';
import { Book } from './book/book';
import { Animal } from './animal/animal';
import { Recipe } from './recipe/recipe';

@Component({
  imports: [Book, Animal, Recipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
