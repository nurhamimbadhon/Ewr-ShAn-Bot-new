const { config } = global.GoatBot;

module.exports = {
    config: {
        name: "admins",
        aliases:["admin"],
        version: "1.1",
        author: "Hasan",
        countDown: 5,
        role: 0,
        category: "management",
        guide: {
            en: "{pn} [list | -l]: Display the list of all bot admins"
        }
    },

    langs: {
        en: {
            listAdmin: "🎭 ADMIN LIST 🎭"
                + "\n ♦___________________♦"
                + "\n ❃ OWNER:♣ HASAN ♣"
                + "\n _____________________________"
                + "\n _____♪ ADMIN ♪_____"
                + "\n %1"
                + "\n _____________________________"
                + "\n ❃ ♦OWNER♦:https://www.facebook.com/Itz.HaSaN.00"
                + "\n |__H_A_S_A_N_S__B_O_T__|",
            noAdmins: "⚠️ | No admins found in the bot!"
        }
    },

    onStart: async function ({ message, args, usersData, getLang }) {
        // Check if the command includes "list" or "-l"
        if (args[0] !== "list" && args[0] !== "-l") {
            return message.reply("⚠️ | Invalid command! Use `list` or `-l` to view the admin list.");
        }

        // Retrieve admin IDs from configuration
        const adminIds = config.adminBot || [];

        // If no admin IDs exist
        if (adminIds.length === 0) {
            return message.reply(getLang("noAdmins"));
        }

        // Fetch admin names using their IDs
        const adminNames = await Promise.all(
            adminIds.map(uid => usersData.getName(uid).then(name => `❃ ${name} (${uid})`))
        );

        // Send the admin list
        return message.reply(getLang("listAdmin", adminNames.join("\n")));
    }
};
