import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-animal',
  styleUrl: './animal.css',
  templateUrl: './animal.html',
})
export class Animal {
  name = 'Кіт домашній';
  species = 'Ссавці, родина котячих';
  lifespan = '12–18 років';
  description = 'Лагідна, розумна й незалежна тварина. Любить спати, гратися та мурчати.';
  photo = 'cat.jpg';
}
