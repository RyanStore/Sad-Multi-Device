import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』*', `INI ADALAH BOT WHATSAPP Yang Siap Membantu anda,Patuhi Rules Bot: 
1. Jangan Spam Bot /Beri Jeda Kepada Bot 
2.Jangan Vc/Telpon Bot 
3. Jika Ada Bug Harap Hubungi Owner
4. Tekan Button Gc Jb Untuk Join Group Bot Official,\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://chat.whatsapp.com/DMqCCHW4Uvb2Kd4Cpus1vC', 'Gc JB Owner', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\nhttps://chat.whatsapp.com/B9cQxA0NWrXHtFclMS5awJ`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
