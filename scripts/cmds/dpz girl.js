module.exports = {
	config: {
		name: "dpz girl",
		aliases: ["dpz g",],
		version: "1.0",
		author: "AceGun",
		countDown: 5,
		role: 0,
		shortDescription: "send you a girl photos",
		longDescription: "",
		category: "Image",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [
"https://i.postimg.cc/Xv83VgVt/FB-IMG-1738039817218.jpg" ,
"https://i.postimg.cc/pdxRbStD/FB-IMG-1738040113356.jpg" ,
"https://i.postimg.cc/tT4b7VJJ/FB-IMG-1738040165658.jpg" ,
"https://i.postimg.cc/T3nfs6Bd/FB-IMG-1738080670784.jpg" ,
"https://i.postimg.cc/X7CbZWjf/FB-IMG-1738080676360.jpg" ,
"https://i.postimg.cc/2jJY8yDj/FB-IMG-1738080681237.jpg" ,
"https://i.postimg.cc/SRwbZTrY/FB-IMG-1738080686392.jpg" ,
"https://i.postimg.cc/rsdLNXSL/FB-IMG-1738080691603.jpg" ,
"https://i.postimg.cc/C1rg8LnN/FB-IMG-1738080696399.jpg" ,
"https://i.postimg.cc/HxhqxZFv/FB-IMG-1737932417277.jpg" ,
"https://i.postimg.cc/QVLvgB8p/FB-IMG-1737932422139.jpg" ,
"https://i.postimg.cc/0jKLJGsk/FB-IMG-1737932429529.jpg" ,
"https://i.postimg.cc/66DQbYTh/FB-IMG-1737932435875.jpg" ,
"https://i.postimg.cc/VsS6F3s6/FB-IMG-1737932447128.jpg" ,
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
	body: '「 Here is your Babe😻 」',attachment: await global.utils.getStreamFromURL(img)
})
}
		 }
