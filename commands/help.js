const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  if (message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    message.delete()
  }

  let prefix = botconfig.prefix;
  let array = [
    "`" + prefix + "8ball <question>` - The Magic 8 Ball! *(intended for yes/no/maybe questions, not when/where questions)*",
    "`" + prefix + "donate` - Donation Page",
    "`" + prefix + "help` - Displays this help menu",
    "`" + prefix + "info` - Bot/Server Information!",
    "`" + prefix + "leave` - Kicks the bot from the server",
    "`" + prefix + "list` - List responses for 8ball, feel free to request one to be added",
    "`" + prefix + "setchannel [0]` - Run in channel for 8ball to work in, type 0 to reenable for all channels",
    "`" + prefix + "setreplies <all/clean/explicit>` - Set the type of replies for your server!"
  ]

  let description = array.createText();
  let sicon = bot.user.displayAvatarURL;
  let hEmbed = new Discord.RichEmbed()
    .setTitle("Help Menu")
    .setThumbnail(sicon)
    .setColor("#9a00ff")
    .setDescription(description + "\n\nNo bot is online all the time! Please click [here](https://discord.gg/MCRbYdc) for the Support Server so you know when something is up with the bot!")
    .setFooter("Join support @ discord.gg/MCRbYdc - Magic8", bot.user.displayAvatarURL)
    .setTimestamp()

  message.channel.send(hEmbed);

  let bots = message.guild.members.filter(member => member.user.bot).size;
  let users = message.guild.members.filter(member => !member.user.bot).size;
  let log = bot.channels.get(botconfig.commandlogs)
  let timechange = new Date(new Date().getTime() - (4 * 3600000)).toLocaleString()
  log.send("`" + `${timechange} [COMMAND]: 'help', Author: ${message.author.username}, Server: ${message.guild.name} (${users}/${bots})` + "`")
}

Array.prototype.createText = function () {
  return this.join("\n")
}

module.exports.help = {
  name: "help"
}
