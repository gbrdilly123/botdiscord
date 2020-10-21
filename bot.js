const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


client.on("ready", () => {
    console.log(`O bot foi iniciando, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores. `);
    client.user.setGame(`Eu estou em ${client.guilds.size} servidores`);
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${cliente.guilds.size} servidores`);
});

client.on ("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
    cliente.user.setActivity(`Servind ${client.guild.size} servers`);
});


client.on("message", async message => {


    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();

    if(comando === "ping") {
        const m = await message.channel.send("Pong");
        m.edit(`Pong! O seu ping é de ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
    }
});

client.login(config.token);