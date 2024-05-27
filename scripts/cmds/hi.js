const triggers = ["Hey", "salut", "bonjour"];

module.exports = {
  config: {
    name: "hi",
    version: "69",
    author: "Ace", // Author Can Change, if you want
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "Not Cmd"
  },
  onStart: async function() {},
  onStart: async function({ api, event }) {
    const { body } = event;
    if (body.includes(triggers)) {
      api.sendMessage(` ${username}\n\n▸ 𝗜𝗡𝗙𝗢 ◂\n𝖳𝗎 𝗌𝗈𝗎𝗁𝖺𝗂𝗍𝖾𝗌 𝖼𝗋éé 𝗍𝗈𝗇 𝗉𝗋𝗈𝗉𝗋𝖾 𝖻𝗈𝗍 ? 𝖺𝗅𝗈𝗋𝗌 𝖼𝗅𝗂𝗊𝗎𝖾 𝗌𝗎𝗋 𝗅𝖾 𝗅𝗂𝖾𝗇 , 𝗋𝖾𝗃𝗈𝗂𝗇𝗌 𝗅𝖺 𝖼𝗈𝗆𝗆𝗎𝗇𝖺𝗎𝗍é 𝖾𝗍 𝗋𝖾𝗀𝖺𝗋𝖽𝖾𝗌 𝗉𝖺𝗋𝗆𝗂𝗌 𝗅𝖾𝗌 𝗏𝗂𝖽é𝗈𝗌.\nhttps://facebook.com/groups/1190124518960551/`, event.threadID, event.messageID);
    }
  }
};