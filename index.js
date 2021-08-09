const discord = require("discord.js");

const verifyButton = new discord.MessageButton().setCustomId("ve").setEmoji("✅").setStyle("SUCCESS")

const client = new discord.Client({
    intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
    console.log(client.user.username + " is ready!")
});

client.on("messageCreate", (message) => {
    if (message.content === "!start") {
        if (message.author.id == "777474453114191882") {


            message.channel.send({ content: "Press da button to get verified", components: [new discord.MessageActionRow().addComponents(verifyButton)] })

        } else {
            return console.log("test")
        }
    }
});
const checkRole = (int, arr, msg) => {
    let arrCache = [];
    for (const role of arr) {
        if (!int.member?.roles.cache.has(role)) arrCache.push("1")
    }
    if (arrCache.length === arr.length) {
        int.followUp(msg);
        return false;
    } else {
        return true;
    }


}
const ageRoleIds = ["863231569452204063", "863231629631160354", "863231697185275904"];
const colorRoleIds = ["863231013021679647", "863231000787288064", "863231138247344178", "863231185912201218", "863231233760296970", "863231297689616424"];
const genderRoleIds = ["860782608580870165", "863230930897862686"];
const RelationshipRoleIds = ["864941351057227836", "864941428333346836"]
client.on("interactionCreate", (int) => {
    if (int.isButton()) {
        if (int.customId == "ve") {
            int.deferReply({ ephemeral: true })


            



            if (!checkRole(int, colorRoleIds, "Take your color role to verify!")) return;
            if (!checkRole(int, ageRoleIds, "Take your age role to verify!")) return;
            if (!checkRole(int, genderRoleIds, "Take your gender role to verify!")) return;
            if (!checkRole(int, RelationshipRoleIds, "Take your relationship role to verify!")) return;

            if(int.member?.roles.cache.has("861317112361254962")) return int.followUp("Hmm, seems like you are verified. Contact staff if there are any help needed.")
            int.followUp("Seems like you have all the role. I'll verify you!")

            int.member.roles.add("861317112361254962")


        }
    }
});
require("dotenv").config()
client.login(process.env.token)