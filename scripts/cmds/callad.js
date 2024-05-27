const { getStreamsFromAttachment, log } = global.utils;
const mediaTypes = ["photo", 'png', "animated_image", "video", "audio"];

module.exports = {
	config: {
		name: "callad",
		version: "1.6",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "gửi tin nhắn về admin bot",
			en: "send message to admin bot"
		},
		longDescription: {
			vi: "gửi báo cáo, góp ý, báo lỗi,... của bạn về admin bot",
			en: "send report, feedback, bug,... to admin bot"
		},
		category: "contacts admin",
		guide: {
			vi: "   {pn} <tin nhắn>",
			en: "   {pn} <message>"
		}
	},

	langs: {
		vi: {
			missingMessage: "Vui lòng nhập tin nhắn bạn muốn gửi về admin",
			sendByGroup: "\n- Được gửi từ nhóm: %1\n- Thread ID: %2",
			sendByUser: "\n- Được gửi từ người dùng",
			content: "\n\nNội dung:\n─────────────────\n%1\n─────────────────\nPhản hồi tin nhắn này để gửi tin nhắn về người dùng",
			success: "Đã gửi tin nhắn của bạn về %1 admin thành công!\n%2",
			failed: "Đã có lỗi xảy ra khi gửi tin nhắn của bạn về %1 admin\n%2\nKiểm tra console để biết thêm chi tiết",
			reply: "📍 Phản hồi từ admin %1:\n─────────────────\n%2\n─────────────────\nPhản hồi tin nhắn này để tiếp tục gửi tin nhắn về admin",
			replySuccess: "Đã gửi phản hồi của bạn về admin thành công!",
			feedback: "📝 Phản hồi từ người dùng %1:\n- User ID: %2%3\n\nNội dung:\n─────────────────\n%4\n─────────────────\nPhản hồi tin nhắn này để gửi tin nhắn về người dùng",
			replyUserSuccess: "Đã gửi phản hồi của bạn về người dùng thành công!",
			noAdmin: "Hiện tại bot chưa có admin nào"
		},
		en: {
			missingMessage: "▸ 𝗏𝖾𝗎𝗂𝗅𝗅𝖾𝗓 𝗌𝖺𝗂𝗌𝗂𝗋 𝗅𝖾 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝖺 𝖾𝗇𝗏𝗈𝗒𝖾𝗋 𝗏𝖾𝗋𝗌 𝗅'𝖺𝖽𝗆𝗂𝗇",
			sendByGroup: "\n- 𝖾𝗇𝗏𝗈𝗒𝖾𝗋 𝖽𝖾𝗉𝗎𝗂𝗌 𝗅𝖾 𝖽𝗎 𝗀𝗋𝗈𝗎𝗉𝖾 : %1\n- 𝖨𝖣 𝖽𝗎 𝗀𝗋𝗈𝗎𝗉𝖾 : %2",
			sendByUser: "\n- 𝖾𝗇𝗏𝗈𝗒𝖾𝗋 𝖽𝖾𝗉𝗎𝗂𝗌 𝗅'𝗎𝗍𝗂𝗅𝗂𝗌𝖺𝗍𝖾𝗎𝗋",
			content: "\n\n𝖼𝗈𝗇𝗍𝖾𝗇𝗎:\n─────────────────\n%1\n─────────────────\n▸ 𝗋𝖾𝗉𝗋𝖾𝗇𝖾𝗋 𝖼𝖾 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗉𝗈𝗎𝗋 𝗋𝖾𝗉𝗈𝗇𝖽𝗋𝖾 𝖺 𝗅'𝖺𝖽𝗆𝗂𝗇",
			success: "▸ 𝖾𝗇𝗏𝗈𝗂𝖾 𝖽𝗎 𝗆𝖾𝗌𝗌𝖺𝗀𝖾, 𝖾𝖿𝖿𝖾𝖼𝗍𝗎𝖾𝗋 𝖺𝗏𝖾𝖼 𝗌𝗎𝖼𝖼𝖾𝗌\n%2",
			failed: "🔴 𝖾𝗋𝗋𝖾𝗎𝗋",
			reply: "🟢 𝖱𝖾𝗉𝗈𝗇𝗌𝖾 𝖽𝖾 𝗅'𝖺𝖽𝗆𝗂𝗇 %1:\n─────────────────\n%2\n─────────────────\n",
			replySuccess: "Sent your reply to admin successfully!",
			feedback: "🟢 𝖱𝖾𝗉𝗈𝗇𝗌𝖾 𝖽𝖾 𝗅'𝗎𝗍𝗂𝗅𝗂𝗌𝖺𝗍𝖾𝗎𝗋 %1:\n- 𝖨𝖽𝖾𝗇𝗍𝗂𝖿𝗂𝖺𝗇𝗍 : %2%3\n\n𝖼𝗈𝗇𝗍𝖾𝗇𝗎 :\n─────────────────\n%4\n─────────────────\n",
			replyUserSuccess: "🟢 𝖾𝗇𝗏𝗈𝗒𝖾𝗋 𝖺𝗏𝖾𝖼 𝗌𝗎𝖼𝖼𝖾𝗌",
			noAdmin: "🔴 𝖫𝖾 𝖻𝗈𝗍 𝗇𝖾 𝖽𝗂𝗌𝗉𝗈𝗌𝖾 𝖽'𝖺𝗎𝖼𝗎𝗇 𝖺𝖽𝗆𝗂𝗇 𝗉𝗈𝗎𝗋 𝗅𝖾 𝗆𝗈𝗆𝖾𝗇𝗍"
		}
	},

	onStart: async function ({ args, message, event, usersData, threadsData, api, commandName, getLang }) {
		const { config } = global.GoatBot;
		if (!args[0])
			return message.reply(getLang("missingMessage"));
		const { senderID, threadID, isGroup } = event;
		if (config.adminBot.length == 0)
			return message.reply(getLang("noAdmin"));
		const senderName = await usersData.getName(senderID);
		const msg = "==⛶ 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 ⛶=="
			+ `\n▸ 𝖴𝗍𝗂𝗅𝗂𝗌𝖺𝗍𝖾𝗎𝗋 : ${senderName}`
			+ `\n▸ 𝖨𝖽𝖾𝗇𝗍𝗂𝖿𝗂𝖺𝗇𝗍 : ${senderID}`
			+ (isGroup ? getLang("sendByGroup", (await threadsData.get(threadID)).threadName, threadID) : getLang("sendByUser"));

		const formMessage = {
			body: msg + getLang("content", args.join(" ")),
			mentions: [{
				id: senderID,
				tag: senderName
			}],
			attachment: await getStreamsFromAttachment(
				[...event.attachments, ...(event.messageReply?.attachments || [])]
					.filter(item => mediaTypes.includes(item.type))
			)
		};

		const successIDs = [];
		const failedIDs = [];
		const adminNames = await Promise.all(config.adminBot.map(async item => ({
			id: item,
			name: await usersData.getName(item)
		})));

		for (const uid of config.adminBot) {
			try {
				const messageSend = await api.sendMessage(formMessage, uid);
				successIDs.push(uid);
				global.GoatBot.onReply.set(messageSend.messageID, {
					commandName,
					messageID: messageSend.messageID,
					threadID,
					messageIDSender: event.messageID,
					type: "userCallAdmin"
				});
			}
			catch (err) {
				failedIDs.push({
					adminID: uid,
					error: err
				});
			}
		}

		let msg2 = "";
		if (successIDs.length > 0)
			msg2 += getLang("success", successIDs.length,
				adminNames.filter(item => successIDs.includes(item.id)).map(item => ` <@${item.id}> (${item.name})`).join("\n")
			);
		if (failedIDs.length > 0) {
			msg2 += getLang("failed", failedIDs.length,
				failedIDs.map(item => ` <@${item.adminID}> (${adminNames.find(item2 => item2.id == item.adminID)?.name || item.adminID})`).join("\n")
			);
			log.err("CALL ADMIN", failedIDs);
		}
		return message.reply({
			body: msg2,
			mentions: adminNames.map(item => ({
				id: item.id,
				tag: item.name
			}))
		});
	},

	onReply: async ({ args, event, api, message, Reply, usersData, commandName, getLang }) => {
		const { type, threadID, messageIDSender } = Reply;
		const senderName = await usersData.getName(event.senderID);
		const { isGroup } = event;

		switch (type) {
			case "userCallAdmin": {
				const formMessage = {
					body: getLang("reply", senderName, args.join(" ")),
					mentions: [{
						id: event.senderID,
						tag: senderName
					}],
					attachment: await getStreamsFromAttachment(
						event.attachments.filter(item => mediaTypes.includes(item.type))
					)
				};

				api.sendMessage(formMessage, threadID, (err, info) => {
					if (err)
						return message.err(err);
					message.reply(getLang("replyUserSuccess"));
					global.GoatBot.onReply.set(info.messageID, {
						commandName,
						messageID: info.messageID,
						messageIDSender: event.messageID,
						threadID: event.threadID,
						type: "adminReply"
					});
				}, messageIDSender);
				break;
			}
			case "adminReply": {
				let sendByGroup = "";
				if (isGroup) {
					const { threadName } = await api.getThreadInfo(event.threadID);
					sendByGroup = getLang("sendByGroup", threadName, event.threadID);
				}
				const formMessage = {
					body: getLang("feedback", senderName, event.senderID, sendByGroup, args.join(" ")),
					mentions: [{
						id: event.senderID,
						tag: senderName
					}],
					attachment: await getStreamsFromAttachment(
						event.attachments.filter(item => mediaTypes.includes(item.type))
					)
				};

				api.sendMessage(formMessage, threadID, (err, info) => {
					if (err)
						return message.err(err);
					message.reply(getLang("replySuccess"));
					global.GoatBot.onReply.set(info.messageID, {
						commandName,
						messageID: info.messageID,
						messageIDSender: event.messageID,
						threadID: event.threadID,
						type: "userCallAdmin"
					});
				}, messageIDSender);
				break;
			}
			default: {
				break;
			}
		}
	}
};