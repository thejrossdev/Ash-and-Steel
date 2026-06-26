// priority: 100
"use strict";

ServerEvents.tags("item", (e) => {
	registerAasItemsTags(e);
});

ServerEvents.tags("block", (e) => {
	registerAasBlockTags(e);
});

ServerEvents.tags("worldgen/biome", (e) => {
	registerAasBiomeTags(e);
	registerAasOreBiomeTags(e);
});

ServerEvents.recipes((e) => {
	registerArsRecipes(e);
	registerApotheosisRecipes(e);
	registerLOHRecipes(e);
	registerCreateRecipes(e);
	registerSimplySwordsRecipes(e);
	registerRefmRecipes(e);
	registerMinecraftRecipes(e);
});
