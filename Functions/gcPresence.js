

module.exports = async (client, m, gcpresence) => {
    if (m.isGroup && gcpresence === 'true') {
        let dreadrecordin = ['recording', 'cheating', '' 'composing'];
        let dreadrecordinfinal = dreadrecordin[Math.floor(Math.random() * dreadrecordin.length)];
        await client.sendPresenceUpdate(dreadrecordinfinal, m.chat);
    }
};
