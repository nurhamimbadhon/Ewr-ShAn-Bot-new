module.exports = {
	config: {
		name: "dpz-b",
		aliases: ["dpz-b",],
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
"https://i.postimg.cc/4yvhpb06/received-1000035335289031.jpg",
"https://i.postimg.cc/yYPZdjcB/received-1076227457871166.jpg",
"https://i.postimg.cc/6pF554jt/received-1096976655546360.jpg",
"https://i.postimg.cc/6pqyQXBL/received-1108081173922240.jpg",
"https://i.postimg.cc/0jvz5KNb/received-1119865316281654.jpg",
"https://i.postimg.cc/mkTrWxd9/received-1123030656212905.jpg",
"https://i.postimg.cc/sXY2LfJy/received-1153000679881446.jpg",
"https://i.postimg.cc/6qhy867z/received-1242955296818211.jpg",
"https://i.postimg.cc/BZ2DW4vj/received-1283969755983095.jpg",
"https://i.postimg.cc/yYYNfH34/received-1312212983338713.jpg",
"https://i.postimg.cc/k58MVMz8/received-1393992361976186.jpg",
"https://i.postimg.cc/qvNvTxG1/received-1785849285510599.jpg",
"https://i.postimg.cc/D05w2CDM/received-1799946257427867.jpg",
"https://i.postimg.cc/0y4rMBQg/received-1964384894082996.jpg",
"https://i.postimg.cc/wBStPG85/received-2032680760505220.jpg",
"https://i.postimg.cc/50LHMSbh/received-2050330285404640.jpg",
"https://i.postimg.cc/HL7nQ9cr/received-2533721230293696.jpg",
"https://i.postimg.cc/fbFXsbX9/received-3940621569492990.jpg",
"https://i.postimg.cc/CLY8SXZm/received-513095298559754.jpg",
"https://i.postimg.cc/PqNZ0DLH/received-599205826302160.jpg",
"https://i.postimg.cc/wT61SNPr/received-609170281483202.jpg",
"https://i.postimg.cc/02WyFB76/received-617691784002426.jpg",
"https://i.postimg.cc/ZRtRjvpV/received-621425926934975.jpg",
"https://i.postimg.cc/BZC6c66B/received-635385989061986.jpg",
"https://i.postimg.cc/y6hJQjf9/received-797407929244415.jpg",
"https://i.postimg.cc/Bnn11FBF/received-9403106483042299.jpg",
"https://i.postimg.cc/L6NJRXF8/received-946942543669754.jpg",
"https://i.postimg.cc/yNJgLz5Y/received-953833709584746.jpg",
"https://i.postimg.cc/y8p3hNLb/received-985550280059132.jpg",
"https://i.postimg.cc/5tk235Xc/received-1012712897542347.jpg",
"https://i.postimg.cc/gJCk9YyN/received-1013844850553335.jpg",
"https://i.postimg.cc/vBgHS1n4/received-589904230557414.jpg",
"https://i.postimg.cc/rpppxZFC/received-996290872406412.jpg",
]

let img = link[Math.floor(Math.random()*link.length)]
api.setMessageReaction("✅", event.messageID, (err) => {}, true);
message.send({
	body: '「 EI NAW TMR DPZ😎  」',attachment: await global.utils.getStreamFromURL(img)
})
}
		 }
