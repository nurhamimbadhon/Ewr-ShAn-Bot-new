/cmd install uptime.js module.exports = {
  config: {
    name: "uptime",
    aliases:["up", "upt"]
    version: "1.1",
    author: "Anas x 114",
    role: 2,
    shortDescription: {
      en: "Displays detailed bot stats and uptime."
    },
    longDescription: {
      en: "Displays the total number of users who have interacted with the bot, the total threads, and the bot's uptime in a formatted way."
    },
    category: "system",
    guide: {
      en: "Use {p}uptime to display detailed stats and uptime of the bot."
    }
  },
  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const botName = "🎭𝘛ₒₓᵢ𝚌ᵢ𝚝ₑᵣ⭕"; // Name your bot here
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();

      // Calculate formatted uptime
      const days = Math.floor(uptime / 86400);
      const hours = Math.floor((uptime % 86400) / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const uptimeString = `${days}D ${hours}H ${minutes}M ${seconds}S`;

      // Active threads (threads with activity)
      const activeThreads = allThreads.filter(thread => thread.messageCount > 0).length;

      // Crafting the message
      const message = `
🤖 | ~Bot Name: ${botName}
⏳ | ~Uptime: ${uptimeString}
👥 | ~Total Users: ${allUsers.length}
📢 | ~Total Threads: ${allThreads.length}
🔔 | ~Active Threads: ${activeThreads}

Thank you for using ${botName}! 🎉
      `;

      api.sendMessage(message, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving bot stats.", event.threadID);
    }
  }
};
