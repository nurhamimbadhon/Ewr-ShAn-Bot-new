const axios = require('axios');
const baseApiUrl = async () => {
  const base = await axios.get('https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json');
  return base.data.api;
};

module.exports.config = {
  name: "bby",
  aliases: ["baby", "bbz", "hasu"],
  version: "6.9.1",
  author: "dipto",
  countDown: 0,
  role: 0,
  description: "Better than all sim simi",
  category: "chat",
  guide: {
    en: "{pn} [anyMessage] OR\nteach [YourMessage] - [Reply1], [Reply2], [Reply3]... OR\nteach [react] [YourMessage] - [react1], [react2], [react3]... OR\nremove [YourMessage] OR\nrm [YourMessage] - [indexNumber] OR\nmsg [YourMessage] OR\nlist OR \nall OR\nedit [YourMessage] - [NewReply]"
  }
};

module.exports.onStart = async ({ api, event, args, usersData }) => {
  const link = `${await baseApiUrl()}/baby`;
  const dipto = args.join(" ").toLowerCase();
  const uid = event.senderID;
  let command, comd, final;

  try {
    if (!args[0]) {
      const ran = ["Bolo baby", "hum", "type help baby", "type !baby hi"];
      return api.sendMessage(ran[Math.floor(Math.random() * ran.length)], event.threadID, event.messageID);
    }

    // Custom Commands: Teach, Remove, List, Msg, Edit, etc.
    // Handling various cases for custom commands as before...

    if (args[0] === 'random') {
      const replies = ["Haha, that's funny!", "I'm here for you!", "Let's chat more!", "Interesting!"];
      return api.sendMessage(replies[Math.floor(Math.random() * replies.length)], event.threadID, event.messageID);
    }

    if (args[0] === 'help') {
      const helpMessage = "Available commands:\n" +
                          "- {pn} [anyMessage]: Basic conversation\n" +
                          "- teach [YourMessage] - [Reply1], [Reply2], [Reply3]...\n" +
                          "- teach [react] [YourMessage] - [react1], [react2], [react3]...\n" +
                          "- remove [YourMessage]\n" +
                          "- msg [YourMessage]\n" +
                          "- list\n" +
                          "- edit [YourMessage] - [NewReply]";
      return api.sendMessage(helpMessage, event.threadID, event.messageID);
    }

    // Handling general text-based queries and teaching responses...
    const d = (await axios.get(`${link}?text=${dipto}&senderID=${uid}&font=1`)).data.reply;
    api.sendMessage(d, event.threadID, (error, info) => {
      global.GoatBot.onReply.set(info.messageID, {
        commandName: this.config.name,
        type: "reply",
        messageID: info.messageID,
        author: event.senderID,
        d
      });
    }, event.messageID);

  } catch (e) {
    console.log(e);
    api.sendMessage("Check console for error", event.threadID, event.messageID);
  }
};

module.exports.onReply = async ({ api, event, Reply }) => {
  try {
    if (event.type == "message_reply") {
      const a = (await axios.get(`${await baseApiUrl()}/baby?text=${encodeURIComponent(event.body?.toLowerCase())}&senderID=${event.senderID}&font=1`)).data.reply;
      await api.sendMessage(a, event.threadID, (error, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          commandName: this.config.name,
          type: "reply",
          messageID: info.messageID,
          author: event.senderID,
          a
        });
      }, event.messageID);
    }
  } catch (err) {
    return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
  }
};

module.exports.onChat = async ({ api, event, message }) => {
  try {
    const body = event.body ? event.body.toLowerCase() : ""
    if (body.startsWith("baby") || body.startsWith("bby") || body.startsWith("janu")) {
      const arr = body.replace(/^\S+\s*/, "")
      if (!arr) {
        api.sendMessage("Yes 😀, I am here", event.threadID, (error, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID
          });
        }, event.messageID);
      }
      const a = (await axios.get(`${await baseApiUrl()}/baby?text=${encodeURIComponent(arr)}&senderID=${event.senderID}&font=1`)).data.reply;
      await api.sendMessage(a, event.threadID, (error, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          commandName: this.config.name,
          type: "reply",
          messageID: info.messageID,
          author: event.senderID,
          a
        });
      }, event.messageID);
    }
  } catch (err) {
    return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
  }
};
