const events = process.env.EVENTS || 'false';
const botname = process.env.BOTNAME || 'RHODVICK-MD';

const Events = async (client, rhodvickez) => {
    const Myself = await client.decodeJid(client.user.id);

    try {
        let metadata = await client.groupMetadata(rhodvickez.id);
        let participants = rhodvickez.participants;
        let desc = metadata.desc || "No Description";

        for (let num of participants) {
            let dpuser;

            try {
                dpuser = await client.profilePictureUrl(num, "image");
            } catch {
                dpuser = "https://i.ibb.co/wJBxKV4/74421a3c5d94ac0a.jpg";
            }

            if (rhodvickez.action == "add") {
                let userName = num;

                let Welcometext = ` Hey  @${userName.split("@")[0]} 👋\n\nWelcome to ${metadata.subject}.\n\nyou may read the group Description to avoid being removed  ${desc}\n\n*Regards Rhodvick*.\n\nPowered by ${botname} .`;
                if (events === 'true') {
                    await client.sendMessage(rhodvickez.id, {
                        image: { url: dpuser },
                        caption: Welcometext,
                        mentions: [num],
                    });
                }
            } else if (rhodvickez.action == "remove") {
                let userName2 = num;

                let Lefttext = `
          Goodbye to this idiot @${userName2.split("@")[0]} you will be highly remembered comrade`;
                if (events === 'true') {
                    await client.sendMessage(rhodvickez.id, {
                        image: { url: dpuser },
                        caption: Lefttext,
                        mentions: [num],
                    });
                }
            } else if (rhodvickez.action == "demote" && events === 'true') {
                await client.sendMessage(
                    rhodvickez.id,
                    {
                        text: `@${(rhodvickez.author).split("@")[0]}, has demoted @${(rhodvickez.participants[0]).split("@")[0]} from admin 👀`,
                        mentions: [rhodvickez.author, rhodvickez.participants[0]]
                    }
                );
            } else if (rhodvickez.action == "promote" && events === 'true') {
                await client.sendMessage(
                    rhodvickez.id,
                    {
                        text: `@${(rhodvickez.author).split("@")[0]} has promoted @${(rhodvickez.participants[0]).split("@")[0]} to admin. 👀`,
                        mentions: [rhodvickez.author, rhodvickez.participants[0]]
                    }
                );
            }
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = Events;
