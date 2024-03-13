////
// ftb age rewards
//// renik
// The idea for this script came from a modpack called Decursio Project and was originally Authored by Lady Lexxie and Alexandr

FTBQuestsEvents.customReward('75C204049F7833F5', event => {
	event.server.runCommandSilent(`thitemstages add ${event.player.username} A1`);
	event.server.runCommandSilent(`ftbranks add ${event.player.username} age_1`);
	event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 15`); // Start Age 1 at 15
	event.server.runCommand(`tell ${event.player.username} 欢迎进入阶段1！`);
});

FTBQuestsEvents.customReward('2E87419E472B2A55', event => {
	event.server.runCommandSilent(`thitemstages add ${event.player.username} A2`);
	event.server.runCommandSilent(`ftbranks add ${event.player.username} age_2`);
	event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 25`); // 20 - 30
	event.server.runCommandSilent(`tell ${event.player.username} 欢迎进入阶段2！`);
});

FTBQuestsEvents.customReward('6F0C49F751B5CFEF', event => {
	event.server.runCommandSilent(`thitemstages add ${event.player.username} A3`);
	event.server.runCommandSilent(`ftbranks add ${event.player.username} age_3`);
	event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 35`); // 35 - 50
	event.server.runCommandSilent(`tell ${event.player.username} 欢迎进入阶段3！`);
});

FTBQuestsEvents.customReward('7E62DE06EC870236', event => {
	event.server.runCommandSilent(`thitemstages add ${event.player.username} A4`);
	event.server.runCommandSilent(`ftbranks add ${event.player.username} age_4`);
	event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 55`); // 55 - 80
	event.server.runCommandSilent(`tell ${event.player.username} 欢迎进入阶段4！`);
});

FTBQuestsEvents.customReward('5D843BDA277B19CB', event => {
	event.server.runCommandSilent(`thitemstages add ${event.player.username} A5`);
	event.server.runCommandSilent(`ftbranks add ${event.player.username} age_5`);
	event.server.runCommandSilent(`improvedmobs difficulty player ${event.player.username} set 85`); // 85 - 100
	event.server.runCommandSilent(`tell ${event.player.username} 欢迎进入阶段5！`);
});

FTBQuestsEvents.customReward('4C97A02A7D12AB2C', event => {
	event.server.runCommandSilent(`thitemstages add ${event.player.username} A6`);
	event.server.runCommandSilent(`ftbranks add ${event.player.username} age_6`);
	event.server.runCommandSilent(
		`improvedmobs difficulty player ${event.player.username} set 105`
	); // 105 - 200
	event.server.runCommandSilent(`tell ${event.player.username} 欢迎进入阶段6！`);
});

FTBQuestsEvents.customReward('3B93B7256E6AC495', event => {
	event.server.runCommandSilent(`thitemstages add ${event.player.username} A7`);
	event.server.runCommandSilent(`ftbranks add ${event.player.username} age_7`);
	event.server.runCommandSilent(
		`improvedmobs difficulty player ${event.player.username} set 225`
	); // 225 - 250
	event.server.runCommandSilent(`tell ${event.player.username} 欢迎进入阶段7！`);
});

FTBQuestsEvents.customReward('2992209DD6A62C67', event => {
	event.server.runCommandSilent(`thitemstages add ${event.player.username} L1`);
	event.server.runCommandSilent(`tell ${event.player.username} 您现在可以搜刮原版箱子和木桶！`);
});

FTBQuestsEvents.customReward('055C949031C21BAE', event => {
	event.server.runCommandSilent(`thitemstages add ${event.player.username} L2`);
	event.server.runCommandSilent(`tell ${event.player.username} 您现在可以搜刮夸克宝箱！`);
});

FTBQuestsEvents.customReward('04220A1E480F1E47', event => {
	event.server.runCommandSilent(`thitemstages add ${event.player.username} Nether`);
	event.server.runCommandSilent(`tell ${event.player.username} 您已进入下界！`);
});

FTBQuestsEvents.customReward('0CB202079AC5CAA2', event => {
	event.server.runCommandSilent(`thitemstages add ${event.player.username} End`);
	event.server.runCommandSilent(`tell ${event.player.username} 您已进入末地！`);
});

FTBQuestsEvents.customReward('2DC687F7A36459AF', event => {
	event.server.runCommandSilent(`thitemstages add ${event.player.username} Twilight_Forest`);
	event.server.runCommandSilent(`tell ${event.player.username} 您已进入暮色森林！`);
});

FTBQuestsEvents.customReward('58AD6358671D5915', event => {
	event.server.runCommandSilent(`thitemstages add ${event.player.username} Otherside`);
	event.server.runCommandSilent(`tell ${event.player.username} 您已进入深暗之园！`);
});
