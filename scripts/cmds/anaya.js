const axios = require("axios");
module.exports = {
    config: {
        name: 'anya',
        version: '1.2',
        author: 'Xemon',
        countDown: 15,
        role: 0,
        shortDescription: 'Anya AI',
        longDescription: {
            vi: 'Chat với simsimi',
            en: 'Chat with Anya',
            bn: 'আনিয়া এর সাথে কথা বলুন'
        },
        category: 'funny',
        guide: {
            bn: '   {pn} <word>: আনিয়া এর সাথে কথা বলুন'
                + '\n   উদাহরণ:\n    {pn} হ্যালো'
                + '\n  {pn} [on | off]: অন/অফ করুন আনিয়া চ্যাট'
        }
    },

    langs: {
        bn: {
            turnedOn: '✅ | আনিয়া সফলভাবে চালু হয়েছে !',
            turnedOff: '✅ | আনিয়া সফলভাবে বন্ধ হয়েছে!',
            chatting: 'আনিয়া এর সাথে চ্যাট চলছে...',
            error: 'What! 🙂'
        },
	en: {
	     turnedOn: '✅ | turn on anya successfully!',
	     turnedOff: '✅ | turn off anya successfully!',
	     chatting: 'chatting with anya',
	     error: 'What !🙂'
    },

    onStart: async function ({ args, threadsData, message, event, getLang }) {
        if (args[0] == 'on' || args[0] == 'off') {
            await threadsData.set(event.threadID, args[0] == "on", "settings.simsimi");
            return message.reply(args[0] == "on" ? getLang("turnedOn") : getLang("turnedOff"));
        } else if (args[0]) {
            const yourMessage = args.join(" ");
            try {
                const responseMessage = await getMessage(yourMessage, 'bn'); // Default language set to Bangla
                return message.reply(`${responseMessage}`);
            } catch (err) {
                console.log(err);
                return message.reply(getLang("error"));
            }
        }
    },

    onChat: async ({ args, message, threadsData, event, isUserCallCommand, getLang }) => {
        if (args.length > 1 && !isUserCallCommand && await threadsData.get(event.threadID, "settings.simsimi")) {
            try {
                const langCode = await threadsData.get(event.threadID, "settings.lang") || 'bn'; // Default language Bangla
                const responseMessage = await getMessage(args.join(" "), langCode);
                return message.reply(`${responseMessage}`);
            } catch (err) {
                return message.reply(getLang("error"));
            }
        }
    }
};

async function getMessage(yourMessage, langCode) {
    const res = await axios.post(
        'https://api.simsimi.vn/v1/simtalk',
        new URLSearchParams({
            'text': yourMessage,
            'lc': langCode // Pass the selected language code
        })
    );

    if (res.status > 200)
        throw new Error(res.data.success);

    return res.data.message;
	    }
