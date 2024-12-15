module.exports = async (client, m, antionce) => {
    if (m.mtype == 'viewOnceMessageV2' && antionce === 'true') {
        if (m.fromMe) return;

        let Rhodvick = { ...m };
        let msg = Rhodvick.message?.viewOnceMessage?.message || Rhodvick.message?.viewOnceMessageV2?.message;
        delete msg[Object.keys(msg)[0]].viewOnce;
        Rhodvick.message = msg;

        await client.sendMessage(client.user.id, { forward: Rhodvick }, { quoted: m });
    }
};
