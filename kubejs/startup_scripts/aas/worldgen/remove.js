"use strict";

function registerAasRemoveWorldgen(event) {
	const ns = global.Namespace;

	event.removeOres((props) => {
		props.blocks = [
			"#c:ores_in_ground/stone",
			"#c:ores_in_ground/deepslate",
			"#forge:ores_in_ground/stone",
			"#forge:ores_in_ground/deepslate",
			"#forge:ore_bearing_ground/stone",
			"#forge:ore_bearing_ground/deepslate",
		];
	});

	event.removeFeatureById("underground_ores", [
		ns.mc("ore_coal_upper"),
		ns.mc("ore_coal_lower"),
		ns.mc("ore_copper"),
		ns.mc("ore_copper_large"),
		ns.mc("ore_iron_upper"),
		ns.mc("ore_iron_middle"),
		ns.mc("ore_iron_small"),
	]);

	event.removeFeatureById("underground_decoration", [ns.mc("ore_gold_nether"), ns.mc("ore_gold_deltas")]);

	// CREATE
	event.removeFeatureById("underground_ores", [ns.cr("zinc_ore"), ns.cr("deepslate_zinc_ore")]);
}
