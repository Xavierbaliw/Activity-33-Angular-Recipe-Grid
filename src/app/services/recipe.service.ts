import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    { id: 1, name: 'Caprese Salad', ingredients: ['Fresh mozzarella cheese', 'Tomatoes', 'Fresh basil leaves', 'Olive oil'], imageUrl: 'assets/img/rec1.jpg'},
    { id: 2, name: 'Banana Pancakes', ingredients: ['1 ripe banana', '2 eggs', '1/2 teaspoon baking powder', 'Cinnamon'], imageUrl: 'assets/img/rec2.jpg' },
    { id: 3, name: 'Garlic Butter Shrimp', ingredients: ['1 pound shrimp', '4 tablespoons butter', '3 garlic cloves', 'Lemon juice'], imageUrl: 'assets/img/rec3.jpg' },
    { id: 4, name: 'Peanut Butter Banana Smoothie', ingredients: ['1 ripe banana', '2 tablespoons peanut butter', '1 cup milk', 'Ice cubes'], imageUrl: 'assets/img/rec4.jpg' },
    { id: 5, name: 'Avocado Toast', ingredients: ['1 ripe avocado', 'Bread', 'Salt and pepper' , ' Red pepper flakes or lemon juice'], imageUrl: 'assets/img/rec5.jpg' }
  ];

  getRecipes() {
    return this.recipes;
  }
}
