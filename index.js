console.clear()
require('dotenv').config();
const config = require("./config.json");
const {
    Client,
    Collection,
    Intents,
    MessageActionRow,
    MessageButton,
    MessageEmbed,
    MessageSelectMenu,  
} = require("discord.js");
const chalk = require("chalk");
const db = require("quick.db");
const moment = require("moment")
var _0xe1f6=["\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D\x2B\x3D","\x72\x65\x64","\x6C\x6F\x67","\x4D\x61\x64\x65\x20\x62\x79\x20\x54\x65\x6A\x61\x73\x20\x4C\x61\x6D\x62\x61\x23\x31\x39\x32\x34","\x63\x79\x61\x6E","\x43\x72\x65\x64\x69\x74\x73","\x79\x65\x6C\x6C\x6F\x77\x42\x72\x69\x67\x68\x74","\x7C","\x20\x56\x69\x73\x61\x32\x43\x6F\x64\x65","\x62\x6C\x75\x65\x42\x72\x69\x67\x68\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F\x53\x57\x39\x54\x56\x77\x75\x48\x72\x53","\x63\x79\x61\x6E\x42\x72\x69\x67\x68\x74","\x4A\x6F\x69\x6E\x20\x41\x62\x6F\x76\x65\x20\x66\x6F\x72\x20\x53\x75\x70\x70\x6F\x72\x74\x21","\x61\x75\x74\x6F","\x4D\x45\x53\x53\x41\x47\x45","\x43\x48\x41\x4E\x4E\x45\x4C","\x52\x45\x41\x43\x54\x49\x4F\x4E","\x47\x55\x49\x4C\x44\x53","\x46\x4C\x41\x47\x53","\x47\x55\x49\x4C\x44\x5F\x4D\x45\x4D\x42\x45\x52\x53","\x47\x55\x49\x4C\x44\x5F\x42\x41\x4E\x53","\x47\x55\x49\x4C\x44\x5F\x45\x4D\x4F\x4A\x49\x53\x5F\x41\x4E\x44\x5F\x53\x54\x49\x43\x4B\x45\x52\x53","\x47\x55\x49\x4C\x44\x5F\x49\x4E\x54\x45\x47\x52\x41\x54\x49\x4F\x4E\x53","\x47\x55\x49\x4C\x44\x5F\x57\x45\x42\x48\x4F\x4F\x4B\x53","\x47\x55\x49\x4C\x44\x5F\x49\x4E\x56\x49\x54\x45\x53","\x47\x55\x49\x4C\x44\x5F\x56\x4F\x49\x43\x45\x5F\x53\x54\x41\x54\x45\x53","\x47\x55\x49\x4C\x44\x5F\x50\x52\x45\x53\x45\x4E\x43\x45\x53","\x47\x55\x49\x4C\x44\x5F\x4D\x45\x53\x53\x41\x47\x45\x53","\x47\x55\x49\x4C\x44\x5F\x4D\x45\x53\x53\x41\x47\x45\x5F\x52\x45\x41\x43\x54\x49\x4F\x4E\x53","\x47\x55\x49\x4C\x44\x5F\x4D\x45\x53\x53\x41\x47\x45\x5F\x54\x59\x50\x49\x4E\x47","\x44\x49\x52\x45\x43\x54\x5F\x4D\x45\x53\x53\x41\x47\x45\x53","\x44\x49\x52\x45\x43\x54\x5F\x4D\x45\x53\x53\x41\x47\x45\x5F\x52\x45\x41\x43\x54\x49\x4F\x4E\x53","\x44\x49\x52\x45\x43\x54\x5F\x4D\x45\x53\x53\x41\x47\x45\x5F\x54\x59\x50\x49\x4E\x47","\x44\x69\x73\x63\x6F\x72\x64\x20\x69\x4F\x53"];console[_0xe1f6[2]](chalk[_0xe1f6[1]](_0xe1f6[0]));console[_0xe1f6[2]](chalk[_0xe1f6[4]](`${_0xe1f6[3]}`));console[_0xe1f6[2]](chalk[_0xe1f6[6]](`${_0xe1f6[5]}`)+ `${_0xe1f6[7]}`+ chalk[_0xe1f6[9]](`${_0xe1f6[8]}`)+ `${_0xe1f6[7]}`+ chalk[_0xe1f6[11]](`${_0xe1f6[10]}`));console[_0xe1f6[2]](`${_0xe1f6[12]}`);console[_0xe1f6[2]](chalk[_0xe1f6[1]](_0xe1f6[0]));const client= new Client({shards:_0xe1f6[13],partials:[_0xe1f6[14],_0xe1f6[15],_0xe1f6[16]],intents:[Intents[_0xe1f6[18]][_0xe1f6[17]],Intents[_0xe1f6[18]][_0xe1f6[19]],Intents[_0xe1f6[18]][_0xe1f6[20]],Intents[_0xe1f6[18]][_0xe1f6[21]],Intents[_0xe1f6[18]][_0xe1f6[22]],Intents[_0xe1f6[18]][_0xe1f6[23]],Intents[_0xe1f6[18]][_0xe1f6[24]],Intents[_0xe1f6[18]][_0xe1f6[25]],Intents[_0xe1f6[18]][_0xe1f6[26]],Intents[_0xe1f6[18]][_0xe1f6[27]],Intents[_0xe1f6[18]][_0xe1f6[28]],Intents[_0xe1f6[18]][_0xe1f6[29]],Intents[_0xe1f6[18]][_0xe1f6[30]],Intents[_0xe1f6[18]][_0xe1f6[31]],Intents[_0xe1f6[18]][_0xe1f6[32]]],ws:{properties:{$browser:_0xe1f6[33]}}})

const { PresenceUpdateStatus } = require("discord-api-types/v9");
const { Presence } = require("discord.js");

client.on("presenceUpdate", async (oldPresence, newPresence) => {
  if (!config.logger.enabled) return;
  try
    {
      if (config.logger.bots && !config.logger.humans) {
       
        if (!oldPresence || !oldPresence.user.bot) return;
        } else if (!config.logger.bots && config.logger.humans) {
          if (!oldPresence || oldPresence.user.bot) return;
        }
        if (oldPresence.status == newPresence.status || oldPresence.status == "dnd" && newPresence.status == 'idle' || oldPresence.status == "idle" && newPresence.status == 'dnd' || oldPresence.status == "online" && newPresence.status == 'dnd' || oldPresence.status == "online" && newPresence.status == 'idle') return;

        if (config.server_id)
        {
 
            if (newPresence.status == PresenceUpdateStatus.Online || newPresence.status == "dnd" || newPresence.status == "idle")
            {
                newPresence.guild.channels.cache.get(config.logger.channel_id).send({
                    embeds: [new MessageEmbed()
                    .setTitle(`︱Uptime Alert`)
                    .setDescription(`Looks like **${newPresence.user.tag}** is back **Online! **`)
                    
                    .setColor(`GREEN`)
                    .setThumbnail(newPresence.user.avatarURL({ format: "png", size: 1024 }))
                    .setFooter(`Uptime Alert`, newPresence.user.avatarURL({ format: "png", size: 1024 }))
                    .setTimestamp()]
                });
            }

            
            else if (newPresence.status == PresenceUpdateStatus.Offline || newPresence.status == PresenceUpdateStatus.Invisible)
            {
                newPresence.guild.channels.cache.get(config.logger.channel_id).send({
                    embeds: [new MessageEmbed()
                    .setTitle(` ︱Downtime Alert`)
                    .setDescription(`Looks like **${newPresence.user.tag}** went **Offline! **`)
                    .setColor(`RED`)
                    .setThumbnail(newPresence.user.avatarURL({ format: "png", size: 1024 }))
                    .setFooter(`Downtime Alert`, newPresence.user.avatarURL({ format: "png", size: 1024 }))
                    .setTimestamp()]
                });
            }
        }
    }
    catch (err)
    {
        console.log(`[Error] - ${err.message}`)
    }
});

client.on("messageCreate", async (message) => {

if (message.author.bot || !message.guild) return;
  let args = message.content.toLowerCase().split(" ");
  let command = args.shift()
  let prefix = config.prefix
 const staffembed = new MessageEmbed()
  if (command == prefix + "staff-online") {
const status = db.get(`status_${message.author.id}`)
if (status || status != null || status != undefined) {
staffembed.setDescription(`** You were already on duty. Your duty time started <t:${status}:R> - Staff ID - \`${message.author.id}\` **`)
staffembed.setColor("RED")
return message.channel.send({ embeds: [staffembed] });
} else {
  db.set(`status_${message.author.id}`, Math.floor(new Date().getTime()/1000.0))
  staffembed.setTitle(`You are now on duty. Your duty time has started - Staff ID - \`${message.author.id}\``)
  staffembed.setColor("GREEN")
  message.channel.send({ embeds: [staffembed] });
  return message.guild.channels.cache.get(config.staff_system.channel_id).send({ embeds: [staffembed] });
}
  }

  if (command == prefix + "staff-offline") {
const status = db.get(`status_${message.author.id}`)
if (status || status != null || status != undefined) {
  await db.delete(`status_${message.author.id}`)
staffembed.setDescription(`** Your duty ended - Total duty time - ${(moment(Math.floor(new Date(status) * 1000.0 )).fromNow()).replace('ago', '')} - Staff ID - \`${message.author.id}\` **`)
staffembed.setColor("RED")
message.channel.send({ embeds: [staffembed] });
return message.guild.channels.cache.get(config.staff_system.channel_id).send({ embeds: [staffembed] });
} else {
 
  staffembed.setTitle(`You need to start the duty to end it!`)
  staffembed.setColor("RED")
  return message.channel.send({ embeds: [staffembed] });
}
  }
});


async function checktoken(token){
  if (!token) {
       console.log(chalk.redBright(`NO TOKEN PROVIDED`))
      process.exit()
    }
    
    if(token.length != "NzQ4MDg3OTA3NTE2MTUzODg5.X0YVJw.Wk6lEEwy158ZQ3wvKx3uvdnoWGA".length) {
      console.log(chalk.redBright(`INAVLID TOKEN`))
      process.exit()
    }
    
  let testclient = new Client({
   intents : [
     Intents.FLAGS.DIRECT_MESSAGE_TYPING ,
  ]
});
  try {
    await testclient.login(token)
    testclient.on("ready", () => {
      console.log(chalk.greenBright(`Token Check Passed`))
      testclient.destroy() })
  } catch {
    console.log(chalk.redBright("INVALID TOKEN"))
    process.exit()
  }
}
checktoken(config.token)



async function configcheck(config) {
  if (!config.server_id || !config.logger.channel_id || !config.staff_system.channel_id || !config.status.name || !config.status.type || !config.port || !config.prefix) {
    console.log(chalk.redBright("Fill botconfig.js"))
    return true;
    } else {
      console.log(chalk.greenBright(`Config Check Passed`))
      return false;
    }
}

let goodconfig = configcheck(config)

if(!goodconfig) {
   process.exit()
   return;
 }

client.on('ready', async () => {
    console.log(chalk.greenBright(`Logging in to bot...`))
  
  console.log(chalk.bgRed(chalk.greenBright(`Logged into ${client.user.username}`)))

  client.user.setActivity(config.status.name, { type: config.status.type.toUpperCase() })

  if (config.ExpressServer) {
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send({
  Working: "online"
  })
})
 console.log(chalk.greenBright(`Web Server Started`))
app.listen(config.port)
}
});

client.login(config.token)