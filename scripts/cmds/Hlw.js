const axios = require("axios");

const getAPIBase = async () => {
  const { data } = await axios.get(
    "https://raw.githubusercontent.com/nazrul4x/Noobs/main/Apis.json"
  );
  return data.bs;
};

const sendMessage = (api, threadID, message, messageID) => 
  api.sendMessage(message, threadID, messageID);

const cError = (api, threadID, messageID) => 
  sendMessage(api, threadID, "error🦆💨", messageID);

const teachBot = async (api, threadID, messageID, senderID, teachText) => {
  const [ask, answer] = teachText.split(" - ").map((text) => text.trim());
  if (!ask || !answer) {
    return sendMessage(
      api,
      threadID,
      "Invalid format. Use: {pn} teach <ask> - <answer>",
      messageID
    );
  }
  try {
    const res = await axios.get(
      `${await getAPIBase()}/bby/teach?ask=${encodeURIComponent(ask)}&ans=${encodeURIComponent(answer)}&uid=${senderID}`
    );
    const responseMsg =
      res.data?.message === "Teaching recorded successfully!"
        ? `Successfully taught the bot!\n📖 Teaching Details:\n- Question: ${res.data.ask}\n- Answer: ${res.data.ans}\n- Your Total Teachings: ${res.data.userStats.user.totalTeachings}`
        : res.data?.message || "Teaching failed.";
    return sendMessage(api, threadID, responseMsg, messageID);
  } catch {
    return cError(api, threadID, messageID);
  }
};

const talkWithBot = async (api, threadID, messageID, senderID, input) => {
  try {
    const res = await axios.get(
      `${await getAPIBase()}/bby?text=${encodeURIComponent(input)}&uid=${senderID}`
    );
    const reply = res.data?.text || "Please teach me.\nExample: /sim teach <ask> - <answer>";
    return api.sendMessage(reply, threadID, (error, info) => {
      if (error) return cError(api, threadID, messageID);
      global.GoatBot.onReply.set(info.messageID, {
        commandName: module.exports.config.name,
        type: "reply",
        messageID: info.messageID,
        author: senderID,
        msg: reply,
      });
    }, messageID);
  } catch {
    return cError(api, threadID, messageID);
  }
};

module.exports.config = {
  name: "hasu",
  aliases: ["kuttu", "baigan"],
  version: "1.6.9",
  author: "Nazrul",
  role: 0,
  description: "Talk with the bot or teach it new responses",
  category: "talk",
  countDown: 3,
  guide: {
    en: `{pn} <text> - Ask the bot something\n{pn} teach <ask> - <answer> - Teach the bot a new response\n\nExamples:\n1. {pn} Hello\n2. {pn} teach hi - hello`,
  },
};

module.exports.onStart = async ({ api, event, args }) => {
  const { threadID, messageID, senderID } = event;
  if (args.length === 0) {
    return sendMessage(api, threadID, "Please provide text or teach the bot!", messageID);
  }

  const input = args.join(" ").trim();
  const [command, ...rest] = input.split(" ");

  if (command.toLowerCase() === "teach") {
    return teachBot(api, threadID, messageID, senderID, rest.join(" ").trim());
  }
  return talkWithBot(api, threadID, messageID, senderID, input);
};

module.exports.onChat = async ({ api, event }) => {
  const { threadID, messageID, senderID, body } = event;
  const normalized = body.toLowerCase();
  if (["hasu", "hlw", "hasan", "বট", "hi", "bbu"].some((cmd) => normalized.startsWith(cmd))) {
    return talkWithBot(api, threadID, messageID, senderID, body);
  }
};

module.exports.onReply = async ({ api, event, Reply }) => {
  const { threadID, messageID, senderID, body } = event;
  return talkWithBot(api, threadID, messageID, senderID, body);
};
