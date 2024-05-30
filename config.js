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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_56_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgODEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDgzLFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyLFxuICAgICAgICA1NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4LFxuICAgICAgICA3MixcbiAgICAgICAgMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDUyLFxuICAgICAgICAyNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDksXG4gICAgICAgIDY2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDU3LFxuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMixcbiAgICAgICAgMTE0LFxuICAgICAgICA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMixcbiAgICAgICAgOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDczLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNCxcbiAgICAgICAgODEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYdHlmNTB4LzZteUVQdk1HLy9mSk16RERYWmdoWHRFSWdvRm9WM3I4emRZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjU5MDI3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk4MzdDQjQwRjJERTVDRUM3NkE1QTAzNTFFMTJENjJBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzEwOTc2OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjU5MDI3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU5REI1ODg0REYzMTU3NEI2NDZCQjkwOURFRkMyNTNEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzEwOTc2OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjU5MDI3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU4QTNGRDAzMjJEQkE0ODdEMDI2MjhFNURDRDU5QTdDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzEwOTc3MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjU5MDI3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFCNTc3MDhCMkJEMDdCOTE1NTFDREQ4MEVGNThBMkREXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzEwOTc3MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNd2RfU3Btb1RSS2tWeGNoVlBmOE9RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZhMDhhMTIxLWNiOTktNDYxYS1iNjkwLTJmMzUzYWM0MmI0MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICAyMyxcbiAgICAgIDY3LFxuICAgICAgMjMzLFxuICAgICAgMjUsXG4gICAgICAxMzIsXG4gICAgICAxMzYsXG4gICAgICAxMSxcbiAgICAgIDUsXG4gICAgICAyMDAsXG4gICAgICA0NixcbiAgICAgIDc3LFxuICAgICAgMTgsXG4gICAgICA1MSxcbiAgICAgIDM0LFxuICAgICAgMTM1LFxuICAgICAgMjA1LFxuICAgICAgNTYsXG4gICAgICAyMzIsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgMTA0LFxuICAgICAgMTYsXG4gICAgICAxNDEsXG4gICAgICAxMDUsXG4gICAgICAxMTksXG4gICAgICAyMixcbiAgICAgIDExOCxcbiAgICAgIDIxLFxuICAgICAgMTYzLFxuICAgICAgMTMwLFxuICAgICAgMTk5LFxuICAgICAgMTQxLFxuICAgICAgOCxcbiAgICAgIDE4NyxcbiAgICAgIDkyLFxuICAgICAgMTUyLFxuICAgICAgMTgxLFxuICAgICAgNzIsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODM5MlBENjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjU5MDI3MDA6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NTM4Njc0MTg4MzA5NjoxOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJzdWNjZXNzZnVsa29udHJvbGxlclwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hWjZwMEJFSVNJNUxJR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVXBNTUVhY3NUaHU0TjRNUHN3WTVVeU5zcmRpQ1RtWWJqaHIrOFlOU3NSbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0ODVvN1ZXRC8yVHNmeTNwZVNZc1Fsd0FxZThCcXdqbzcxSmdaRU5zNHpBL0hvcW8zUmEwQmoyUTk0TnhjalZjUzBHMjZvcU5CVithd1JHNnFocEJEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBb1RrUDlMQ2crRUpGbk5uMVFUaTZJL29na1o5Vk9oVVBDYlBQWXo0M0tib0RieW5aazRENTdkS0k0WEwxb01US3crUUhZNjhRLzZhOHBDcXFUbThodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDI1OTAyNzAwOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MTA5NzY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm1GXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCbUYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZVG5mUEtDZUM1dG9oVUpJakhJeGJGbXJRV25obmluNmkrQ0ZxcTI0YmNZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMzMDk5Mjg2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
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
