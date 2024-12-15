module.exports = async (context) => {
    const { client, m, Rhodvickspeed } = context;

    try {
        // Prepare the response text with speed data
        const menuText = `Rhodvick speed\n${Rhodvickspeed.toFixed(4)}𝐌\𝐒`;

        // Send message with contextInfo and mention the sender
        await client.sendMessage(m.chat, {
            text: menuText,
            contextInfo: {
                mentionedJid: [m.sender], // Mention the sender
                externalAdReply: {
                    title: "🌟 RHODVICK-MD ✨",
                    body: "Regards Rhodvick tech",
                    sourceUrl: "https://whatsapp.com/channel/0029VabySTR9Bb5upWFhMv1N",
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        });
    } catch (error) {
        console.error("Error sending message:", error);
        m.reply('An error occurred while sending the menu.');
    }
};
