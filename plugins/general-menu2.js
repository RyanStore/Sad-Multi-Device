import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』*', `Banh Ini Cuman Bot Biasa Aja Cuman Buat Donlot Pidio-bikin setiker-dan lain lain-pitur nya masih di kembangkan ya
Patuhi Rules Bot: 
1. Jangan Spam Bot 
2.Jangan Vc/Telpon Bot 
3. Jika Ada Bug Harap Hubungi Owner
4. Owner Dan Admin Rekber Hanya : wa.me/6282252285143 (Selain itu Clone !!!)

#Rules Admin Rekber By Yann Store 
1. Pakai lah jasa admin setempat/Admin Rekber Group Agar Terhindar Dari Penipuan!!
2. Rekber ? Mc/Bikin Group
3. Admin Melayani : Gober-Danaber-Pulber
4. Bee smart buyer and seller
❗NOTED : Admin Rekber Ori Hanya Ini : 082252285143 [ Selain Itu Di Pastikan CLONE !!!]

\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ ᴍᴇɴᴜ ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://chat.whatsapp.com/B9cQxA0NWrXHtFclMS5awJ', 'Group Bot And Jb Official', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\ngwehj samnge dengan animeh banh 😅☝️`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler
