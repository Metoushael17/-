const a = require('axios');
const tinyurl = require('tinyurl');
module.exports = {
  config: {
    name: "4k",
    aliases: ["4k", "upscale"],
    version: "1.0",
    author: "JARiF", //edit Aesther
    countDown: 15,
    role: 0,
    longDescription: "Upscale your image.",
    category: "image",
    guide: {
      en: "{pn} reply to an image"
    }
  },

  onStart: async function ({ message, args, event, api }) {
    let imageUrl;

    if (event.type === "message_reply") {
      const replyAttachment = event.messageReply.attachments[0];

      if (["photo", "sticker"].includes(replyAttachment?.type)) {
        imageUrl = replyAttachment.url;
      } else {
        return api.sendMessage(
          { body: "🔴 𝗏𝖾𝗎𝗂𝗅𝗅𝖾𝗓 𝗋𝖾𝗉𝗋𝖾𝗇𝖽𝗋𝖾 𝗉𝖺𝗋 𝗎𝗇𝖾 𝗂𝗆𝖺𝗀𝖾." },
          event.threadID
        );
      }
    } else if (args[0]?.match(/(https?:\/\/.*\.(?:png|jpg|jpeg))/g)) {
      imageUrl = args[0];
    } else {
      return api.sendMessage(
        { body: "🔴 𝗏𝖾𝗎𝗂𝗅𝗅𝖾𝗓 𝗋𝖾𝗉𝗋𝖾𝗇𝖽𝗋𝖾 𝗉𝖺𝗋 𝗎𝗇𝖾 𝗂𝗆𝖺𝗀𝖾" },
        event.threadID
      );
    }

    try {
      const url = await tinyurl.shorten(imageUrl);
      const response = await a.get(`https://www.api.vyturex.com/upscale?imageUrl=${url}`);

      message.reply("🟡....");

      const resultUrl = response.data.resultUrl;

      const imageData = await global.utils.getStreamFromURL(resultUrl);

      message.reply({ body: "🟢 | [𝟰𝗞].", attachment: imageData });
    } catch (error) {
      message.reply("🔴 𝖾𝗋𝗋𝖾𝗎𝗋: " + error.message);
    }
  }
};