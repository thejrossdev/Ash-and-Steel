// priority: 100
"use strict";

StartupEvents.registry("item", (/** @param {Registry.Item} e */ e) => {
	registerCreateItems(e);
});

StartupEvents.registry("fluid", (/** @param {Registry.Fluid} e */ e) => {
	registerCreateFluids(e);
});

//Platform.mods.aas_core.name = "Ash & Steel";
Platform.mods.kubejs.name = "Ash & Steel";
