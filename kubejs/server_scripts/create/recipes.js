// priority: 0
// requires: create
"use strict";

function registerCreateRecipes(e) {
	let ns = global.Namespace;
	const { create } = e.recipes;

	/**
	 * Minecraft
	 * */

	// Tuff
	create.splashing(ns.mc("tuff"), ns.mc("cobblestone")).processingTime(10);

	// Iron plate restoration
	create.pressing("create:iron_sheet", "#forge:ingots/iron");

	// Diorite
	create.filling(ns.mc("diorite"), [Fluid.of(ns.mc("water"), 500), ns.mc("cobblestone")]);

	// Granite
	create.filling(ns.mc("granite"), [Fluid.of(ns.mc("lava"), 100), ns.mc("diorite")]);

	// Sand ==> clay + copper nugget
	create.splashing(
		[
<<<<<<< HEAD
			Item.of(ns.cr("copper_nugget"), 6).withChance(0.3),
			Item.of(ns.mc("clay_ball"), 1).withChance(0.4),
			Item.of(ns.mc("clay_ball"), 3).withChance(0.3),
=======
			ns.cr("copper_nugget", 6).withChance(0.3),
			ns.mc("clay_ball", 1).withChance(0.4),
			ns.mc("clay_ball", 3).withChance(0.3),
>>>>>>> origin/master
		],
		ns.mc("sand"),
	);

	// Clay ==> kelp, seaweed, sea cucumbers
	create.splashing(
		[
<<<<<<< HEAD
			Item.of(ns.mc("kelp"), 1).withChance(0.3),
			Item.of(ns.mc("seagrass"), 1).withChance(0.35),
			Item.of(ns.mc("sea_pickle"), 1).withChance(0.35),
=======
			ns.mc("kelp", 1).withChance(0.3),
			ns.mc("seagrass", 1).withChance(0.35),
			ns.mc("sea_pickle", 1).withChance(0.35),
>>>>>>> origin/master
		],
		ns.mc("clay"),
	);

	/**
	 * Ice and fire
	 * */
	const fireBlood = "fire_dragon_blood";
	const iceBlood = "ice_dragon_blood";
	const lightningBlood = "lightning_dragon_blood";
	const darkBlood = "dark_dragon_blood";

	create.filling(ns.icf(fireBlood), [Fluid.of(ns.kjs(fireBlood), 250), ns.mc("glass_bottle")]).processingTime(350);

	create.emptying([Fluid.of(ns.kjs(fireBlood), 250), ns.mc("glass_bottle")], ns.icf(fireBlood)).processingTime(350);

	create.filling(ns.icf(iceBlood), [Fluid.of(ns.kjs(iceBlood), 250), ns.mc("glass_bottle")]).processingTime(350);

	create.emptying([Fluid.of(ns.kjs(iceBlood), 250), ns.mc("glass_bottle")], ns.icf(iceBlood)).processingTime(350);

	create
		.filling(ns.icf(lightningBlood), [Fluid.of(ns.kjs(lightningBlood), 250), ns.mc("glass_bottle")])
		.processingTime(350);

	create
		.emptying([Fluid.of(ns.kjs(lightningBlood), 250), ns.mc("glass_bottle")], ns.icf(lightningBlood))
		.processingTime(350);

	create
		.mixing(Fluid.of(ns.kjs(darkBlood), 3), [
			Fluid.of(ns.kjs(fireBlood)),
			Fluid.of(ns.kjs(iceBlood)),
			Fluid.of(ns.kjs(lightningBlood)),
		])
		.processingTime(1250)
		.superheated();

	create
		.filling(ns.kjs(`${darkBlood}_bottle`), [Fluid.of(ns.kjs(darkBlood), 250), ns.mc("glass_bottle")])
		.processingTime(350);

	create
		.emptying([Fluid.of(ns.kjs(darkBlood), 250), ns.mc("glass_bottle")], ns.kjs(`${darkBlood}_bottle`))
		.processingTime(350);
}
