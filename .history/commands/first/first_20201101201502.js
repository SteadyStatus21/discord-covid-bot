client.registry
	.registerDefaultTypes()
	.registerGroups([
            ['first', 'Your First Command Group'],
            ['second', 'Your Second Command Group'],
            ['third', 'Your Third Command Group'],
        ]),
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));
	