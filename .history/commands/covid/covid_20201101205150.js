const { Command } = require('discord.js-commando');


module.exports = class CommandoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'covid',
			group: 'misc',
			memberName: 'covid',
			description: 'Replies with a meow, kitty cat.',
		});
	}

	run(message) {
		return message.say('virus!');
	}
};