module.exports = {
	config: {
		name: "dpc",
		aliases: ["dpc",],
		version: "1.0",
		author: "ShAn",
		countDown: 5,
		role: 0,
		shortDescription: "send you a girl photos",
		longDescription: "",
		category: "image",
		guide: "{pn}"
	},

	onStart: async function ({ api, event, message }) {
	api.setMessageReaction("⏳", event.messageID, (err) => {}, true);
	 var link = [
"https://i.postimg.cc/zvmJ6RV2/FB-IMG-1716311906632.jpg",
"https://i.postimg.cc/fWXWX5rG/FB-IMG-1737933162958.jpg",
"https://i.postimg.cc/zvnJrXhz/FB-IMG-1737933169280.jpg",
"https://i.postimg.cc/yNdYZHMj/FB-IMG-1737933174983.jpg",
"https://i.postimg.cc/76JHKNYT/FB-IMG-1737933180261.jpg",
"https://i.postimg.cc/0NB5G4xs/FB-IMG-1737933185762.jpg",
"https://i.postimg.cc/j5SN2mcY/IMG-20250130-133538.jpg",
"https://i.postimg.cc/pdZz2RDB/IMG-20250130-133656.jpg",
"https://i.postimg.cc/TPGnMpWw/IMG-20250130-133806.jpg",
"https://i.postimg.cc/CxCfNS6V/FB-IMG-1737932447128.jpg",
"https://i.postimg.cc/MKtvxZnJ/FB-IMG-1738610233019.jpg",
"https://i.postimg.cc/bwBrD606/FB-IMG-1738610235689.jpg",
"https://i.postimg.cc/Gm29p0D8/FB-IMG-1738610237819.jpg",
"https://i.postimg.cc/zBmfpVcK/FB-IMG-1738610240300.jpg",
"https://i.postimg.cc/hGQj99pK/FB-IMG-1738610242557.jpg",
"https://i.postimg.cc/SRFzXZ40/FB-IMG-1738610245166.jpg",
"https://i.postimg.cc/mDFH2v0N/FB-IMG-1738610247212.jpg",
"https://i.postimg.cc/9QFwqR6f/FB-IMG-1738610364005.jpg",
"https://i.postimg.cc/s2bM8nvB/FB-IMG-1738610373621.jpg",
"https://i.postimg.cc/R0W3grV5/FB-IMG-1738610375870.jpg",
"https://i.postimg.cc/zvF3y8pW/FB-IMG-1738610378996.jpg",
"https://i.postimg.cc/Y9gvw1Wd/FB-IMG-1738610382002.jpg",
"https://i.postimg.cc/RVvNjJVT/FB-IMG-1738610384160.jpg",
"https://i.postimg.cc/MZ7nPmxT/FB-IMG-1738610386183.jpg",
"https://i.postimg.cc/h4TmFq8K/FB-IMG-1738610402412.jpg",
"https://i.postimg.cc/5NJCbkpL/FB-IMG-1738610404433.jpg",
"https://i.postimg.cc/5yBQ8w9X/FB-IMG-1738610407807.jpg",
"https://i.postimg.cc/Qd49gNDJ/FB-IMG-1738610411060.jpg",
"https://i.postimg.cc/9FBqMtNS/FB-IMG-1738610413133.jpg",
"https://i.postimg.cc/rskKyKGM/FB-IMG-1738610415778.jpg",
"https://i.postimg.cc/zvF3y8pW/FB-IMG-1738610378996.jpg",
"https://i.postimg.cc/QCywkW6r/FB-IMG-1738610073351.jpg",
"https://i.postimg.cc/VLJ3sD6s/FB-IMG-1738610076216.jpg",
"https://i.postimg.cc/RCskzjvb/FB-IMG-1738610078828.jpg",
"https://i.postimg.cc/28gg1hbQ/FB-IMG-1738610081288.jpg",
"https://i.postimg.cc/mgMJCkC0/FB-IMG-1738610084795.jpg",
"https://i.postimg.cc/6QXS0KhT/FB-IMG-1738610087504.jpg",
]

let img = link[Math.floor(Math.random()*link.length)]
api.setMessageReaction("✅", event.messageID, (err) => {}, true);
message.send({
	body: '「 EI NAW TMR DPZ😎  」',attachment: await global.utils.getStreamFromURL(img)
})
}
		 }
