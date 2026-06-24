// priority: 100
"use strict";

ServerEvents.recipes((e) => {
	registerArsRecipes(e);
	registerApotheosisRecipes(e);
	registerLOHRecipes(e);
	registerCreateRecipes(e);
	registerSimplySwordsRecipes(e);
	registerRefmRecipes(e);
	registerMinecraftRecipes(e);
});
