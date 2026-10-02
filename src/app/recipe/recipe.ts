import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-recipe',
  styleUrl: './recipe.css',
  templateUrl: './recipe.html',
})
export class Recipe {
  name = 'Український борщ';
  photo = 'borscht.jpg';
  ingredients = [
    { name: 'Буряк', amount: '2 шт.' },
    { name: 'Картопля', amount: '3 шт.' },
    { name: 'Капуста', amount: '300 г' },
    { name: 'Морква', amount: '1 шт.' },
    { name: 'Цибуля', amount: '1 шт.' },
    { name: 'Томатна паста', amount: '2 ст. л.' },
    { name: 'М\'ясо на кістці', amount: '500 г' },
    { name: 'Вода', amount: '2.5 л' },
  ];
  steps = [
    'Зваріть м\'ясний бульйон приблизно 1,5 години.',
    'Наріжте картоплю та капусту, додайте в бульйон.',
    'Обсмажте цибулю, моркву та буряк із томатною пастою.',
    'Додайте засмажку в борщ і варіть 15 хвилин.',
    'Посоліть, додайте часник і зелень, дайте настоятися.',
  ];
}
