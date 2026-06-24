// priority: 0
// requires: ars_nouveau
// requires: create
// requires: legendarysurvivaloverhaul
"use strict";

function registerArsRecipes(e) {
	let ns = global.Namespace;
	const { ars_nouveau } = e.recipes;

	const remove_recipes = [ns.ars("apprentice_spell_book")];

	remove_recipes.forEach((recipe) => {
		e.remove({ output: recipe });
	});

	e.shaped(ns.ars("apprentice_spell_book", 1), ["ABD", "DDC", "CEE"], {
		A: ns.ars("novice_spell_book"),
		B: ns.mc("obsidian"),
		C: ns.ars("magebloom_fiber"),
		D: ns.mc("diamond"),
		E: ns.irsb("arcane_essence"),
	});

	/**
	 * Minecraft
	 * */
	ars_nouveau.imbuement(
		ns.ars("source_gem"),
		ns.mc("feather"), // output
		1000, // source cost
		[
			ns.ars("source_gem"), // input item
			ns.ars("air_essence"),
			ns.mc("feather"),
		],
	);

	/**
	 * Create
	 * */
	ars_nouveau.enchanting_apparatus(
		[ns.cr("zinc_ingot"), ns.cr("zinc_ingot"), ns.ars("manipulation_essence"), ns.ars("source_gem")],
		ns.mc("copper_ingot"), // reagent
		ns.cr("brass_ingot"), // output
		1000,
	);

	/**
	 * Legendary Survival Overhaul
	 * */
	ars_nouveau.enchanting_apparatus(
		[ns.ter("fairy_dust"), ns.ter("fairy_dust"), ns.ter("fairy_dust"), ns.ars("manipulation_essence")],
		ns.loh("ice_fern_seeds"), // reagent
		ns.loh("sun_fern_seeds"), // output
		1000,
	);

	ars_nouveau.enchanting_apparatus(
		[ns.ter("fairy_dust"), ns.ter("fairy_dust"), ns.ter("fairy_dust"), ns.ars("manipulation_essence")],
		ns.loh("sun_fern_seeds"), // reagent
		ns.loh("ice_fern_seeds"), // output
		1000,
	);
}
