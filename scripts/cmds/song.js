const axios = require("axios");
const fs = require("fs");

const baseApiUrl = async () => {
    const base = await axios.get(
        `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`
    );
    return base.data.api;
};

module.exports = {
    config: {
        name: "song",
        aliases: ["sing", "music"],
        version: "1.0.0",
        author: "dipto",
        description: {
            en: "Download audio from YouTube",
        },
        category: "media",
        guide: {
            en: "  {pn} [<video link>]: use to download audio from YouTube."
                + "\n   Example:"
                + "\n {pn} https://www.youtube.com/watch?v=example",
        },
    },
    onStart: async ({ api, args, event }) => {
        const checkurl = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})(?:\S+)?$/;
        const urlYtb = checkurl.test(args[0]);

        if (!urlYtb) {
            return api.sendMessage(
                "❌ Please provide a valid YouTube link.",
                event.threadID,
                event.messageID
            );
        }

        const match = args[0].match(checkurl);
        const videoID = match ? match[1] : null;

        if (!videoID) {
            return api.sendMessage(
                "❌ Failed to extract video ID from the provided link.",
                event.threadID,
                event.messageID
            );
        }

        try {
            const format = "mp3";
            const path = `ytb_audio_${videoID}.${format}`;
            const { data: { title, downloadLink, quality } } = await axios.get(
                `${await baseApiUrl()}/ytDl3?link=${videoID}&format=${format}&quality=3`
            );

            await api.sendMessage(
                {
                    body: `🎵 Title: ${title}\n🎶 Quality: ${quality}`,
                    attachment: await downloadFile(downloadLink, path),
                },
                event.threadID,
                () => fs.unlinkSync(path),
                event.messageID
            );
        } catch (e) {
            console.error(e);
            return api.sendMessage(
                "❌ Failed to download audio. Please try again later.",
                event.threadID,
                event.messageID
            );
        }
    },
};

async function downloadFile(url, pathName) {
    try {
        const response = (await axios.get(url, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(pathName, Buffer.from(response));
        return fs.createReadStream(pathName);
    } catch (err) {
        throw err;
    }
}
