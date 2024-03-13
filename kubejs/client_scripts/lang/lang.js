////
// rename some items to fit the pack
//// renik
// script originally created by ArugChief in the KubeJS Discord.

//
ClientEvents.lang('zh_cn', event => {
	//
	const rename = (item, newName) => {
		event.renameItem(item, newName);
	};

	// AD ASTRA EE物品重命名
	rename('ad_astra:venus_coal_ore', '富煤矿石');
	rename('ad_astra:mercury_iron_ore', '富铁矿石');

	// EMENDATUS ENIGMATICA EE物品重命名
	rename('emendatusenigmatica:apatite_moon_stone_ore', '磷灰石矿石');
	rename('emendatusenigmatica:apatite_glacio_stone_ore', '富磷灰石矿石');
	rename('emendatusenigmatica:certus_quartz_blackstone_ore', '特斯石英矿石');
	rename('emendatusenigmatica:charged_certus_quartz_mercury_stone_ore', '充能赛特斯石英矿石');
	rename('emendatusenigmatica:fluix_mercury_stone_ore', '福鲁伊克斯矿石');
	rename('emendatusenigmatica:sharkinite_deepslate_ore', '鲨蓝矿石');
	rename('emendatusenigmatica:weekonium_stone_ore', '周素矿石');
	rename('emendatusenigmatica:source_deepslate_ore', '魔源矿石');
	rename('emendatusenigmatica:plastim_plate', '亲塑料复合物板材');
	rename('emendatusenigmatica:plastim_ingot', '亲塑料复合物锭');
	rename('emendatusenigmatica:plastim_dust', '亲塑料复合物粉');
	rename('minecraft:deepslate_lapis_ore', '富青金石矿石');
	rename('emendatusenigmatica:end_inferium_ore', '富下级精华矿石');
	rename('emendatusenigmatica:end_prosperity_ore', '富活化水晶矿石');
	rename('emendatusenigmatica:arcmetal_crystal', '弧形金属碎片');
	rename('emendatusenigmatica:voidmetal_crystal', '虚金属碎片');
	rename('emendatusenigmatica:tin_crystal', '锡碎片');
	rename('emendatusenigmatica:zinc_crystal', '锌碎片');
	rename('emendatusenigmatica:sharkinite_crystal', '鲨蓝碎片');
	rename('emendatusenigmatica:silver_crystal', '银碎片');
	rename('emendatusenigmatica:aluminum_crystal', '铝碎片');
	rename('emendatusenigmatica:gold_crystal', '金碎片');
	rename('emendatusenigmatica:copper_crystal', '铜碎片');
	rename('emendatusenigmatica:nickel_crystal', '镍碎片');
	rename('emendatusenigmatica:osmium_crystal', '锇碎片');
	rename('emendatusenigmatica:quartz_crystal', '下界石英碎片');
	rename('emendatusenigmatica:weekonium_crystal', '周素碎片');
	rename('emendatusenigmatica:lead_crystal', '铅碎片');
	rename('emendatusenigmatica:iron_crystal', '铁碎片');
	rename('emendatusenigmatica:alien_gear', '未知外星齿轮');
	rename('emendatusenigmatica:alien_rod', '未知外星棒');
	rename('emendatusenigmatica:blazing_dust', '灼焰粉');

	// KUBEJS  自定义物品命名
	rename('kubejs:durable_rawhide', '耐用的生皮革');
	rename('kubejs:durable_mallable_hide', '耐用的锻造皮');
	rename('kubejs:rawhide', '生皮革');
	rename('kubejs:mallable_hide', '锻造皮');
	rename('kubejs:crude_ender_pearl', '粗糙末影珍珠');
	rename('kubejs:nether_stone', 'Nether Stone'); // 与下文下界石重复
	rename('kubejs:golden_nether_stone', 'Golden Nether Stone'); // 与下文充能下界石重复
	rename('kubejs:zpm', '零点模块');
	rename('kubejs:zpm_housing_unit', 'ZPM Housing Unit'); // 并未实装此物品
	rename('kubejs:damaged_zpm_housing_unit', '缺损的零点模块外壳部件');
	rename('kubejs:repaired_zpm_housing_unit', '已修复的零点模块外壳部件');
	rename('kubejs:charged_zpm_housing_unit', '充能的零点模块外壳部件');
	rename('kubejs:depleted_zpm_housing_unit', '枯竭的零点模块外壳部件');
	rename('kubejs:green_board', '绿板');
	rename('kubejs:incomplete_green_board', '绿板(未完成)');
	rename('kubejs:empty_parts_box', '部件箱');
	rename('kubejs:compression_dynamo_parts', '压缩能源炉部件');
	rename('kubejs:dissolution_chamber_parts', '化学溶解室部件');
	rename('kubejs:fluid_cell_parts', '流体单元部件');
	rename('kubejs:gourmand_dynamo_parts', '饕餮能源炉部件');
	rename('kubejs:loot_fabricator_parts', '战利品制造器部件');
	rename('kubejs:pneumatic_dynamo_parts', '气动能源炉部件');
	rename('kubejs:simulation_chamber_parts', '模拟室部件');
	rename('kubejs:stirling_dynamo_parts', '斯特林能源炉部件');
	rename('kubejs:digital_miner_parts', '数字型采矿机部件');
	rename('kubejs:empty_prediction_parts', '预测矩阵部件');
	rename('kubejs:energy_cable_starter_parts', '能源线缆部件');
	rename('kubejs:energizing_rod_starter_parts', '充能棒部件');
	rename('kubejs:energizing_orb_parts', '充能台部件');
	rename('kubejs:ender_gate_starter_parts', '末影道门部件');
	rename('kubejs:player_transmitter_starter_parts', '玩家供电仪部件');
	rename('kubejs:goauld_crystal', "Goa'uld水晶");
	rename('kubejs:nether_stone', '下界石');
	rename('kubejs:infused_nether_stone', '充能下界石');

	// 以下为作者未添加命名
	rename('kubejs:cheap_plastic_tank', '廉价塑料水箱');
	rename('kubejs:cheap_plastic_engine', '廉价塑料发动机');
	rename('kubejs:cheap_plastic_rocket_nose_cone', '廉价塑料火箭鼻锥');
	rename('kubejs:cheap_plastic_rocket_fin', '廉价塑料火箭鳍');
	rename('kubejs:mason_jar', '强化瓶');
	rename('kubejs:empty_heart_of_the_deep', '空的深渊之心');
	rename('kubejs:infused_eye_of_ender', '充能末影之眼');
	rename('kubejs:damaged_crystal_housing_unit', '损坏的水晶外壳部件');
	rename('kubejs:crystal_housing_unit', '水晶外壳部件');
	rename('kubejs:bee_stinger_amber', '蜜蜂毒刺琥珀');

	// COMPACT MACHINES 压缩空间物品重命名
	rename('compactmachines:personal_shrinking_device', '个人压缩装置');

	// PNEUMATIC CRAFT 气动工艺
	rename('kubejs:advanced_pressure_tube_parts', '高级压力管部件');
	rename('kubejs:empty_pcb_parts', '印刷电路板部件');
	rename('kubejs:netherite_drill_bit_parts', '下界合金钻头部件');
	rename('kubejs:pressure_chamber_valve_parts', '压力室气阀部件');

	// SUPPLEMENTARIES 锦致装饰物品重命名
	rename('supplementaries:globe', '亚尔夫海姆地球仪'); // 亚尔夫海任务获得
	rename('supplementaries:globe_sepia', '幽冥地球仪'); // 幽冥任务获得

	// SILENT 寂静装备物品重命名
	rename('silentgear:metal_alloyer', '金属合金机');
	rename('silentgear:blueprint_paper', '蓝色皮革'); // 原文Blue Leather  游戏内为皮革+蓝色染料合成

	// TOTEMIC 图腾物品重命名
	rename('totemic:buffalo_hide', '耐用皮革');

	// INDUSTRIAL FOREGOING 工业先锋物品重命名
	rename('industrialforegoing:plastic', '廉价塑料'); // 区分塑料片（或许吧）？

	// ROOTS CLASSIC 根源魔法经典版物品重命名
	rename('rootsclassic:growth_powder', '生长粉');

	// MEKANISM MEK物品重命名
	rename('mekanism:hazmat_mask', '防辐射面具内衬');
	rename('mekanism:hazmat_gown', '防辐射胸甲内衬');
	rename('mekanism:hazmat_pants', '防辐射裤子内衬');
	rename('mekanism:hazmat_boots', '防辐射鞋子内衬');
	rename('mekanism:cardboard_box', '高科技纸箱');

	// FRUITS AND VEGGIES 水果和蔬菜物品重命名
	rename('farmersdelight:cabbage_seeds', '皱叶甘蓝种子');
	rename('farmersdelight:cabbage', '皱叶甘蓝');
	rename('farmersdelight:tomato_seeds', '罗马番茄种子');
	rename('farmersdelight:tomato', '罗马番茄');

	//   Ingredient.of(/mekanism:.*crystals/).stacks.forEach(item => rename(item, "Test Rename"))
	// materials_add.forEach((material) => {
	//   Ingredient.of(`#mekanism:${material}_crystal`).stacks.forEach(item => rename(item, '${material}_Fragment'))
	// })

	//
});
//
