const moment = require("moment-timezone");
const fs = require("fs");
const { runtime, sleep } = require("../lib/myfunc");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/20YY')
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `${ucapanWaktu} @${sender.split('@')[0]} 👋
▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
┏━━⊱
┣❏➥ Creator : ${setting.ownerName}
┣❏➥ Bot name : ${setting.botName}
┣❏➥ Jam : ${jam}
┣❏➥ Tanggal : ${tanggal}
┗━━⊱
❍OWNER MENU❍
┏━━⊱
┣❏➥${prefix}join
┣❏➥${prefix}leave 
┣❏➥${prefix}self
┣❏➥${prefix}mode
┣❏➥${prefix}public
┣❏➥${prefix}setfake
┣❏➥${prefix}broadcast
┣❏➥${prefix}setmenu
┣❏➥${prefix}setowner
┣❏➥${prefix}setexif
┣❏➥${prefix}setfooter
┣❏➥${prefix}delprem
┣❏➥${prefix}ban
┣❏➥${prefix}unban
┣❏➥${prefix}block
┣❏➥${prefix}unblock
┣❏➥${prefix}sewa
┣❏➥${prefix}addlimit
┣❏➥${prefix}addprem
┣❏➥${prefix}addglimit
┣❏➥${prefix}addbalance
┣❏➥${prefix}setdonasi
┣❏➥${prefix}setthumb
┣❏➥${prefix}setppbot
┗━━⊱
❍GROUP MENU❍
┏━━⊱
┣❏➥${prefix}linkgrup
┣❏➥${prefix}mute
┣❏➥${prefix}imgtag
┣❏➥${prefix}unmute
┣❏➥${prefix}revoke
┣❏➥${prefix}setppgrup
┣❏➥${prefix}group
┣❏➥${prefix}setdesc
┣❏➥${prefix}setnamegc
┣❏➥${prefix}hidetag
┣❏➥${prefix}tagall @
┣❏➥${prefix}add @
┣❏➥${prefix}kick @
┣❏➥${prefix}promote @
┣❏➥${prefix}demote @
┣❏➥${prefix}antilink
┣❏➥${prefix}welcome
┗━━⊱
❍OTHER MENU❍
┏━━⊱
┣❏➥${prefix}runtime
┣❏➥${prefix}speed
┣❏➥${prefix}sc
┣❏➥${prefix}owner
┣❏➥${prefix}donasi
┣❏➥${prefix}kirim
┣❏➥${prefix}login
┣❏➥${prefix}listlogin
┣❏➥${prefix}delete
┣❏➥${prefix}listban
┣❏➥${prefix}listsewa
┣❏➥${prefix}listprem
┣❏➥${prefix}cekprem
┣❏➥${prefix}thanksto
┣❏➥${prefix}topbalance
┗━━⊱
❍CONVERTER MENU❍
┏━━⊱
┣❏➥${prefix}attp
┣❏➥${prefix}ttp
┣❏➥${prefix}tahta
┣❏➥${prefix}nulis
┣❏➥${prefix}nulis2
┣❏➥${prefix}ssweb
┣❏➥${prefix}fpslogo
┣❏➥${prefix}ffbanner
┣❏➥${prefix}gaminglogo
┣❏➥${prefix}smeme
┣❏➥${prefix}tovid
┣❏➥${prefix}toimg
┣❏➥${prefix}sticker
┣❏➥${prefix}wanted
┣❏➥${prefix}wasted
┣❏➥${prefix}triggered
┣❏➥${prefix}removebg
┗━━⊱
❍DOWNLOAD MENU❍
┏━━⊱
┣❏➥${prefix}play
┣❏➥${prefix}ytmp3
┣❏➥${prefix}ytmp4
┣❏➥${prefix}tiktok
┣❏➥${prefix}getvideo
┣❏➥${prefix}getmusic
┣❏➥${prefix}ytmp3vn
┣❏➥${prefix}tiktokaudio
┣❏➥${prefix}pinterest
┣❏➥${prefix}tiktoknowm
┗━━⊱
❍STALK MENU❍
┏━━⊱
┣❏➥${prefix}stalkml
┣❏➥${prefix}stalkff
┣❏➥${prefix}stalkcod
┣❏➥${prefix}stalkpubg
┣❏➥${prefix}stalkdomino
┣❏➥${prefix}stalkgenshin
┣❏➥${prefix}stalksausage
┗━━⊱
❍MEME MENU❍
┏━━⊱
┣❏➥${prefix}meme1
┣❏➥${prefix}meme2
┣❏➥${prefix}meme3
┣❏➥${prefix}meme4
┣❏➥${prefix}meme5
┣❏➥${prefix}meme6
┣❏➥${prefix}meme7
┣❏➥${prefix}meme8
┗━━⊱
▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
Base script
©_RyanMods
Runtime : ${runtime(process.uptime())}
▬▭▬▭▬ ✦✧✦ ▬▭▬▭▬
`
}
