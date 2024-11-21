const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *𝚁𝙷𝙾𝙳𝚅𝙸𝙲𝙺 𝚃𝙴𝙲𝙷*

> *𝚁𝙷𝙾𝙳𝚅𝙸𝙲𝙺 𝚃𝙴𝙲𝙷 REPO:*
*|* *https://github.com/Rhodvick/RHODVICK-MD*

> *SUPPORT GROUP:*
*|* *https://whatsapp.com/channel/0029VabySTR9Bb5upWFhMv1N*
*╰──────────────●●►*

> *POWERED BY 𝚁𝙷𝙾𝙳𝚅𝙸𝙲𝙺 𝚃𝙴𝙲𝙷*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "𝚁𝙷𝙾𝙳𝚅𝙸𝙲𝙺 𝚃𝙴𝙲𝙷",
      serverMessageId: 999
    },
externalAdReply: { 
title: '✦𝚁𝙷𝙾𝙳𝚅𝙸𝙲𝙺-𝙼𝙳',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Rhodvick/RHODVICK-MD" ,
thumbnailUrl: "https://telegra.ph/file/25b60ba1474cffb21969c.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
