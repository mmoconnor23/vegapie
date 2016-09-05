'use strict';

function recipeData($q) {
	var categories = [
		{
			display: 'Appetizer',
			value: 'appetizer'
		}, {
			display: 'Dessert',
			value: 'dessert'
		}, {
			display: 'Pasta',
			value: 'pasta'
		}, {
			display: 'Soup',
			value: 'soup'
		}, {
			display: 'Casserole',
			value: 'casserole'
		}, {
			display: 'Sandwich',
			value: 'sandwich'
		}, {
			display: 'Entree (other)',
			value: 'entree'
		}
	];

	var recipes = [{
		title: 'Sample Recipe Title',
		contributor: 'Melissa O\'Connor',
		steps: ['Step 1', 'Step 2', 'Step 3'],
		ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
		pictures: ['img1', 'img2'],
		category: 'entree',
		isVegetarian: true,
		description: 'This is a sample recipe. I will use it to test the styling of the display page.'
	}, {
		title: 'Sample Recipe Title',
		contributor: 'Melissa O\'Connor',
		steps: ['Step 1', 'Step 2', 'Step 3'],
		ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
		pictures: ['img1', 'img2'],
		category: 'entree',
		isVegetarian: true,
		description: 'This is a sample recipe. I will use it to test the styling of the display page.'
	}, {
		title: 'Sample Recipe Title',
		contributor: 'Melissa O\'Connor',
		steps: ['Step 1', 'Step 2', 'Step 3'],
		ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
		pictures: ['img1', 'img2'],
		category: 'entree',
		isVegetarian: true,
		description: 'This is a sample recipe. I will use it to test the styling of the display page.'
	}, {
		title: 'Sample Recipe Title',
		contributor: 'Melissa O\'Connor',
		steps: ['Step 1', 'Step 2', 'Step 3'],
		ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
		pictures: ['img1', 'img2'],
		category: 'entree',
		isVegetarian: false,
		description: 'This is a sample recipe. I will use it to test the styling of the display page.'
	}, {
		title: 'Sample Recipe Title',
		contributor: 'Melissa O\'Connor',
		steps: ['Step 1', 'Step 2', 'Step 3'],
		ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'],
		pictures: ['img1', 'img2'],
		category: 'entree',
		isVegetarian: false,
		description: 'This is a sample recipe. I will use it to test the styling of the display page.'
	}];

	function getCategories() {
		return categories;
	}

	function getRecipes() {
		return $q.when(recipes);
	}

	return {
		getCategories: getCategories,
		getRecipes: getRecipes
	}
}

angular
	.module('vegapie')
	.service('recipeData', recipeData);