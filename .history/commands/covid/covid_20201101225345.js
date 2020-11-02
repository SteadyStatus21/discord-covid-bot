const Commando = require('discord.js-commando');
const axios = require('axios');
const { CanvasRenderService} = require('chartjs-node-canvas')
const { MessageAttachment } = require('discord.js')

const width = 800
const height = 600

const chartCallback = (ChartJS) => {


}
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

        const canvas = new CanvasRenderService(width, height, chartCallback)

        const configuration = {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Cases',
                        data: cases,
                        color: '#7289d9',
                        borderColor: '#7289d9',
                        backgroundColor: '#7289d9', 
                        fill: false
                    }
                ]
            }
        }

        const image = await canvas.renderToBuffer(configuration)
        
        const attachment =  new MessageAttachment(image)

        message.channel.send(attachment)
    }
}