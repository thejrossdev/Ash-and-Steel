// priority: 0
// requires:refm
"use strict";

function registerRefmRecipes(e) {
	let ns = global.Namespace;

	const remove_recipes = [
		ns.rfm("diamond_rapier"),
		ns.rfm("netherite_rapier"),
		ns.rfm("gold_rapier"),
		ns.rfm("iron_rapier"),
	];

	remove_recipes.forEach((recipe) => {
		e.remove({ output: recipe });
	});
}
