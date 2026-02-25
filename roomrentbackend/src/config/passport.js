const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/userModel");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findByGoogleId(profile.id);

        if (!user) {
          const id = await User.createUser({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          });

          user = { id };
        }

        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);