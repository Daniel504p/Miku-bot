/* CREDITOS A https://github.com/FG98F */
import axios from 'axios'
import hx from 'hxz-api' 

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
if (!text) throw `${mg}πππππππ ππ ππππ½ππ πΏπ ππππΌπππ πΏπ πππππΌπππΌπ ππΌππΌ πΏπππΎπΌπππΌπ ππΌπ ππππππππΌπ\nπππππππ\n*${usedPrefix + command} hades*\n\nπππππ πππππΌπππΌπ ππππππΌππ ππ πΏππππππΌπΏ πππππππ\nπππΌππππ\n*${usedPrefix + command} Hades-bot`

hx.igstory(text).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {            
conn.sendFile(m.chat, i.url, 'igstory.mp4', wm, m)
} else {     
conn.sendFile(m.chat, i.url, '', '', m)
}}});
  
let info = `βοΈππ ππππππ πππ πππππππππ πππ Γπππππ
`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, md, 'πΆπΈππ·ππ±', null, null, [
['ππππππ', '/estado'],
['π΄π¬π΅πΌ', '/menu'],
['πππππποΈ', '/grupos']
], m,)  
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria', 'ighistorias' ]
handler.exp = 87
export default handler
