import discord, { ButtonInteraction, GuildMember, GuildMemberRoleManager, Interaction, MemberMention, Message } from "discord.js";
const verifyButton = new discord.MessageButton().setCustomId("ve").setEmoji("✅").setStyle("SUCCESS")

const client = new discord.Client({
    intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
    console.log(client.user?.username + " is ready!")
});

client.on("messageCreate", (message: Message) => {
    if (message.content === "!start") {
        if (message.author.id == "777474453114191882") {


            message.channel.send({ content: "Press da button to get verified", components: [new discord.MessageActionRow().addComponents(verifyButton)] })

        } else {
            return console.log("test")
        }
    }
});
const checkRole = (int: ButtonInteraction, arr: string[], msg: string) => {
    let arrCache = [];
    for (const role of arr) {
        //@ts-ignore
        if (!int.member?.roles?.cache.has(role)) arrCache.push("1")
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
client.on("interactionCreate", async(int): Promise<void> => {
    if (int.isButton()) {
        if (int.customId == "ve") {
            int.deferReply({ ephemeral: true });


            



            if (!checkRole(int, colorRoleIds, "Take your color role from [here](https://discord.com/channels/822674023367311390/861313316655333387/863576857227690015) to verify!")) return;
            if (!checkRole(int, ageRoleIds, "Take your age role from [here](https://discord.com/channels/822674023367311390/861313316655333387/863577103558639637) to verify!")) return;
            if (!checkRole(int, genderRoleIds, "Take your gender role from [here](https://discord.com/channels/822674023367311390/861313316655333387/863577450440032276) to verify!")) return;
            if (!checkRole(int, RelationshipRoleIds, "Take your relationship role from [here](https://discord.com/channels/822674023367311390/861313316655333387/864943912443183104) to verify!")) return;
            //@ts-ignore
            if (int.member?.roles.cache.has("861317112361254962")) {
                int.followUp("Hmm, seems like you are verified. Contact staff if there is any help needed.");
                return;
            }
            int.followUp("Seems like you have all the roles. I'll verify you!");
            //@ts-ignore
           await int.member?.roles?.add("861317112361254962").catch(() => {});


        }
    }
});
import dotenv from "dotenv";
dotenv.config()
//susssss
client.login(process.env.token)