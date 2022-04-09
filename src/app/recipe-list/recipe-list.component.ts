import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Fried Rice',
      'R',
      'https://therecipecritic.com/wp-content/uploads/2019/07/easy_fried_rice-1-500x500.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
