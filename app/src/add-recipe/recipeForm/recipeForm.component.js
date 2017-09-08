class RecipeFormCtrl {
  constructor(recipeData) {
    'ngInject';

    this.categories = [];
    this.categoryOptions = _.map(recipeData.getCategories(), (category) => {
      return {
        id: category.value,
        label: category.display,
      };
    });
  }

  addRecipe() {
    this.onSubmit({
      recipe: {
        contributor: this.contributor,
        title: this.title,
        ingredients: this.ingredients,
        steps: this.steps,
        description: this.description,
        categories: this.categories,
        isVegetarian: this.isVegetarian,
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