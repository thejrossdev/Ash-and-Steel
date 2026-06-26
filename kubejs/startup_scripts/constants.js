// priority: -100
"use strict";

let ns = global.Namespace;

/**
 * ====== TAGS ======
 */
global.TAGS = {
	ORES_ALL: "aas:ores",
	ORE: "aas:ore",
	ORES: {
		COAL: `${this.ORE}/coal`,
		IRON: `${this.ORE}/iron`,
		GOLD: `${this.ORE}/gold`,
		COPPER: `${this.ORE}/copper`,
		REDSTONE: `${this.ORE}/redstone`,
		EMERALD: `${this.ORE}/emerald`,
		LAPIS: `${this.ORE}/lapis`,
		DIAMOND: `${this.ORE}/diamond`,
		ZINC: `${this.ORE}/zinc`,
		MITHRIL: `${this.ORE}/mithril`,
		CITRIN: `${this.ORE}/citrin`,
		MOONLIGHT: `${this.ORE}/moonlight`,
		SCARLET: `${this.ORE}/scarlet`,
		ENDERIUM: `${this.ORE}/enderium`,
		ARCANE_CRYSTAL: `${this.ORE}/arcane_crystal`,
		XPETRIFIED: `${this.ORE}/xpetrified`,
		SILVER: `${this.ORE}/silver`,
		EBONY: `${this.ORE}/ebony`,
		SAPPHIRE: `${this.ORE}/sapphire`,
		BLACK_MATTER: `${this.ORE}/black_matter`,
		RUBY: `${this.ORE}/ruby`,
		TOPAZ: `${this.ORE}/topaz`,
		IRIDIUM: `${this.ORE}/iridium`,
		ONYX: `${this.ORE}/onyx`,
		PROFANED: `${this.ORE}/profaned`,
		IRIDESCENT: `${this.ORE}/iridescent`,
		DAEMONIUM: `${this.ORE}/daemonium`,
		GAIANITE: `${this.ORE}/gaianite`,
		DIMLITE: `${this.ORE}/dimlite`,
		TITANIUM: `${this.ORE}/titanium`,
		QUARTZ: `${this.ORE}/quartz`,
		ANCIENT_DEBRIS: `${this.ORE}/ancient_debris`,
		URANIUM: `${this.ORE}/uranium`,
		STELLA_ARCANUM: `${this.ORE}/stella_arcanum`,
		IGNEOUS: `${this.ORE}/igneous`,
	},
	ITEMS: {
		COAL: "aas:coal",
		INGOT: "aas:ingot",
		INGOTS: {},
		NUGGET: "aas:nugget",
		NUGGETS: {},
		GEM: "aas:gem",
		GEMS: {},
	},
	BIOME: {
		ORES: {
			COAL: "is_coal_vein_biome",
			COAL_LIGNITE: "is_lignite_vein_biome",
			COAL_BITUMINOUS: "is_bituminous_vein_biome",
			COAL_ANTHRACITE: "is_anthracite_vein_biome",
		},
	},
};

/**
 * ====== BIOMES ======
 */

global.BIOME = {
	COAL: ["#minecraft:is_overworld"],
	COAL_LIGNITE: [
		"minecraft:swamp",
		"minecraft:mangrove_swamp",
		"dreamwoods:bayou",
		"dreamwoods:morass",
		"dreamwoods:northern_swamp",
		"dreamwoods:old_growth_swampland",
		"dreamwoods:twilight_wetlands",
		"minecraft:river",
		"minecraft:frozen_river",
		"dreamwoods:tropical_river",
		"minecraft:beach",
		"dreamwoods:gravel_beach",
		"dreamwoods:grassy_shore",
		"dreamwoods:white_shore",
		"dreamwoods:frozen_shore",
	],
	COAL_BITUMINOUS: [
		"minecraft:forest",
		"minecraft:flower_forest",
		"minecraft:dark_forest",
		"minecraft:birch_forest",
		"minecraft:old_growth_birch_forest",
		"minecraft:plains",
		"minecraft:sunflower_plains",
		"minecraft:meadow",
		"dreamwoods:lush_meadow",
		"dreamwoods:prairie",
		"dreamwoods:flowering_fields",
		"dreamwoods:lush_grassland",
		"dreamwoods:blooming_grove",
		"dreamwoods:golden_aspen_spinney",
		"dreamwoods:poplar_fields",
		"dreamwoods:poplar_grove",
		"dreamwoods:autumnal_hills",
		"dreamwoods:autumnal_wood",
	],
	COAL_ANTHRACITE: [
		"minecraft:windswept_hills",
		"minecraft:windswept_gravelly_hills",
		"minecraft:windswept_forest",
		"minecraft:windswept_savanna",
		"minecraft:stony_peaks",
		"minecraft:jagged_peaks",
		"minecraft:frozen_peaks",
		"minecraft:snowy_slopes",
		"minecraft:grove",
		"dreamwoods:alpine_fields",
		"minecraft:ice_spikes",
		"dreamwoods:tundra",
		"minecraft:snowy_plains",
		"minecraft:snowy_taiga",
		"dreamwoods:snowy_forest",
		"dreamwoods:ice_grove",
		"dreamwoods:snowy_pinelands",
		"dreamwoods:poplar_slopes",
		"dreamwoods:spruce_slopes",
		"dreamwoods:wooded_slopes",
		"dreamwoods:calcite_plateau",
	],
};

/**
 * ====== ORES ======
 */

/**
 * Ores mods:
 *
 * - minecraft
 * - eeeabsmobs
 * - mofus_better_end_
 * - alexscaves
 * - geolosys
 * - create
 * = threateningly_mobs
 * - irons_spellbooks
 * - knightsnmages
 * - legendary_monsters
 * - forbidden_arcanus
 * - dungeons_and_combat
 * - terramity
 */

global.ORES = {
	/**
	 * @type {string[]} - Coal ores
	 */
	COAL: [
		ns.ak("coprolith_coal_ore"),
		ns.mc("coal_ore"),
		ns.mc("deepslate_coal_ore"),
		ns.mof("meteorite_coal_ore"),
		ns.eea("darkened_coal_ore"),
		ns.geo("lignite_ore"),
		ns.geo("deepslate_lignite_ore"),
		ns.geo("anthracite_coal_ore"),
		ns.geo("deepslate_anthracite_coal_ore"),
		ns.geo("bituminous_coal_ore"),
		ns.geo("deepslate_bituminous_coal_ore"),
		ns.geo("coal_ore"),
		ns.geo("deepslate_coal_ore"),
	],

	/**
	 * @type {string[]} - Iron ores
	 */
	IRON: [
		ns.mc("iron_ore"),
		ns.mc("deepslate_iron_ore"),
		ns.geo("limonite_ore"),
		ns.geo("deepslate_limonite_ore"),
		ns.geo("hematite_ore"),
		ns.geo("deepslate_hematite_ore"),
		ns.eea("darkened_iron_ore"),
		ns.mof("meteorite_iron_ore"),
		ns.thm("torderless_iron_ore"),
		ns.ak("galena_iron_ore"),
	],

	/**
	 * @type {string[]} - Gold ores
	 */
	GOLD: [
		ns.mc("gold_ore"),
		ns.mc("deepslate_gold_ore"),
		ns.mc("nether_gold_ore"),
		ns.mof("meteorite_gold_ore"),
		ns.geo("gold_ore"),
		ns.geo("deepslate_gold_ore"),
		ns.geo("nether_gold_ore"),
	],

	/**
	 * @type {string[]} - Copper ores
	 */
	COPPER: [
		ns.mc("copper_ore"),
		ns.mc("deepslate_copper_ore"),
		ns.mof("meteorite_copper_ore"),
		ns.geo("malachite_ore"),
		ns.geo("deepslate_malachite_ore"),
		ns.geo("azurite_ore"),
		ns.geo("deepslate_azurite_ore"),
	],

	/**
	 * @type {string[]} - Redstone ores
	 */
	REDSTONE: [
		ns.mc("redstone_ore"),
		ns.mc("deepslate_redstone_ore"),
		ns.ak("guanostone_redstone_ore"),
		ns.mof("meteorite_redstone_ore"),
		ns.geo("cinnabar_ore"),
		ns.geo("deepslate_cinnabar_ore"),
	],

	/**
	 * @type {string[]} - Emerald ores
	 */
	EMERALD: [
		ns.mc("emerald_ore"),
		ns.mc("deepslate_emerald_ore"),
		ns.geo("teallite_ore"),
		ns.geo("deepslate_teallite_ore"),
		ns.geo("beryl_ore"),
		ns.geo("deepslate_beryl_ore"),
	],

	/**
	 * @type {string[]} - Lapis ores
	 */
	LAPIS: [
		ns.mc("lapis_ore"),
		ns.mc("deepslate_lapis_ore"),
		ns.mof("meteorite_lapis_ore"),
		ns.geo("lapis_ore"),
		ns.geo("deepslate_lapis_ore"),
	],

	/**
	 * @type {string[]} - Diamond ores
	 */
	DIAMOND: [
		ns.mc("diamond_ore"),
		ns.mc("deepslate_diamond_ore"),
		ns.mof("meteorite_diamond_ore"),
		ns.thm("orderless_diamond_ore"),
		ns.geo("kimberlite_ore"),
		ns.geo("deepslate_kimberlite_ore"),
	],

	/**
	 * @type {string[]} - Zinc ores
	 */
	ZINC: [
		ns.cr("zinc_ore"),
		ns.cr("deepslate_zinc_ore"),
		ns.geo("sphalerite_ore"),
		ns.geo("deepslate_sphalerite_ore"),
	],

	/**
	 * @type {string[]} - Mithril ores
	 */
	MITHRIL: [ns.irsb("mithril_ore"), ns.irsb("deepslate_mithril_ore")],

	/**
	 * @type {string[]} - Citrin ores
	 */
	CITRIN: [ns.km("citrin_ore"), ns.km("deepslate_citrin_ore")],

	/**
	 * @type {string[]} - Moonlight ores
	 */
	MOONLIGHT: [ns.km("moonlight_ore"), ns.km("deepslate_moonlight_ore")],

	/**
	 * @type {string[]} - Scarlet ores
	 */
	SCARLET: [ns.km("scarlet_ore"), ns.km("deepslate_scarlet_ore")],

	/**
	 * @type {string[]} - Enderium ores
	 */
	ENDERIUM: [ns.lem("enderitium_ore")],

	/**
	 * @type {string[]} - Arcane Crystal ores
	 */
	ARCANE_CRYSTAL: [ns.arcana("arcane_crystal_ore"), ns.arcana("deepslate_arcane_crystal_ore")],

	/**
	 * @type {string[]} - Xpetrified ores
	 */
	XPETRIFIED: [ns.arcana("xpetrified_ore")],

	/**
	 * @type {string[]} - Silver ores
	 */
	SILVER: [
		ns.dc("silver_ore"),
		ns.dc("silver_deepslate_ore"),
		ns.icf("silver_ore"),
		ns.icf("deepslate_silver_ore"),
		ns.geo("galena_ore"),
		ns.geo("deepslate_galena_ore"),
	],

	/**
	 * @type {string[]} - Ebony ores
	 */
	EBONY: [ns.dc("debony_ore")],

	/**
	 * @type {string[]} - Sapphire ores
	 */
	SAPPHIRE: [ns.icf("sapphire_ore"), ns.ter("sapphire_ore"), ns.ter("deepslate_sapphire_ore")],

	/**
	 * @type {string[]} - Black matter ores
	 */
	BLACK_MATTER: [ns.ter("decayed_black_matter_ore"), ns.ter("bedrock_black_matter_ore")],

	/**
	 * @type {string[]} - Ruby ores
	 */
	ORES_RUBY: [ns.ter("igneo_ruby_ore"), ns.ter("nether_ruby_ore")],

	/**
	 * @type {string[]} - Topaz ores
	 */
	ORES_TOPAZ: [ns.ter("topaz_ore"), ns.ter("deepslate_topaz_ore")],

	/**
	 * @type {string[]} - Iridium ores
	 */
	ORES_IRIDIUM: [ns.ter("nether_iridium_ore"), ns.ter("end_iridium_ore"), ns.ter("deepslate_iridium_ore")],

	/**
	 * @type {string[]} - Onyx ores
	 */
	ORES_ONYX: [ns.ter("end_onyx_ore")],

	/**
	 * @type {string[]} - Profaned ores
	 */
	ORES_PROFANED: [ns.ter("profaned_ore")],

	/**
	 * @type {string[]} - Iridescent ores
	 */
	ORES_IRIDESCENT: [ns.ter("deepslate_iridescent_ore")],

	/**
	 * @type {string[]} - Daemonium ores
	 */
	ORES_DAEMONIUM: [ns.ter("daemonium_ore")],

	/**
	 * @type {string[]} - Gaianite ores
	 */
	ORES_GAIANITE: [ns.ter("gaianite_cluster_ore")],

	/**
	 * @type {string[]} - Dimlite ores
	 */
	ORES_DIMLITE: [ns.ter("deepslate_dimlite_ore")],

	/**
	 * @type {string[]} - Titanium ores
	 */
	TITANIUM: [ns.mof("meteorite_titanium_ore"), ns.dc("titanium_ore"), ns.dc("titanium_deepslate_ore")],

	/**
	 * @type {string[]} - Quartz ores
	 */
	QUARTZ: [ns.mc("nether_quartz_ore"), ns.geo("deepslate_quartz_ore"), ns.geo("quartz_ore")],

	/**
	 * @type {string[]} - Ancient debris ores
	 */
	ANCIENT_DEBRIS: [ns.mc("ancient_debris"), ns.geo("ancient_debris_ore")],

	/**
	 * @type {string[]} - Uranium ores
	 */
	URANIUM: [ns.ak("radrock_uranium_ore"), ns.geo("autunite_ore"), ns.geo("deepslate_autunite_ore")],

	/**
	 * @type {string[]} - Stella arcanum ores
	 */
	STELLA_ARCANUM: [ns.arcana("stella_arcanum")],

	/**
	 * @type {string[]} - Igneous ores
	 */
	IGNEOUS: [ns.dc("igneous_ore"), ns.dc("igneous_ore_netherrack")],
};

/**
 * @type {string[]} - All the ores
 */
global.ORES.ALL = Array.prototype.concat.apply([], Object.values(global.ORES));

global.ITEMS = {
	/**
	 * ====== COALS ======
	 */
	COAL: [
		ns.mc("coal"),
		ns.mc("charcoal"),
		ns.holl("cinder_coal"),
		ns.geo("anthracite_coal"),
		ns.geo("bituminous_coal"),
		ns.geo("lignite_coal"),
		ns.geo("bituminous_coal_coke"),
		ns.geo("lignite_coal_coke"),
		ns.geo("peat_coal"),
		ns.nexp("fossil_fuel"),
	],
	/**
	 * ====== INGOTS ======
	 */
	INGOTS: [],

	/**
	 * ====== NUGGETS ======
	 */
	NUGGETS: [],

	/**
	 * ====== GEMS ======
	 */
	GEMS: [],
};
