const { getPrefix } = global.utils;

module.exports = {
  config: {
    name: "prefix",
    version: "2",
    author: "deadline anderlias",
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "prefix",
  },
  onStart: async function() {},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "prefix") {
      return message.reply(`░█▄▄░█▀█ ▀█▀\n░█▄█░█▄█░ █░\n\n 𝗣𝗥𝗘𝗙𝗜𝗫𝗘 "${global.GoatBot.config.prefix}"\n\n▸ 𝗜𝗡𝗙𝗢 ◂\n𝖳𝗎 𝗌𝗈𝗎𝗁𝖺𝗂𝗍𝖾𝗌 𝖼𝗋éé 𝗍𝗈𝗇 𝗉𝗋𝗈𝗉𝗋𝖾 𝖻𝗈𝗍 ? 𝖺𝗅𝗈𝗋𝗌 𝖼𝗅𝗂𝗊𝗎𝖾 𝗌𝗎𝗋 𝗅𝖾 𝗅𝗂𝖾𝗇 , 𝗋𝖾𝗃𝗈𝗂𝗇𝗌 𝗅𝖺 𝖼𝗈𝗆𝗆𝗎𝗇𝖺𝗎𝗍é 𝖾𝗍 𝗋𝖾𝗀𝖺𝗋𝖽𝖾𝗌 𝗉𝖺𝗋𝗆𝗂𝗌 𝗅𝖾𝗌 𝗏𝗂𝖽é𝗈𝗌.\nhttps://facebook.com/groups/1190124518960551/`);
    }
  },
};