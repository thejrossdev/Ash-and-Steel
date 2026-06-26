// priority: 0
"use strict";

const registerAasOreBiomeTags = (event) => {
	global.BIOME.COAL.forEach((biome) => {
		event.add(global.TAGS.BIOME.ORES.COAL, biome);
	});

	global.BIOME.COAL_LIGNITE.forEach((biome) => {
		event.add(global.TAGS.BIOME.ORES.COAL_LIGNITE, biome);
	});

	global.BIOME.COAL_BITUMINOUS.forEach((biome) => {
		event.add(global.TAGS.BIOME.ORES.COAL_BITUMINOUS, biome);
	});

	global.BIOME.COAL_ANTHRACITE.forEach((biome) => {
		event.add(global.TAGS.BIOME.ORES.COAL_ANTHRACITE, biome);
	});
};
