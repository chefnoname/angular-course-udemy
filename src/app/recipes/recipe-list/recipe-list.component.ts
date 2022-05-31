import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Canjeero & Kille',
      'Samiras Fav Munch',
      'https://i.pinimg.com/originals/8a/1f/36/8a1f36df3b67f6a4184975c74503ee41.jpg'
    ),
    new Recipe(
      'Canjeero & Kille',
      'Samiras Fav Munch',
      'https://i.pinimg.com/originals/8a/1f/36/8a1f36df3b67f6a4184975c74503ee41.jpg'
    ),
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
