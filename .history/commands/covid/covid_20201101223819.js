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
        results = results.slice(0, days).reverse()
        
        const labels = []
        const deaths = [ ]
        const cases = []
        const recovered = []

        for (const results of results){
            let date = String(result.date)
            const year = date.substring(0,4)
            const month = date.substring(4,6)
            const day = date.substring(6,8)
            labels.push(`${day}/${month}/${year}`)


            deaths.push(result.death)
            cases.push(result.positive)
            recovered.push(result.recovered)

        }

    }
}