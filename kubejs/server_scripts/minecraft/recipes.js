// priority: 0
"use strict";

function registerMinecraftRecipes(e) {
	let ns = global.Namespace;

	const remove_recipes = [ns.mc("enchanting_table"), ns.mc("netherite_ingot")];

	remove_recipes.forEach((recipe) => {
		e.remove({ output: recipe });
	});

	e.shaped(Item.of(ns.mc("enchanting_table"), 1), [" E ", "DCD", "ABA"], {
		A: ns.mc("obsidian"),
		B: ns.mc("crying_obsidian"),
		C: ns.mc("netherite_ingot"),
		D: ns.mc("diamond"),
		E: ns.mc("enchanted_book"),
	});

	e.shaped(Item.of(ns.mc("netherite_ingot"), 1), ["AAA", "ABB", "BBB"], {
		A: ns.arcana("deorum_ingot"),
		B: ns.mc("netherite_scrap"),
	});

	e.shaped(Item.of(ns.mc("chest"), 1), ["AAA", "A A", "AAA"], {
		A: ns.ars("archwood_planks"),
	});
}
