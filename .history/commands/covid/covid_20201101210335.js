const Commando = require('discord.js-commando');
const axios = require('axios')

module.exports = class CommandoCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'covid',
			group: 'misc',
			memberName: 'covid',
			description: 'Displays stats about covid.',
		});
	}

	run = async (message, args) => {
        const url = 'https://api.covidtracking.com/v1/us/daily.json'
        const results = await axios.get(url)
        console.log(results)
    }
};