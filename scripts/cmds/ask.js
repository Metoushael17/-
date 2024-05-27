const axios = require('axios');

const Prefixes = [
  'ask',
  'gpt',
  'ai',
  'bot',
  'openai',
];

module.exports = {
  config: {
    name: "chatgpt",
    version: 1.0,
    author: "ArYAN",
    role: 0,
    shortDescription: "Ask question to ChatGPT",
    longDescription: "Interact as ChatGPT provided by OpenAi. This command allows users to interact with the AI, asking various questions and receiving detailed answers.",
    category: "ai",
    guide: {
      en: "{p}ai [ question ] - Replace '{p}' with your command prefix and 'question' with your actual query.",
    },
  },
  
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
      if (!prompt) {
        await message.reply("░█▄▄░█▀█ ▀█▀\n░█▄█░█▄█░ █░\n\n▸ 𝖲𝖺𝗅𝗎𝗍, 𝖼𝗈𝗆𝗆𝖾𝗇𝗍 𝗉𝗎𝗂𝗌-𝗃𝖾 𝗍'𝖺𝗂𝖽𝖾𝗋 ?");
        return;
      }
      api.setMessageReaction("🟡", event.messageID, (err) => {}, true);
      const response = await axios.get(`https://himachalwale.onrender.com/api/chatgpt?prompt=${encodeURIComponent(prompt)}&apikey=©himachalwale`);
      const answer = response.data.fullResponse;
      await message.reply(answer + "\n\n▸ 𝗜𝗡𝗙𝗢 ◂\n𝖳𝗎 𝗌𝗈𝗎𝗁𝖺𝗂𝗍𝖾𝗌 𝖼𝗋éé 𝗍𝗈𝗇 𝗉𝗋𝗈𝗉𝗋𝖾 𝖻𝗈𝗍 ? 𝖺𝗅𝗈𝗋𝗌 𝖼𝗅𝗂𝗊𝗎𝖾 𝗌𝗎𝗋 𝗅𝖾 𝗅𝗂𝖾𝗇 , 𝗋𝖾𝗃𝗈𝗂𝗇𝗌 𝗅𝖺 𝖼𝗈𝗆𝗆𝗎𝗇𝖺𝗎𝗍é 𝖾𝗍 𝗋𝖾𝗀𝖺𝗋𝖽𝖾𝗌 𝗉𝖺𝗋𝗆𝗂𝗌 𝗅𝖾𝗌 𝗏𝗂𝖽é𝗈𝗌.\nhttps://facebook.com/groups/1190124518960551/");
      api.setMessageReaction("🟢", event.messageID, (err) => {}, true);
    } catch (error) {
      console.error("𝖤𝗋𝗋𝖾𝗎𝗋 :", error.message, error.response?.data);
      api.setMessageReaction("🔴", event.messageID, (err) => {}, true);
    }
  }
};