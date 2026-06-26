// priority: 0
"use strict";

const registerOreBlockTags = (event) => {
	// All ores tag
	global.ORES.ALL.forEach((ore) => {
		event.add(global.TAGS.ORES_ALL, ore);
	});

	// Iron ores tag
	global.ORES.IRON.forEach((ore) => {
		event.add(global.TAGS.ORES.IRON, ore);
	});

	// Coal ores tag
	global.ORES.COAL.forEach((ore) => {
		event.add(global.TAGS.ORES.COAL, ore);
		event.add("minecraft:coal_ores", ore);
		event.add("forge:ores/coal", ore);
		event.add("mowziesmobs:geomancy_useable", ore);
		event.add("mowziesmobs:geomancy_tunnelable", ore);
		event.add("mowziesmobs:can_grottol_dig", ore);
	});

	// Gold ores tag
	global.ORES.GOLD.forEach((ore) => {
		event.add(global.TAGS.ORES.GOLD, ore);
	});

	// Copper ores tag
	global.ORES.COPPER.forEach((ore) => {
		event.add(global.TAGS.ORES.COPPER, ore);
	});

	// Redstone ores tag
	global.ORES.REDSTONE.forEach((ore) => {
		event.add(global.TAGS.ORES.REDSTONE, ore);
	});

	// Emerald ores tag
	global.ORES.EMERALD.forEach((ore) => {
		event.add(global.TAGS.ORES.EMERALD, ore);
	});

	// Lapis ores tag
	global.ORES.LAPIS.forEach((ore) => {
		event.add(global.TAGS.ORES.LAPIS, ore);
	});

	// Diamond ores tag
	global.ORES.DIAMOND.forEach((ore) => {
		event.add(global.TAGS.ORES.DIAMOND, ore);
	});

	// Zinc ores tag
	global.ORES.ZINC.forEach((ore) => {
		event.add(global.TAGS.ORES.ZINC, ore);
	});

	// Mithril ores tag
	global.ORES.MITHRIL.forEach((ore) => {
		event.add(global.TAGS.ORES.MITHRIL, ore);
	});

	// Citrin ores tag
	global.ORES.CITRIN.forEach((ore) => {
		event.add(global.TAGS.ORES.CITRIN, ore);
	});

	// Moonlight ores tag
	global.ORES.MOONLIGHT.forEach((ore) => {
		event.add(global.TAGS.ORES.MOONLIGHT, ore);
	});

	// Scarlet ores tag
	global.ORES.SCARLET.forEach((ore) => {
		event.add(global.TAGS.ORES.SCARLET, ore);
	});

	// Enderium ores tag
	global.ORES.ENDERIUM.forEach((ore) => {
		event.add(global.TAGS.ORES.ENDERIUM, ore);
	});

	// Arcane crystal ores tag
	global.ORES.ARCANE_CRYSTAL.forEach((ore) => {
		event.add(global.TAGS.ORES.ARCANE_CRYSTAL, ore);
	});

	// Xpetrified ores tag
	global.ORES.XPETRIFIED.forEach((ore) => {
		event.add(global.TAGS.ORES.XPETRIFIED, ore);
	});

	// Silver ores tag
	global.ORES.SILVER.forEach((ore) => {
		event.add(global.TAGS.ORES.SILVER, ore);
	});

	// Ebony ores tag
	global.ORES.EBONY.forEach((ore) => {
		event.add(global.TAGS.ORES.EBONY, ore);
	});

	// Sapphire ores tag
	global.ORES.SAPPHIRE.forEach((ore) => {
		event.add(global.TAGS.ORES.SAPPHIRE, ore);
	});

	// Black matter ores tag
	global.ORES.BLACK_MATTER.forEach((ore) => {
		event.add(global.TAGS.ORES.BLACK_MATTER, ore);
	});

	// Ruby ores tag
	global.ORES.RUBY.forEach((ore) => {
		event.add(global.TAGS.ORES.RUBY, ore);
	});

	// Topaz ores tag
	global.ORES.TOPAZ.forEach((ore) => {
		event.add(global.TAGS.ORES.TOPAZ, ore);
	});

	// Iridium ores tag
	global.ORES.IRIDIUM.forEach((ore) => {
		event.add(global.TAGS.ORES.IRIDIUM, ore);
	});

	// Onyx ores tag
	global.ORES.ONYX.forEach((ore) => {
		event.add(global.TAGS.ORES.ONYX, ore);
	});

	// Profaned ores tag
	global.ORES.PROFANED.forEach((ore) => {
		event.add(global.TAGS.ORES.PROFANED, ore);
	});

	// Iridescent ores tag
	global.ORES.IRIDESCENT.forEach((ore) => {
		event.add(global.TAGS.ORES.IRIDESCENT, ore);
	});

	// Iridescent ores tag
	global.ORES.DAEMONIUM.forEach((ore) => {
		event.add(global.TAGS.ORES.DAEMONIUM, ore);
	});

	// Gaianite ores tag
	global.ORES.GAIANITE.forEach((ore) => {
		event.add(global.TAGS.ORES.GAIANITE, ore);
	});

	// Dimlite ores tag
	global.ORES.DIMLITE.forEach((ore) => {
		event.add(global.TAGS.ORES.DIMLITE, ore);
	});

	// Titanium ores tag
	global.ORES.TITANIUM.forEach((ore) => {
		event.add(global.TAGS.ORES.TITANIUM, ore);
	});

	// Quartz ores tag
	global.ORES.QUARTZ.forEach((ore) => {
		event.add(global.TAGS.ORES.QUARTZ, ore);
	});

	// Ancient debris ores tag
	global.ORES.ANCIENT_DEBRIS.forEach((ore) => {
		event.add(global.TAGS.ORES.ANCIENT_DEBRIS, ore);
	});

	// Uranium ores tag
	global.ORES.URANIUM.forEach((ore) => {
		event.add(global.TAGS.ORES.URANIUM, ore);
	});

	// Stella arcanum ores tag
	global.ORES.STELLA_ARCANUM.forEach((ore) => {
		event.add(global.TAGS.ORES.STELLA_ARCANUM, ore);
	});

	// Igneous ores tag
	global.ORES.IGNEOUS.forEach((ore) => {
		event.add(global.TAGS.ORES.IGNEOUS, ore);
	});
};
