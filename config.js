const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349025902700";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_14_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc0LFxuICAgICAgICA4NixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTczLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDYwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDczLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDksXG4gICAgICAgIDk5LFxuICAgICAgICA1LFxuICAgICAgICA4OCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNixcbiAgICAgICAgMTgwLFxuICAgICAgICA3NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDY2LFxuICAgICAgICA0OCxcbiAgICAgICAgODEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDk2LFxuICAgICAgICA1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNixcbiAgICAgICAgMTUxLFxuICAgICAgICA4LFxuICAgICAgICAzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQmxEN1VFOWg2dzl3MTd0bVhXTm1tMk04dnJTSzNrOHphdGdlTzhjRmRaND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDI1OTAyNzAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1ODY2NDNGRTdDNUZBQzRCRUUwQUY3MDE4N0VFNzEzNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcwMTcyNDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDI1OTAyNzAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4QUZBN0MzNEFCRTVEMjI0NzZFQ0ExRDE1RjcyMkM2MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcwMTcyNDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDI1OTAyNzAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMzg2MDU1MkM1MTU0MkNDOEI5NDI5RDI4NTFDQjI2Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcwMTcyNDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDI1OTAyNzAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MDRCMjZCQzlFOTQ3MzkzRkQ0OENDMUVENDgwNUIyRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcwMTcyNDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNDFoLXlFSkFUZk9QX0tZLWIyMFJRd1wiLFxuICBcInBob25lSWRcIjogXCI2OGYyMzc2Mi0wNjU0LTQyMTktOTNkOC02MGU2ZDU1NTBkMDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEyLFxuICAgICAgMTY3LFxuICAgICAgMTQ4LFxuICAgICAgMjEsXG4gICAgICA3MCxcbiAgICAgIDE0NSxcbiAgICAgIDIzMyxcbiAgICAgIDQ3LFxuICAgICAgMTUwLFxuICAgICAgMjQ4LFxuICAgICAgMjQyLFxuICAgICAgMTY4LFxuICAgICAgNjAsXG4gICAgICA1NyxcbiAgICAgIDMwLFxuICAgICAgOCxcbiAgICAgIDE5NSxcbiAgICAgIDU4LFxuICAgICAgNjQsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ5LFxuICAgICAgMjgsXG4gICAgICAyOSxcbiAgICAgIDEyNixcbiAgICAgIDI5LFxuICAgICAgMTY1LFxuICAgICAgMjMyLFxuICAgICAgMTgsXG4gICAgICA0MixcbiAgICAgIDI1MixcbiAgICAgIDEwNyxcbiAgICAgIDIzOCxcbiAgICAgIDE3MSxcbiAgICAgIDE4MCxcbiAgICAgIDEyMixcbiAgICAgIDEwLFxuICAgICAgMjE1LFxuICAgICAgNTksXG4gICAgICAxNixcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNCUzdSTFRRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDI1OTAyNzAwOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjUzODY3NDE4ODMwOTY6MThAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwic3VjY2Vzc2Z1bGtvbnRyb2xsZXJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYVo2cDBCRUpTMTNySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVwTU1FYWNzVGh1NE40TVBzd1k1VXlOc3JkaUNUbVliamhyKzhZTlNzUm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidjRJaFRmd0gxeGxhMUhtL2M2ZVhIdzhnNUtraWpCZ3ZmMTEydk9qTjd2Q2FaRWl3YWpYS1BGRkl2Q3lPSzBLQUNjU0g0MG5qMzh0M1hvOENoTlFnREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQU9ONTVxY2VCbmFOTFFJMzVDaFFybk0rb3VvYXNCdVFtWXptRlpLcEpnVWZFcjBVZTBGTVF2dzRseWhRVHlYTFRBMmpudHM2eE02ZVhZbGptOU5Famc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyNTkwMjcwMDoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzAxNzI0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJtRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm1GLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWVRuZlBLQ2VDNXRvaFVKSWpISXhiRm1yUVduaG5pbjZpK0NGcXEyNGJjWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMzA5OTI4NjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Nigerian Army 🪖",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
