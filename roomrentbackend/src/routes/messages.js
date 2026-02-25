// routes/messages.js
const express = require('express');
const { google } = require('googleapis');

const router = express.Router();

router.get('/', async (req, res) => {
  const accessToken = req.query.access_token;
  if (!accessToken) {
    return res.status(401).send('No access token provided. Please <a href="/auth/login">login</a> first.');
  }

  try {
    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: accessToken });

    const gmail = google.gmail({ version: 'v1', auth });

    // List up to 5 messages
    const listResponse = await gmail.users.messages.list({
      userId: 'me',
      maxResults: 5
    });

    const messages = listResponse.data.messages || [];
    if (messages.length === 0) {
      return res.send('No messages found.');
    }

    const messageDetails = [];
    for (const msg of messages) {
      const msgData = await gmail.users.messages.get({
        userId: 'me',
        id: msg.id,
        format: 'metadata',
        metadataHeaders: ['Subject', 'From']
      });

      const headers = msgData.data.payload.headers;
      const subject = headers.find(h => h.name === 'Subject')?.value || '(no subject)';
      const from = headers.find(h => h.name === 'From')?.value || '(unknown sender)';
      const snippet = msgData.data.snippet || '';

      messageDetails.push({ id: msg.id, subject, from, snippet });
    }

    // Render HTML
    let html = '<h1>Your Recent Gmail Messages</h1><ul>';
    messageDetails.forEach(msg => {
      html += `<li>
        <strong>${msg.subject}</strong><br>
        <em>From: ${msg.from}</em><br>
        ${msg.snippet}
        <hr>
      </li>`;
    });
    html += '</ul><p><a href="/">Home</a></p>';
    res.send(html);

  } catch (error) {
    console.error('Error fetching messages', error);
    res.status(500).send('Failed to fetch messages. Make sure you have granted permission.');
  }
});

module.exports = router;