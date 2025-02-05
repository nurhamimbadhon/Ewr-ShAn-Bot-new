module.exports = {
	config: {
		name: "n",
		aliases: ["nude"],
		version: "1.0",
		author: "ShAn",
		countDown: 5,
		role: 2,
		shortDescription: "send you pic of nude",
		longDescription: "sends u pic of girls nude",
		category: "18+",
		guide: "{pn}"
	},


	onStart: async function ({ api, event, message }) {
	 var link = [
"",
]

let img = link[Math.floor(Math.random()*link.length)]
api.setMessageReaction("🥵", event.messageID, (err) => {}, true);
message.send({
	body: '「 Sugar Mumma Ahh💦🥵 」',attachment: await global.utils.getStreamFromURL(img)
})
}
		 }
