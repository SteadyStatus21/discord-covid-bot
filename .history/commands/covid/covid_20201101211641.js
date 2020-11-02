const Commando = require('discord.js-commando');
const axios = require('axios');

module.exports = class CommandoCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: '!covid',
			group: 'misc',
			memberName: 'covid',
			description: 'Displays stats about covid.',
		});
	}

	run = async (message, args) => {
        const days = parseInt(args) || 30

        const url = 'https://api.covidtracking.com/v1/us/daily.json'
        let {data: results} = await axios.get(url)
        results = results.slice(0, days).reverse
        console.log(results)
    }
};