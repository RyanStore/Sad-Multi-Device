let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER #1 ]───────*
*💌 Nama* : R
*✉️ Nama RL* : Ryan Aditya Pratama
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 12 Agustus 1997
*🎨 Umur* : 23/24+

*🧩 Hobby* :  Chatting, Recode script bot
*💬 Sifat* : Idiot, Tidak Ramah, Kanjut, Prik, Pedofil
*🗺️ Tinggal* : Indo, Jawa Barat, Bandung, Cimahi

*💔 Benci* : autis, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @ryannn.store
*🇫  Facebook* : https://www.facebook.com/profile.php?id=100078814156707
*🏮 Chanel Youtube* : -
*🐈 Github:* RyanStore

#########

*───────[ BIODATA OWNER #2 ]───────*
*💌 Nama Panggilan* : Faisal
*✉️ Nama Asli* : Rafi Lukmanu Faizal
*♂️ Gender* : laki-laki
*🕋 Agama* : islam
*⏰ Tanggal lahir* : 05-06-2008
*🎨 Umur* : 14

*🧩 Hobby* :  Turu
*💬 Sifat* : Idiot,Kanjut
*🗺️ Tinggal* : Kediri Jawa timur

*💔 Benci* : -

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @rafilukmanufaizal
*🇫  Facebook* : Rafi Lukmanu Faisal
*🏮 Chanel Youtube* : -
*🐈 Github:* bntr

#########

*───────[ BIODATA OWNER #3 ]───────*
*💌 Nama Panggilan* : *Cia*
*✉️ Nama Asli* : *Citra oktaviani*
*♂️ Gender* : *Perempuan*
*🕋 Agama* : *Islam*
*⏰ Tanggal lahir* : *10 Oktober 2007*
*🎨 Umur* : *14*

*🧩 Hobby* :  *Turu*
*💬 Sifat* : Idiot,Kanjut
*🗺️ Tinggal* : *Banyuwangi*

*💔 Benci* : *Paisal*

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : -
*🇫  Facebook* : -
*🏮 Chanel Youtube* : -
*🐈 Github:* -

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
