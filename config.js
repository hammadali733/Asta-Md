/*//=================..........============================================================\\
░█████╗░░██████╗████████╗░█████╗░  ███╗░░░███╗██████╗░  ██████╗░░█████╗░██████╗░░░██╗██╗
██╔══██╗██╔════╝╚══██╔══╝██╔══██╗  ████╗░████║██╔══██╗  ╚════██╗██╔══██╗╚════██╗░██╔╝██║
███████║╚█████╗░░░░██║░░░███████║  ██╔████╔██║██║░░██║  ░░███╔═╝██║░░██║░░███╔═╝██╔╝░██║
██╔══██║░╚═══██╗░░░██║░░░██╔══██║  ██║╚██╔╝██║██║░░██║  ██╔══╝░░██║░░██║██╔══╝░░███████║
██║░░██║██████╔╝░░░██║░░░██║░░██║  ██║░╚═╝░██║██████╔╝  ███████╗╚█████╔╝███████╗╚════██║
╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝  ╚═╝░░░░░╚═╝╚═════╝░  ╚══════╝░╚════╝░╚══════╝░░░░░╚═╝
*/
//=============================....................===============================================\\
const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })
const PORT = () => {
  const minPort = 10000;
  const maxPort = 65535;
  return Math.floor(Math.random() * (maxPort - minPort + 1)) + minPort;
};
const BOT_DATBASE = Math.floor(Math.random() * 451);
//==================IMPORTANT CONFIGURATIONS==========================\\
   global.SESSION_ID = process.env.SESSION_ID ||  "" ; 
   global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/dMwGOUP.jpeg" ;
   global.DATABASE_URI = process.env.DATABASE_URL || "";
   global.mongodb= process.env.MONGODB_URI || "";
   global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
   global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "null";
   global.port = PORT  
   global.rank = "updated"
   global.isMongodb = false;      
   global.ssrest = process.env.SSRESET   || "false";                            
   global.devs = "2348039607375";
   global.api_smd = "https://api-smd-1.vercel.app";
   global.scan = "https://gnime-qr.onrender.com/";
   global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
//===================.........===========================\\

//=============OPTIONAL CONFIGURATIONS===================\\
   global.audio= "" ;  
   global.video= "" ;
   global.creator= "`Astro`"
   global.appUrl=process.env.APP_URL || "" 
   global.email ="astromedia0010@outlook.com"
   global.location="Nigeria,Lagos."
   global.github=process.env.GITHUB|| "https://github.com/Astropeda/whatsapp-bot";
   global.gurl  = process.env.GURL || "null";
   global.website= process.env.GURL|| "null" ; 
   global.userImages= process.env.USER_IMAGES|| "https://i.imgur.com/dMwGOUP.jpeg",
//=================..................========================\\


//================CHATS CONFIGURATIONS=======================\\
   global.allowJids= process.env.ALLOW_JID || "null" 
   global.botstyle = process.env.STYLE   || '1',  // 1,2,3,4,5
   global.blockJids= process.env.BLOCK_JID || "null"
   global.waPresence= process.env.WAPRESENCE ||  "online" ;
   global.readcmds = process.env.READ_COMMAND || "false"
   global.readmessage = process.env.READ_MESSAGE || "true"
   global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
   global.read_status = process.env.AUTO_READ_STATUS || "false"
   global.save_status = process.env.AUTO_SAVE_STATUS || "false"
   global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
   global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";
   global.goodbyemsg = process.env.GOODBYE || "false"; 
   global.welcomemsg  = process.env.WELCOME || "false";
   global.warncount = process.env.WARN_COUNT || 3,
   global.disablepm = process.env.DISABLE_PM || "false",
   global.disablegroup = process.env.DISABLE_GROUPS || "false",
   global.MsgsInLog = process.env.MSGS_IN_LOG|| "false",
//=====================.............===============================\\

module.exports = {
  menu: process.env.MENU || "", //menu1, menu2
  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.8.0",
  caption : process.env.CAPTION || "`©botinfo`" ,
  author : process.env.PACK_AUTHER|| "`©ᴀꜱᴛʀᴏᴘᴇᴅᴀ`",
  packname: process.env.PACK_NAME || "`©ᴀꜱᴛᴀ ᴍᴅ 2024`",
  botname : process.env.BOT_NAME  || "©ᴀꜱᴛᴀ ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "`ᴀꜱᴛʀᴏ`",
  creator:process.env.CREATOR_NAME || "`ᴀꜱᴛʀᴏᴘᴇᴅᴀ`",
  errorChat : process.env.ERROR_CHAT || "",
  database : process.env.BOT_DATABASE || BOT_DATBASE,
  KOYEB_API : process.env.KOYEB_API  || "false",
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "bot",
};
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
