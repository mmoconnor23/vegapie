function AddRecipeCtrl() {
	var _this = this;

	_this.name = '';
}

AddRecipeCtrl.$inject = [];

angular
	.module('vegapie')
	.controller('addRecipeCtrl', AddRecipeCtrl);
