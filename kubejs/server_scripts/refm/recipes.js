// priority: 0
// requires:refm
"use strict";

function registerRefmRecipes(e) {
	let ns = global.Namespace;

	const remove_recipes = [
		ns.refm("diamond_rapier"),
		ns.refm("netherite_rapier"),
		ns.refm("gold_rapier"),
		ns.refm("iron_rapier"),
	];

	remove_recipes.forEach((recipe) => {
		e.remove({ output: recipe });
	});
}
