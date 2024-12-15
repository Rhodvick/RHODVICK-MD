

const Ownermiddleware = async (context, next) => {
    const { m, Owner } = context;

    if (!Owner) {
        return m.reply("You need RHODVICK'S' privileges to execute this command.");
    }

    await next();
};

module.exports = Ownermiddleware;
