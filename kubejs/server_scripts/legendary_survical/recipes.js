// priority: 0
// requires: legendarysurvivaloverhaul
"use strict";

function registerLOHRecipes(e) {
	let ns = global.Namespace;

	e.shaped(Item.of(ns.loh("bandage"), 1), [" BA", "BAB", "AB "], {
		A: ns.loh("plaster"),
		B: ns.mc("gold_nugget"),
	});
}
