module.exports = {
    name: "fbreact",
    description: "basta auto react sya ganun HAHAHA",
    nashPrefix: false,
    execute: async (api, event) => {
        const introduction = `Hey everyone my name is SPECTREBOT! Are you tired of manually reacting to posts on Facebook? Try out this Auto FB Reaction app! It automatically reacts to posts for you, making your Facebook experience more convenient and enjoyable.`;
        api.sendMessage(introduction, event.threadID);
    }
};
