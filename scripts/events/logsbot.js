const { getTime } = global.utils;

module.exports = {
	config: {
		name: "logsbot",
		isBot: true,
		version: "1.4",
		author: "NTKhang & Deadline Anderlias",
		envConfig: {
			allow: true
		},
		category: "events"
	},

	langs: {
		vi: {
			title: "====== Nhật ký bot ======",
			added: "\n✅\nSự kiện: bot được thêm vào nhóm mới\n- Người thêm: %1",
			kicked: "\n❌\nSự kiện: bot bị kick\n- Người kick: %1",
			footer: "\n- User ID: %1\n- Nhóm: %2\n- ID nhóm: %3\n- Thời gian: %4"
		},
		en: {
			title: "====== [𝗜𝗡𝗙𝗢𝗦] ======",
			added: "\n▸ 𝗜𝗡𝗙𝗢: 𝗅𝖾 𝖻𝗈𝗍 𝖺 𝖾𝗍𝖾 𝖺𝗃𝗈𝗎𝗍𝖾𝗋 𝖽𝖺𝗇𝗌 𝗎𝗇 𝗀𝗋𝗈𝗎𝗉𝖾 𝗉𝖺𝗋 %1",
			kicked: "\n▸ 𝗜𝗡𝗙𝗢: 𝗅𝖾 𝖻𝗈𝗍 𝖺 𝖾𝗍𝖾 𝗌𝗎𝗉𝗉𝗋𝗂𝗆𝖾𝗋 𝖽'𝗎𝗇 𝗀𝗋𝗈𝗎𝗉𝖾 𝗉𝖺𝗋 %1",
			footer: "\n▸ 𝗨𝗧𝗜𝗟𝗜𝗦𝗔𝗧𝗘𝗨𝗥: %1\n▸ 𝗚𝗥𝗢𝗨𝗣𝗘: %2\n▸ 𝗜𝗗: %3\n▸ 𝗧𝗘𝗠𝗣𝗦: %4"
		}
	},

	onStart: async ({ usersData, threadsData, event, api, getLang }) => {
		if (
			(event.logMessageType == "log:subscribe" && event.logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID()))
			|| (event.logMessageType == "log:unsubscribe" && event.logMessageData.leftParticipantFbId == api.getCurrentUserID())
		) return async function () {
			let msg = getLang("title");
			const { author, threadID } = event;
			if (author == api.getCurrentUserID())
				return;
			let threadName;
			const { config } = global.GoatBot;

			if (event.logMessageType == "log:subscribe") {
				if (!event.logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID()))
					return;
				threadName = (await api.getThreadInfo(threadID)).threadName;
				const authorName = await usersData.getName(author);
				msg += getLang("added", authorName);
			}
			else if (event.logMessageType == "log:unsubscribe") {
				if (event.logMessageData.leftParticipantFbId != api.getCurrentUserID())
					return;
				const authorName = await usersData.getName(author);
				const threadData = await threadsData.get(threadID);
				threadName = threadData.threadName;
				msg += getLang("kicked", authorName);
			}
			const time = getTime("DD/MM/YYYY HH:mm:ss");
			msg += getLang("footer", author, threadName, threadID, time);

			for (const adminID of config.adminBot)
				api.sendMessage(msg, adminID);
		};
	}
};