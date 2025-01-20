module.exports = {
	config: {
		name: "p",
		aliases: ["18+"],
		version: "1.0",
		author: "Hasan",
		countDown: 5,
		role: 2,
		shortDescription: "send you pic of pussy",
		longDescription: "sends u pic of girls pussy",
		category: "18+",
		guide: "{pn}"
	},

	onStart: async function ({ message, event, args, global }) {
		// অনুমোদিত ব্যবহারকারীদের ID তালিকা
		const allowedUsers = ["100068909067279"]; // এখানে অনুমোদিত ব্যবহারকারীর আইডি দিন

		// চেক করুন ব্যবহারকারী অনুমোদিত কি না
		if (!allowedUsers.includes(event.senderID)) {
			return message.reply("Who are you bby👊. vala hoiti na tui🐸🫥");
		}

		// লিঙ্কের তালিকা
		var link = [
			"https://i.ibb.co/jfqMF07/image.jpg",
			"https://i.ibb.co/tBBCS4y/image.jpg",
			"https://i.ibb.co/3zpyMVY/image.jpg",
			"https://i.ibb.co/gWbWT8k/image.jpg",
			"https://i.ibb.co/mHtyD1P/image.jpg",
			"https://i.ibb.co/vPHNhdY/image.jpg",
			"https://i.ibb.co/rm6rPjb/image.jpg",
			"https://i.ibb.co/7GpN2GW/image.jpg",
			"https://i.ibb.co/CnfMVpg/image.jpg",
		];
		
		// এলোমেলো লিঙ্ক নির্বাচন
		let img = link[Math.floor(Math.random() * link.length)];
		
		// মেসেজ পাঠানো
		message.send({
			body: '「 Pussy💦🥵 」',
			attachment: await global.utils.getStreamFromURL(img)
		});
	}
};
