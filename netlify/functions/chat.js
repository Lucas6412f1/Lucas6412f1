const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../../chat_history.json');

function saveMessage(message, user) {
  let db = [];
  if (fs.existsSync(dbPath)) {
    db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  }
  db.push({ user, message, timestamp: Date.now() });
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}

function detectMistake(text) {
  // Simpele check: spelfouten (dubbele spaties, rare tekens, etc.)
  if (text.match(/\s{2,}/) || text.match(/[^\w\s,.?!'"-]/)) {
    return true;
  }
  return false;
}

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const { message } = JSON.parse(event.body);
  saveMessage(message, 'user');

  let reply = '';
  if (detectMistake(message)) {
    reply = "I think you made a typo or mistake. Can you rephrase?";
  } else {
    // Simpele lerende bot: echo met geheugen
    let db = [];
    if (fs.existsSync(dbPath)) {
      db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    }
    // Zoek naar vergelijkbare eerdere berichten
    const similar = db.find(m => m.message.toLowerCase() === message.toLowerCase() && m.user === 'user');
    if (similar) {
      reply = "You've said this before! Let's talk about something new.";
    } else {
      reply = `You said: ${message}`;
    }
  }
  saveMessage(reply, 'bot');
  return {
    statusCode: 200,
    body: JSON.stringify({ reply })
  };
};
