const { Command } = require('discord.js-commando');


module.exports = class CommandoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'covid',
			group: 'misc',
			memberName: 'covid',
			description: 'Displays stats about covid.',
		});
	}

	run(message) {
		return message.say('virus!');
	}
};