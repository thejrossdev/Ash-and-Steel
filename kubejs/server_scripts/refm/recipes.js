// priority: 0
// requires:refm
"use strict";

function registerRefmRecipes(e) {
	let ns = global.Namespace;

	const remove_recipes = [
<<<<<<< HEAD
		ns.refm("diamond_rapier"),
		ns.refm("netherite_rapier"),
		ns.refm("gold_rapier"),
		ns.refm("iron_rapier"),
=======
		ns.rfm("diamond_rapier"),
		ns.rfm("netherite_rapier"),
		ns.rfm("gold_rapier"),
		ns.rfm("iron_rapier"),
>>>>>>> origin/master
	];

	remove_recipes.forEach((recipe) => {
		e.remove({ output: recipe });
	});
}
