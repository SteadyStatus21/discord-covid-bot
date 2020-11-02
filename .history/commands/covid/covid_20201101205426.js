const { Command } = require('discord.js-commando');


module.exports = class CommandoCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'covid',
			group: 'misc',
			memberName: 'covid',
			description: 'Displays stats about covid.',
		});
	}

	run = async = (message, args) => {
        message.reply('works');
    }
};