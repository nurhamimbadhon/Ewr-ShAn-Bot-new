module.exports = {
	config: {
		name: "dpz-g",
		aliases: ["dpz-g",],
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
"https://i.postimg.cc/Xv83VgVt/FB-IMG-1738039817218.jpg",
"https://i.postimg.cc/pdxRbStD/FB-IMG-1738040113356.jpg",
"https://i.postimg.cc/tT4b7VJJ/FB-IMG-1738040165658.jpg",
"https://i.postimg.cc/T3nfs6Bd/FB-IMG-1738080670784.jpg",
"https://i.postimg.cc/X7CbZWjf/FB-IMG-1738080676360.jpg",
"https://i.postimg.cc/2jJY8yDj/FB-IMG-1738080681237.jpg",
"https://i.postimg.cc/SRwbZTrY/FB-IMG-1738080686392.jpg",
"https://i.postimg.cc/rsdLNXSL/FB-IMG-1738080691603.jpg",
"https://i.postimg.cc/C1rg8LnN/FB-IMG-1738080696399.jpg",
"https://i.postimg.cc/HxhqxZFv/FB-IMG-1737932417277.jpg",
"https://i.postimg.cc/QVLvgB8p/FB-IMG-1737932422139.jpg",
"https://i.postimg.cc/0jKLJGsk/FB-IMG-1737932429529.jpg",
"https://i.postimg.cc/66DQbYTh/FB-IMG-1737932435875.jpg",
"https://i.postimg.cc/VsS6F3s6/FB-IMG-1737932447128.jpg",
"https://i.postimg.cc/tRsSF1DL/received-1099039228384877.jpg",
"https://i.postimg.cc/gk9DRgxZ/received-1289431262303487.jpg",
"https://i.postimg.cc/c1thrpLW/received-1293860138428646.jpg",
"https://i.postimg.cc/cLhMpZXR/received-1297950281350536.jpg",
"https://i.postimg.cc/434wynm2/received-1319183962318667.jpg",
"https://i.postimg.cc/YC6Q175c/received-1339194517096060.jpg",
"https://i.postimg.cc/mrrNRq50/received-1379144949734319.jpg",
"https://i.postimg.cc/zfd7g5hz/received-1684852035710030.jpg",
"https://i.postimg.cc/fRfBMYT0/received-1726120174627545.jpg",
"https://i.postimg.cc/MHBmNQFH/received-1796191700955966.jpg",
"https://i.postimg.cc/Zqj3McYV/received-1807956426669050.jpg",
"https://i.postimg.cc/LXwVxTvG/received-3843828462557005.jpg",
"https://i.postimg.cc/15pKKDFY/received-560835000054749.jpg",
"https://i.postimg.cc/G36MKc59/received-566705282948000.jpg",
"https://i.postimg.cc/156vYLkB/received-574498185217418.jpg",
"https://i.postimg.cc/76fV1c1g/received-583986021237624.jpg",
"https://i.postimg.cc/6ptfbTL6/received-608937218323900.jpg",
"https://i.postimg.cc/FH5jdzng/received-610388044813636.jpg",
"https://i.postimg.cc/pTT8bFpx/received-615638224476804.jpg",
"https://i.postimg.cc/9QhL3LVh/received-9020867084662256.jpg",
"https://i.postimg.cc/8CTM43G7/received-905163345108572.jpg",
"https://i.postimg.cc/BbPKtfTV/received-915674180673548.jpg",
"https://i.postimg.cc/G90sygzh/received-948985723853637.jpg",
"https://i.postimg.cc/k4pSngbS/received-996744572277557.jpg",
"https://i.postimg.cc/dtdZVfLh/received-1298705714786207.jpg",
"https://i.postimg.cc/59XFZyJq/received-1890184778056107.jpg",
"https://i.postimg.cc/yxRxWJ6M/received-2044488039405855.jpg",
"https://i.postimg.cc/V6ddQGxL/received-587792734119024.jpg",
"https://i.postimg.cc/Kj3FQCdB/received-592824523557831.jpg",
"https://i.postimg.cc/ht1J978g/received-620767694233679.jpg",
"https://i.postimg.cc/d0QhntnC/received-627454769657188.jpg",
"https://i.postimg.cc/pT4y2QvQ/received-655403457059114.jpg",
"https://i.postimg.cc/6TsKPYXS/received-912152441087546.jpg",
"https://i.postimg.cc/7LBfR8QW/received-917937196992797.jpg",
"https://i.postimg.cc/Sxh22GMD/received-996078799085618.jpg",
"https://i.postimg.cc/8kxrDGP8/received-999316578733686.jpg",
]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
	body: '「 EI NAW TMR DPZ😎  」',attachment: await global.utils.getStreamFromURL(img)
api.setMessageReaction("✅", event.messageID, (err) => {}, true);
})
}
		 }
