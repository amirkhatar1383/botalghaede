const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require("./config.json");

let name = "amir khatar";
client.once('ready', () => {
	console.log(`${client.user.tag} ONLINE! `);
});


client.on("ready", () => {
	function YousamPower() {
	  let hungry = ["AL GHAEDE FAMILY " , "برای عضویت تیکت باز کنید", "Develop : Amir Khatar"]
	  let Power = Math.floor(Math.random() * hungry.length);
	  client.user.setActivity(hungry[Power], {type: "PLAYING", url: "https://discord.com/api/oauth2/authorize?client_id=1020548134708973578&permissions=8&scope=bot"});
	}; setInterval(YousamPower, 5000)
  });


client.on("message", message => {
// cap //
if (message.content.startsWith(`${prefix}cap`)){
	message.delete();
	message.channel.send("@everyone");
	const capEmbed = new Discord.MessageEmbed()
	.setColor("#FF0000")
	.setTimestamp()
	.setTitle("Click Me Discord Capture")
	.setURL("https://discord.gg/EmaHkwjVvS")
	.setAuthor("📢 Capture Announce 📢")
	.setDescription("AL GHAEDE FM")
	.setFooter("Dev : Amir Khatar", "https://cdn.discordapp.com/icons/749765325482098790/a_d431d10394cf3987ecc0052d01a39749.gif?size=4096")
	.setImage("https://media.discordapp.net/attachments/1003572501772771368/1003572584262148126/grand_theft_auto_5_trevor_flames_3840.0.jpg")
	.setThumbnail("https://media.discordapp.net/attachments/952947978107244604/1013421202880069682/unknown.png")
	.addField('Ba Salam Va Dorod Emshab Capture Hast Hatman Biaid Merc ✅', 'Hozor Gheyre Movajah =❌ Strike ❌', true)
	message.channel.send(capEmbed)
}
// help //
if (message.content.startsWith(`${prefix}help`)){
	message.delete();
	const capEmbed = new Discord.MessageEmbed()
	.setColor("#02f543")
	.setTimestamp()
	.setFooter("Dev : Amir Khatar", "https://cdn.discordapp.com/icons/749765325482098790/a_d431d10394cf3987ecc0052d01a39749.gif?size=4096")
	.addFields(
		{ name: '^cap', value: 'Baraye Announce Capture' },
		{ name: '^say', value: 'Baraye Neveshtan Payam' },

	)
	message.channel.send(capEmbed)
}
// say //
if (message.content.startsWith(`${prefix}say`)){
	message.delete();
	const args = message.content.slice(4).split("");
	const saymessage = args.join("");
	message.channel.send(saymessage);
}

});

client.login('MTAyMDU0ODEzNDcwODk3MzU3OA.Gz75d5.KpUfC5bYgsJ4G7qCj4HOToPpVrIbNCwZ4lHtAU');