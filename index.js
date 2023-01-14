const { Collection, Client, Discord, MessageEmbed, Message } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});
require('discord-buttons')(client);
const path = require('path')
const fs = require('fs')
const discordbuttons = require('discord-buttons')
const { MessageButton, MessageActionRow } = require("discord-buttons")
const keepAlive = require("./server");
const config = require('./config.json');
client.prefix = config.prefix;

client.on('clickButton', async (button) => {
    if (button.id == 'AddVerifiedRole') {
        button.reply.send(`Вы прошли проверку!`, true)
        const role = button.guild.roles.cache.get(config.roleid)
        const member = button.clicker.member
        await member.roles.add(role)
    }{}
})

client.on('ready', () => {
    console.log('Поддержи сервер залетай https://discord.gg/pkB8CsxvJw!')
})

client.on('message', async (message) => {
    if (message.content.startsWith('1')) { //команда для активации
        const embed = new MessageEmbed()
            .setTitle('Текст')
            .setColor("GREEN")
            .setDescription('Текст 2')
.setImage("https://cdn.discordapp.com/attachments/862304477015965706/894160209554051072/standard_3.gif")//свою картинку
        const add = new MessageButton()
            .setStyle("green")
            .setLabel("Текст 3")//можно поставить эмодзи
            .setID("AddVerifiedRole")
        const row = new MessageActionRow()
            .addComponent([add])


        message.channel.send({ component: row, embed: embed })
    }
})
keepAlive();
client.login(process.env.TOKEN);
