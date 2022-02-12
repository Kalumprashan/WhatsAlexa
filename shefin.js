const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// snkl 
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 SN14: process.env.BAD_WORDS === undefined ? 'false' : process.env.BAD_WORDS,
 Bot_Name: process.env.Bot_Name === undefined ? 'WhatsAlexa' : process.env.Bot_Name,
 Bot: process.env.Bot === undefined ? 'https://i.ibb.co/KGMms2Z/Whats-Alexa.jpg' : process.env.Bot,
    
};
