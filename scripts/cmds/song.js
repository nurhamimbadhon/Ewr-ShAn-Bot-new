const axios = require("axios");
const fs = require('fs');

const baseApiUrl = async () => {
	const base = await axios.get(
		`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`
	);
	return base.data.api;
};

module.exports = {
	config: {
		name: "song",
		aliases: ["music"],
		version: "1.0.0",
		author: "dipto",
		countDown: 5,
		role: 0,
		description: {
			en: "Download MP3 music from YouTube by song name"
		},
		category: "media",
		guide: {
			en: "  {pn} <song name>: use to download MP3 music by song name"
				+ "\n   Example:"
				+ "\n {pn} Despacito"
		}
	},
	onStart: async ({ api, args, event }) => {
		if (args.length === 0) {
			return api.sendMessage("❌ Please provide a song name.", event.threadID, event.messageID);
		}

		const keyWord = args.join(" ");
		const maxResults = 1;
		let result;

		try {
			result = (await axios.get(`${await baseApiUrl()}/ytFullSearch?songName=${keyWord}`)).data.slice(0, maxResults);
		} catch (err) {
			return api.sendMessage("❌ An error occurred: " + err.message, event.threadID, event.messageID);
		}

		if (result.length === 0) {
			return api.sendMessage("⭕ No search results match the keyword: " + keyWord, event.threadID, event.messageID);
		}

		const selectedVideo = result[0];
		const videoID = selectedVideo.id;

		try {
			const format = 'mp3';
			const path = `ytb_${format}_${videoID}.${format}`;
			const { data: { title, downloadLink } } = await axios.get(`${await baseApiUrl()}/ytDl3?link=${videoID}&format=${format}&quality=3`);

			await api.sendMessage({
				body: `🎶 Title: ${title}`,
				attachment: await dipto(downloadLink, path)
			}, event.threadID, () => fs.unlinkSync(path), event.messageID);
		} catch (e) {
			console.error(e);
			return api.sendMessage('❌ Failed to download the music. Please try again later.', event.threadID, event.messageID);
		}
	}
};

async function dipto(url, pathName) {
	try {
		const response = (await axios.get(url, {
			responseType: "arraybuffer"
		})).data;

		fs.writeFileSync(pathName, Buffer.from(response));
		return fs.createReadStream(pathName);
	} catch (err) {
		throw err;
	}
                }
