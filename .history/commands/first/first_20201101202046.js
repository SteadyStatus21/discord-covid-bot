client.registry
	.registerDefaultTypes()
	.registerGroups([
            ['first', 'Your First Command Group'],
            ['second', 'Your Second Command Group'],
            ['third', 'Your Third Command Group'],
        ])
	.registerDefaultGroups()
	.registerDefaultCommands({
        help: false,
    })    
    .registerCommandsIn(path.join(__dirname, 'commands'));
    
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('with Commando');
});

client.on('error', console.error);

client.login('NzcyNjQxNDQxNTgyNjc4MDc2.X59oag.eAvMFmaP72ZzxVBXHOAHBXLD7is');
