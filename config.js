//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "919395088931";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENyeEgrNWxvR3JKSXNKTktNdFdFMlM0MW9waTNQSis3Qk9UM3pyM0JsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1l4c0l4VnQva2ZRYVFlK2gza0tpYlkrRHMvQTVvcG1wdDFoTjBISlFFUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTEZmczcxUSt6bWJjSW56TC85UkZkcW8xbmlqTTEyWGFjZzdXOUV0UEZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUGd1ME9PbWVLSkZRNHRYcGpSTEcyYjBaTk4rZm5lQUhkMFVwN1BTK0dnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndGcEs1NzdTL3BFWGM3NUd4bHdoUzFnVHE2L1V2SlN0SXR1VStuM3Y3WGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZGajUwYXVqNXh6UXZxRS9qR3JaVkFBZFM1dFlqNDFHSnUxbU5sZU9yeHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0VsZEZKei9xZFFxR1l2MHBrMGVIN0FhTGs2bUprbTYxaWxNbExCdmRrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlpnUXlQZDdIK3k2NjJma2Jub1dBUWVPT2pMcUxkUnRUVHo5WCtwQ05Dbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldpU1hPc2cyR2Vub2R0M3gwaUdSaUt5NkdNN00xNm16NVI3cnV2cmUwN2lQUFNkZUUvdGdrNUdQWHhhTVRtYlQ2c2xZYm5rWXBLSWNubGpZdEZsdkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoiU0Q2U1I4d3lINFFVelFJTThuOFpNcE9WOFBBU2Erd3R3anRFOXVMODhZcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiclBXSjlVbHJRa2FoSnE2Ti1xSURsUSIsInBob25lSWQiOiJjMDA0MzEzYy04NzJkLTRmZDYtOTM4Ny1mYmI3NmY1YjEyODUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1l1YytNVi9kbEhIazM1K2lDWkVaTFFnQzI4PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI0RkxqWE1iUVZFMlA2TnVqM1hLazhtTnNqST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCS1BDTURUOCIsIm1lIjp7ImlkIjoiOTE5Mzk1MDg4OTMxOjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThqnwnZ6Y8J2ZjvCdnpbwnZ6T8J2enCDwnZ6T8J2emfCdnpbwnZmP8J2ek/CdnpLYnNic2JzYnPCThqoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x6b3VtTVF4by9TdFFZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImJ4Y2FQbXpvYmlzcEFuTjRKQmJtUFJVZmRDN3ZlSEFDU2hzcUVBR3NzbkU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImMxbEVhNHMwMTZvUTMza3hpekJlYlAvTE5ScHdxZDBsRkp5aDduZ2VSSUZYOEMrbGxJVWxuZ3RRQXN2YUZwMW9LQjFIWWc2SUFNYStJSUlSMWxIN0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnUzdhK2d5azdLOXY0MWo1cXp2d05TMWpJYVdhbmZjNGhCTVlqa1Avelk3QTVWdGU3bVptTjkxS2oxdVZweFhwUk9RTjZVc1FqYTJIeURsZ3JGeVlDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTM5NTA4ODkzMToxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXOFhHajVzNkc0cktRSnplQ1FXNWowVkgzUXU3M2h3QWtvYktoQUJyTEp4In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzMTA3Mjg0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU0zMSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "❤️𓆩𝞒𝞘𝞑𝞢𝞢𝞙𝞓 𝙅𝞗𝞢𝙇؜؜؜؜𓆪",
  ownername: process.env.OWNER_NAME || "𓆩𝞘𝙎𝞖𝞓𝞜 𝞓𝞙𝞖𝙏𝞓𝞒؜؜؜؜𓆪",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
