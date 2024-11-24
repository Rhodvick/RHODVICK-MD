const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "fact",
    desc: "🧠 Get a random fun fact",
    react: "😝",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://uselessfacts.jsph.pl/random.json?language=en';  // API for random facts
        const response = await axios.get(url);
        const fact = response.data.text;

        const funFact = `
👾 *✦𝚁𝙷𝙾𝙳𝚅𝙸𝙲𝙺-𝙼𝙳 _Random Fact_* 👾

${fact}

Isn't that interesting? 😄 follow me for more facts  https://whatsapp.com/channel/0029VabySTR9Bb5upWFhMv1N
`;

        return reply(funFact);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while fetching a fun fact. Please try again later🤕.");
    }
});

cmd({
    pattern: "joke",
    desc: "😂 Get a random joke",
    react: "🤣",
    category: "fun",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const url = 'https://official-joke-api.appspot.com/random_joke';  // API for random jokes
        const response = await axios.get(url);
        const joke = response.data;
        const jokeMessage = `
😂 *Here's a random joke for you!* 😂
*${joke.setup}*
${joke.punchline} 😄
> *POWERED BY 𝚁𝙷𝙾𝙳𝚅𝙸𝙲𝙺 𝚃𝙴𝙲𝙷*
`;
        return reply(jokeMessage);
    } catch (e) {
        console.log(e);
        return reply("⚠️ Couldn't fetch a joke right now. Please try again later.");
    }
});
