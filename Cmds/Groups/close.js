const middleware = require('../../utility/botUtil/middleware');

module.exports = async (context) => {
    await middleware(context, async () => {
        const { client, m } = context;

        await client.groupSettingUpdate(m.chat, 'announcement');
        m.reply('Group closed by RHODVICK until y'all subscribes to https://www.youtube.com/@Rhodvick');
    });
};
