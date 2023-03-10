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
	return `${ucapanWaktu} @${sender.split('@')[0]} π
β¬β­β¬β­β¬ β¦β§β¦ β¬β­β¬β­β¬
ββββ±
β£ββ₯ Creator : ${setting.ownerName}
β£ββ₯ Bot name : ${setting.botName}
β£ββ₯ Jam : ${jam}
β£ββ₯ Tanggal : ${tanggal}
ββββ±
βOWNER MENUβ
ββββ±
β£ββ₯${prefix}join
β£ββ₯${prefix}leave 
β£ββ₯${prefix}self
β£ββ₯${prefix}mode
β£ββ₯${prefix}public
β£ββ₯${prefix}setfake
β£ββ₯${prefix}broadcast
β£ββ₯${prefix}setmenu
β£ββ₯${prefix}setowner
β£ββ₯${prefix}setexif
β£ββ₯${prefix}setfooter
β£ββ₯${prefix}delprem
β£ββ₯${prefix}ban
β£ββ₯${prefix}unban
β£ββ₯${prefix}block
β£ββ₯${prefix}unblock
β£ββ₯${prefix}sewa
β£ββ₯${prefix}addlimit
β£ββ₯${prefix}addprem
β£ββ₯${prefix}addglimit
β£ββ₯${prefix}addbalance
β£ββ₯${prefix}setdonasi
β£ββ₯${prefix}setthumb
β£ββ₯${prefix}setppbot
ββββ±
βGROUP MENUβ
ββββ±
β£ββ₯${prefix}linkgrup
β£ββ₯${prefix}mute
β£ββ₯${prefix}imgtag
β£ββ₯${prefix}unmute
β£ββ₯${prefix}revoke
β£ββ₯${prefix}setppgrup
β£ββ₯${prefix}group
β£ββ₯${prefix}setdesc
β£ββ₯${prefix}setnamegc
β£ββ₯${prefix}hidetag
β£ββ₯${prefix}tagall @
β£ββ₯${prefix}add @
β£ββ₯${prefix}kick @
β£ββ₯${prefix}promote @
β£ββ₯${prefix}demote @
β£ββ₯${prefix}antilink
β£ββ₯${prefix}welcome
ββββ±
βOTHER MENUβ
ββββ±
β£ββ₯${prefix}runtime
β£ββ₯${prefix}speed
β£ββ₯${prefix}sc
β£ββ₯${prefix}owner
β£ββ₯${prefix}donasi
β£ββ₯${prefix}kirim
β£ββ₯${prefix}login
β£ββ₯${prefix}listlogin
β£ββ₯${prefix}delete
β£ββ₯${prefix}listban
β£ββ₯${prefix}listsewa
β£ββ₯${prefix}listprem
β£ββ₯${prefix}cekprem
β£ββ₯${prefix}thanksto
β£ββ₯${prefix}topbalance
ββββ±
βCONVERTER MENUβ
ββββ±
β£ββ₯${prefix}attp
β£ββ₯${prefix}ttp
β£ββ₯${prefix}tahta
β£ββ₯${prefix}nulis
β£ββ₯${prefix}nulis2
β£ββ₯${prefix}ssweb
β£ββ₯${prefix}fpslogo
β£ββ₯${prefix}ffbanner
β£ββ₯${prefix}gaminglogo
β£ββ₯${prefix}smeme
β£ββ₯${prefix}tovid
β£ββ₯${prefix}toimg
β£ββ₯${prefix}sticker
β£ββ₯${prefix}wanted
β£ββ₯${prefix}wasted
β£ββ₯${prefix}triggered
β£ββ₯${prefix}removebg
ββββ±
βDOWNLOAD MENUβ
ββββ±
β£ββ₯${prefix}play
β£ββ₯${prefix}ytmp3
β£ββ₯${prefix}ytmp4
β£ββ₯${prefix}tiktok
β£ββ₯${prefix}getvideo
β£ββ₯${prefix}getmusic
β£ββ₯${prefix}ytmp3vn
β£ββ₯${prefix}tiktokaudio
β£ββ₯${prefix}pinterest
β£ββ₯${prefix}tiktoknowm
ββββ±
βSTALK MENUβ
ββββ±
β£ββ₯${prefix}stalkml
β£ββ₯${prefix}stalkff
β£ββ₯${prefix}stalkcod
β£ββ₯${prefix}stalkpubg
β£ββ₯${prefix}stalkdomino
β£ββ₯${prefix}stalkgenshin
β£ββ₯${prefix}stalksausage
ββββ±
βMEME MENUβ
ββββ±
β£ββ₯${prefix}meme1
β£ββ₯${prefix}meme2
β£ββ₯${prefix}meme3
β£ββ₯${prefix}meme4
β£ββ₯${prefix}meme5
β£ββ₯${prefix}meme6
β£ββ₯${prefix}meme7
β£ββ₯${prefix}meme8
ββββ±
β¬β­β¬β­β¬ β¦β§β¦ β¬β­β¬β­β¬
Base script
Β©_RyanMods
Runtime : ${runtime(process.uptime())}
β¬β­β¬β­β¬ β¦β§β¦ β¬β­β¬β­β¬
`
}
