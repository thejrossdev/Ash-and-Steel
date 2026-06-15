// priority: 0
// requires:simplyswords
"use strict";

function registerSimplySwordsRecipes(e) {
	let ns = global.Namespace;

	const remove_recipes = [
		ns.ss("netherite_cutlass"),
		ns.ss("diamond_cutlass"),
		ns.ss("gold_cutlass"),
		ns.ss("iron_cutlass"),
	];

	remove_recipes.forEach((recipe) => {
		e.remove({ output: recipe });
	});
}
