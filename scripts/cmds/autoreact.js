module.exports = {
  config: {
    name: "autoreact",
    author: "JmLabaco",
    version: "1.0",
    countDown: 5,
    role: 0,
    shortDescription: "Auto React",
    longDescription: " ",
    category: "System",
  },
  onStart: async function () {
    // Add initialization logic here if needed
  },
  onChat: async function ({ event, api }) {
    const message = event.body.toLowerCase();

    const reactionsMap = {
      "😆": ["haha", "lol", "samer", "mdr", "ptn", "tu", "vous", "🤣", "xd", "tg", "merde", "tgl", "tomumba", "ptn", "awooop jumpscare", "il", "sana all"],
      "😢": ["pleure", "triste", "mort", "rip", "bakit ka malongkot?", "hindi na", "sad ka", "walang ulam"],
      "😍": ["love", "j'adore", "ai"],
      "😮": ["wow", "flow", "game", "mc", "minecraft", "ml", "mlbb", "mobile legends", "mobile legends bang bang", "cod", "call of duty"]
      // Add more reactions and associated keywords as needed
    };

    console.log("Message:", message);

    for (const [reaction, keywords] of Object.entries(reactionsMap)) {
      console.log("Reaction:", reaction);
      console.log("Keywords:", keywords);

      if (keywords.some((word) => message.includes(word))) {
        console.log("Reacting with:", reaction);
        api.setMessageReaction(reaction, event.messageID, event.threadID, api);
        break; // Stop checking once a reaction is set
      }
    }
  },
};