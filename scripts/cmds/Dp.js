module.exports = {
	config: {
		name: "dpz",
		aliases: ["cute",],
		version: "1.0",
		author: "AceGun",
		countDown: 5,
		role: 2,
		shortDescription: "send you a girl photos",
		longDescription: "",
		category: "Image",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [
"https://i.postimg.cc/tCkJQwxD/FB-IMG-1738039817218.jpg" ,
"https://i.postimg.cc/PrTJ7TPP/FB-IMG-1738039853519.jpg" ,
"https://i.postimg.cc/Y21j8h25/FB-IMG-1738039859733.jpg" ,
"https://i.postimg.cc/yxXdNrr1/FB-IMG-1738039866104.jpg" ,
"https://i.postimg.cc/MK96rBCF/FB-IMG-1738039876321.jpg" ,
"https://i.postimg.cc/L4B6LwNR/FB-IMG-1738039883940.jpg" ,
"https://i.postimg.cc/mg6rh9VH/FB-IMG-1738039890417.jpg" ,
"https://i.postimg.cc/4x3dJPvG/FB-IMG-1738040113356.jpg" ,
"https://i.postimg.cc/hGztmG33/FB-IMG-1738040165658.jpg" ,
"https://i.postimg.cc/Rhzh4zdp/FB-IMG-1738080670784.jpg" ,
"https://i.postimg.cc/MK6ZD5FB/FB-IMG-1738080676360.jpg" ,
"https://i.postimg.cc/VvRfw0d5/FB-IMG-1738080681237.jpg" ,
"https://i.postimg.cc/HnHYF9Wf/FB-IMG-1738080686392.jpg" ,
"https://i.postimg.cc/hjV4C5nL/FB-IMG-1738080691603.jpg" ,
"https://i.postimg.cc/7LFYnyFP/FB-IMG-1738080696399.jpg" ,
]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
	body: '「 Here is your Babe😻 」',attachment: await global.utils.getStreamFromURL(img)
})
}
		 }
