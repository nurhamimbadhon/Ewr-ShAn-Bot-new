const axios = require("axios");

const baseUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`
  );
  return base.data.api;
};

module.exports.config = {
  name: "gpt4",
  aliases: ["gp"],
  version: "1.0.0",
  role: 0,
  author: "dipto",
  description: "Gpt4 AI with BN and Banglish support",
  usePrefix: true,
  guide: "[message]",
  category: "Ai",
  countDown: 5,
};

module.exports.onReply = async function ({ api, event, Reply }) {
  const { author } = Reply;
  if (author != event.senderID) return;

  if (event.type === "message_reply") {
    const reply = event.body.toLowerCase();
    if (isNaN(reply)) {
      try {
        const response = await axios.get(
          `${await baseUrl()}/gpt4?text=${encodeURIComponent(reply)}&senderID=${author}`
        );

        const data = response.data.data;
        const banglish = convertToBanglish(data); // বাংলা থেকে Banglish রূপান্তর
        const responseMessage = `বাংলা:\n${data}\n\nBanglish:\n${banglish}`;

        await api.sendMessage(responseMessage, event.threadID, (err, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            link: responseMessage,
          });
        }, event.messageID);
      } catch (err) {
        console.log(err.message);
        api.sendMessage(`Error: ${err.message}`);
      }
    }
  }
};

module.exports.onStart = async function ({ api, args, event }) {
  try {
    const author = event.senderID;
    const dipto = args.join(" ").toLowerCase();

    if (!args[0]) {
      return api.sendMessage(
        "Please provide a question to answer\n\nExample:\n!gpt4 hey",
        event.threadID,
        event.messageID
      );
    }

    if (dipto) {
      const response = await axios.get(
        `${await baseUrl()}/gpt4?text=${encodeURIComponent(dipto)}&senderID=${author}`
      );

      const data = response.data.data;
      const banglish = convertToBanglish(data); // বাংলা থেকে Banglish রূপান্তর
      const responseMessage = `বাংলা:\n${data}\n\nBanglish:\n${banglish}`;

      await api.sendMessage({ body: responseMessage }, event.threadID, (error, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          commandName: this.config.name,
          type: "reply",
          messageID: info.messageID,
          author,
          link: responseMessage,
        });
      }, event.messageID);
    }
  } catch (error) {
    console.log(`Failed to get an answer: ${error.message}`);
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
  }
};

// বাংলা থেকে Banglish রূপান্তর ফাংশন
function convertToBanglish(text) {
  const banglaToBanglishMap = {
    "অ": "o",
    "আ": "a",
    "ই": "i",
    "ঈ": "ii",
    "উ": "u",
    "ঊ": "uu",
    "এ": "e",
    "ঐ": "oi",
    "ও": "o",
    "ঔ": "ou",
    "ক": "k",
    "খ": "kh",
    "গ": "g",
    "ঘ": "gh",
    "ঙ": "ng",
    "চ": "ch",
    "ছ": "chh",
    "জ": "j",
    "ঝ": "jh",
    "ঞ": "ng",
    "ট": "t",
    "ঠ": "th",
    "ড": "d",
    "ঢ": "dh",
    "ণ": "n",
    "ত": "t",
    "থ": "th",
    "দ": "d",
    "ধ": "dh",
    "ন": "n",
    "প": "p",
    "ফ": "ph",
    "ব": "b",
    "ভ": "bh",
    "ম": "m",
    "য": "j",
    "র": "r",
    "ল": "l",
    "শ": "sh",
    "ষ": "sh",
    "স": "s",
    "হ": "h",
    "ড়": "r",
    "ঢ়": "rh",
    "য়": "y",
    "ৎ": "t",
    "ং": "ng",
    "ঃ": ":",
    "ঁ": "n",
  };

  return text
    .split("")
    .map((char) => banglaToBanglishMap[char] || char)
    .join("");
        }
