module.exports = {
	config: {
		name: "dpz-c",
		aliases: ["dpz-c",],
		version: "1.0",
		author: "ShAn",
		countDown: 5,
		role: 0,
		shortDescription: "send you a girl photos",
		longDescription: "",
		category: "image",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
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
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
	body: '「 EI NAW TMR DPZ😎  」',attachment: await global.utils.getStreamFromURL(img)
})
}
		 }
