const passport = require('passport');
const keys = require('./keys')
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/user-model.js')


passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Used to decode the received cookie and persist session

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT,
    clientSecret: keys.GOOGLE_SECRET,
    callbackURL: '/auth/google/redirect'
  },  (accessToken, refreshToken, profile, done) => {
    console.log(profile)
    User.findOne({googleId: profile.id}).then((currentUser) => {
      if(currentUser) {
        console.log('user is' + currentUser);
        done(null, currentUser)
      } else {
        var date = new Date();
        date.getTime();
        new User({
          username: profile.displayName,
          googleId: profile.id,
          thumbnail: profile._json.picture,
          email: profile._json.email,
          refused: null,
          creation: date
        }).save().then((newUser) => {
          console.log('new user created' + newUser);
          done(null, newUser);
        });
      }
    });
  })
)
