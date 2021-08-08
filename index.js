const discord = require("discord.js");


//Verified role id: 861317112361254962
//Non verified role id: 


const client = new discord.Client({
    intents: [discord.Intents.FLAGS.GUILD_MEMBERS]
});

client.on("ready", () => {
    console.log(client.user.username + " is ready!")
});

require("dotenv").config()
client.login(process.env.token)