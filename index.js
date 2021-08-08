const discord = require("discord.js");


//Verified role id: 861317112361254962
//Non verified role id:     


const verifyButton = new discord.MessageButton().setCustomId("ve").setEmoji("✅")

const client = new discord.Client({
    intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
    console.log(client.user.username + " is ready!")
});

client.on("messageCreate", (message) => {
    console.log("sus")
    if(message.content === "!start") {
        if(message.author.id != "777474453114191882"){


            message.channel.send({content: "Press da button to get verified", components: [new discord.MessageActionRow().addComponents(verifyButton)]})
        } else {
            return console.log("test")
        }
    }
});

require("dotenv").config()
client.login(process.env.token)