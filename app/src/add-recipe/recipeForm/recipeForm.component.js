class RecipeFormCtrl {
  constructor() {
    'ngInject';
  }

  addRecipe() {
    this.onSubmit({
      recipe: {
        contributor: this.contributor,
        title: this.title,
        ingredients: this.ingredients,
        steps: this.steps,
        description: this.description,
        //categories
        //isVegetarian
      }
    });
  }
}

angular.module('vegapie')
  .component('recipeForm', {
    bindings: {
      onSubmit: '&',
    },
    controller: RecipeFormCtrl,
    templateUrl: 'src/add-recipe/recipeForm/recipeForm.tpl.html',
  });