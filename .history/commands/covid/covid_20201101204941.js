const { Command } = require('discord.js-commando');


module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'virus',
			group: 'covid',
			memberName: 'virus',
			description: 'Replies with a meow, kitty cat.',
		});
	}

	run(message) {
		return message.say('virus!');
	}
};