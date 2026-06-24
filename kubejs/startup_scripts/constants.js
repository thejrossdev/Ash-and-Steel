// priority: -100
"use strict";

/**
 * Namespace utility functions
 * */
global.Namespace = {
	/**
	 * Any mod
	 * @param {string} domain
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	mod: (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith("#") ? "#" : "") + domain + ":" + id.replace("#", ""),
	/**
	 * Minecraft
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	mc: (id, x) => global.Namespace.mod(`minecraft`, id, x),
	/**
	 * Create
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	cr: (id, x) => global.Namespace.mod(`create`, id, x),
	/**
	 * Ars Nouveau
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	ars: (id, x) => global.Namespace.mod(`ars_nouveau`, id, x),
	/**
	 * Terramity
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	ter: (id, x) => global.Namespace.mod(`terramity`, id, x),
	/**
	 * Legendary Survival Overhaul
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	loh: (id, x) => global.Namespace.mod(`legendarysurvivaloverhaul`, id, x),
	/**
	 * Simply Swords
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	ss: (id, x) => global.Namespace.mod(`simplyswords`, id, x),
	/**
	 * Refm
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	refm: (id, x) => global.Namespace.mod(`refm`, id, x),
	/**
	 * IronsSpellbooks
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	irsb: (id, x) => global.Namespace.mod(`irons_spellbooks`, id, x),
	/**
	 * Apotheosis
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	apo: (id, x) => global.Namespace.mod(`apotheosis`, id, x),
	/**
	 * Forbidden & Arcanus
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	arcana: (id, x) => global.Namespace.mod(`forbidden_arcanus`, id, x),
	/**
	 * Ice and fire
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	icf: (id, x) => global.Namespace.mod(`iceandfire`, id, x),
	/**
	 * Kube JS
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	kjs: (id, x) => global.Namespace.mod(`kubejs`, id, x),
	/**
	 * Ars Elemental
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	arse: (id, x) => global.Namespace.mod(`ars_elemental`, id, x),
	/**
	 * Ars Technica
	 * @param {string} id
	 * @param {string | number} x
	 * @returns string
	 * */
	arst: (id, x) => global.Namespace.mod(`ars_technica`, id, x),
};
