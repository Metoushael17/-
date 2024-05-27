module.exports = {
  config: {
    name: "botgc",
    version: "1.0",
    author: "kivv",
    role: 0,
    shortDescription: {
      en: "Adds the user to a specific thread."
    },
    longDescription: {
      en: "Adds the user to a specific thread and sends them a notification message."
    },
    category: "System",
    guide: {
      en: "Use {p}join to add yourself to the specified thread."
    }
  },
  onStart: async function ({ api, event, args }) {
    const threadID = "6330662830316743";

    try {
      await api.addUserToGroup(event.senderID, threadID);
      api.sendMessage("🟢 𝖳𝗎 𝖺𝗌 𝖾𝗍𝖾 𝖺𝗃𝗈𝗎𝗍𝖾𝗋 𝖽𝖺𝗇𝗌 𝗅𝖾 𝗀𝗋𝗈𝗎𝗉𝖾, 𝖺𝗏𝖾𝖼 𝗌𝗎𝖼𝖼𝖾𝗌", event.senderID);
    } catch (error) {
      api.sendMessage("🔴 𝖴𝗇𝖾 𝖾𝗋𝗋𝖾𝗎𝗋 𝗌'𝖾𝗌𝗍 𝗉𝗋𝗈𝖽𝗎𝗂𝗍𝖾", event.senderID);
    }
  }
};