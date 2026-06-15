// priority: 0
// requires: apotheosis
"use strict";

function registerApotheosisRecipes(e) {
	let ns = global.Namespace;

	const remove_recipes = [ns.apo("simple_reforging_table")];

	remove_recipes.forEach((recipe) => {
		e.remove({ output: recipe });
	});

	e.shaped(Item.of(ns.apo("simple_reforging_table"), 1), [" B ", "DAD", "CCC"], {
		A: ns.mc("smithing_table"),
		B: ns.mc("iron_ingot"),
		C: ns.mc("smooth_stone"),
		D: ns.apo("gem_dust"),
	});

	/**
	 * Minecraft
	 * */
	e.remove({ output: ns.mc("pufferfish") });
}
