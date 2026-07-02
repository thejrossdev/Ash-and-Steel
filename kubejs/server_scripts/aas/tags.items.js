// priority: 0
"use strict";

const registerCoalItemsTags = (event) => {
	global.ITEMS.COAL.forEach((item) => {
		event.add(global.TAGS.ITEMS.COAL, item);
		event.add("netherexp:smokestalk_fuel", item);
		event.add("mutantmore:heals_rodlings", item);
		event.add("supplementaries:blackboard_black", item);
		event.add("minecraft:coals", item);
		event.add("c:coal", item);
	});
};

const registerOreItemsTags = (event) => {
	global.ORES.ALL.forEach((item) => {
		event.add(global.TAGS.ORES_ALL, item);
	});
};
