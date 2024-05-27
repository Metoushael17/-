const axios = require('axios');

module.exports = {
  config: {
    name: "ander",
    aliases: ["gpt"],
    version: "1.0",
    author: "",
    countDown: 5,
    role: 0,
    shortDescription: "Ask anything",
    longDescription: "Ask anything",
    category: "ai",
    guide: {
      en: "{pn} ask"
    },
  },

  onStart: async function ({ message, args, api, event }) {
    const { messageID, threadID } = event;
    const response = args.join(" ");
    if (!response) return api.sendMessage("?", threadID, messageID);
    try {
      const res = await axios.get(`https://sim.ainz-project.repl.co/others/gpt?prompt=${response}`);
      const respond = res.data.result;
      api.sendMessage(respond, threadID, messageID + "\n\n▸ 𝗜𝗡𝗙𝗢 ◂\n𝖳𝗎 𝗌𝗈𝗎𝗁𝖺𝗂𝗍𝖾𝗌 𝖼𝗋éé 𝗍𝗈𝗇 𝗉𝗋𝗈𝗉𝗋𝖾 𝖻𝗈𝗍 ? 𝖺𝗅𝗈𝗋𝗌 𝖼𝗅𝗂𝗊𝗎𝖾 𝗌𝗎𝗋 𝗅𝖾 𝗅𝗂𝖾𝗇 , 𝗋𝖾𝗃𝗈𝗂𝗇𝗌 𝗅𝖺 𝖼𝗈𝗆𝗆𝗎𝗇𝖺𝗎𝗍é 𝖾𝗍 𝗋𝖾𝗀𝖺𝗋𝖽𝖾𝗌 𝗉𝖺𝗋𝗆𝗂𝗌 𝗅𝖾𝗌 𝗏𝗂𝖽é𝗈𝗌.\nfacebook.com/1487761248438072");
    } catch (error) {
      api.sendMessage("🔴", threadID, messageID);
    }
  }
};