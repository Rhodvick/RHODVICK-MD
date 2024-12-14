module.exports = async (context) => {
  const { client, m } = context;


  const messageCaption = `
   *Follow my channels and join my  groups for more updates*
  ╭────────────────
  │ *Wachannel:* https://whatsapp.com/channel/0029VabySTR9Bb5upWFhMv1N
    
  │ *wagroup:* https://chat.whatsapp.com/KuX57n5cBId0UtTk8u9RSl 

  │ *youtube:*  subscribe https://www.youtube.com/@Rhodvick
    
  │ *Contact owner:* +254700150919

 ╰─────────────────── 
  `;

  // Prepare the image URL
  const image = {
    url: "https://i.ibb.co/wJBxKV4/74421a3c5d94ac0a.jpg"
  };

  // Prepare the message object
  const message = {
    image: image,
    caption: messageCaption
  };

  // Send the message
  await client.sendMessage(m.chat, message, { quoted: m });
};

