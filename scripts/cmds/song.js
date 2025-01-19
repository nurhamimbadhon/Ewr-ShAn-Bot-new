const axios = require("axios");
const fs = require("fs");

const baseApiUrl = async () => {
    const base = await axios.get(
        `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`
    );
    return base.data.api;
};

const youtubeSearchApi = async (query) => {
    const apiKey = "AIzaSyCvUXgFaEtaOevitaW0dpp9PAMieSbSNGY
"; // YouTube Data API Key
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
        query
    )}&key=${apiKey}&maxResults=1`;
    const response = await axios.get(searchUrl);
    return response.data.items[0]?.id?.videoId || null;
};

module.exports = {
    config: {
        name: "song",
        aliases: ["sing", "music"],
        version: "1.1.0",
        author: "dipto",
        description: {
            en: "Download audio from YouTube by link or song name",
        },
        category: "media",
        guide: {
            en: "  {pn} [<video link>|<song name>]: use to download audio from YouTube."
                + "\n   Examples:"
                + "\n {pn} https://www.youtube.com/watch?v=example"
                + "\n {pn} Shape of You",
        },
    },
    onStart: async ({ api, args, event }) => {
        if (args.length === 0) {
            return api.sendMessage(
                "❌ Please provide a YouTube link or song name.",
                event.threadID,
                event.messageID
            );
        }

        const input = args.join(" ");
        const checkurl = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})(?:\S+)?$/;
        const urlYtb = checkurl.test(input);
        let videoID = null;

        if (urlYtb) {
            const match = input.match(checkurl);
            videoID = match ? match[1] : null;
        } else {
            videoID = await youtubeSearchApi(input); // Search by song name
            if (!videoID) {
                return api.sendMessage(
                    "❌ No video found for the given song name.",
                    event.threadID,
                    event.messageID
                );
            }
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
