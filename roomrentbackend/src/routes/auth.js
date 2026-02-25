// routes/auth.js
const express = require('express');
const { oauth2Client, getAuthUrl } = require('../config/oauth2');
const tokenStore = require('../utils/tokenStore');

const router = express.Router();

// Redirect user to Google's consent page
router.get('/login', (req, res) => {
  const authUrl = getAuthUrl();
  res.redirect(authUrl);
});

// Callback URL after user consents
router.get('/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) {
    return res.status(400).send('No code provided');
  }

  try {
    // Exchange code for tokens
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // In a real app, you would associate tokens with the logged-in user (e.g., via session)
    // For demo, we store them in memory with a temporary key (e.g., using a query param).
    // Here we pass the access token to the next page via query param (not secure for production).
    // A better approach is to use express-session.
    res.redirect(`/messages?access_token=${tokens.access_token}`);
  } catch (error) {
    console.error('Error exchanging code for tokens', error);
    res.status(500).send('Authentication failed');
  }
});

module.exports = router;