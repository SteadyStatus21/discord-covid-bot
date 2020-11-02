const { CommandoClient } = require('discord.js-commando');
const path = require('path');


const client = new CommandoClient({
	commandPrefix: '?',
	owner: '772641441582678076',
	invite: 'https://discord.gg/J8HVd9fj',
});


client.registry
	.registerDefaultTypes()
	.registerGroups([
		['first', 'Your First Command Group'],
		['second', 'Your Second Command Group'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));