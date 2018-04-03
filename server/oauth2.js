const router = require('express').Router()
const passport = require('passport')
const { User } = require('./db')

// Google authentication and login (GET /auth/google)
router.get('/', passport.authenticate('twitter', { scope: 'email' }))

// handles the callback after Google has authenticated the user (GET /auth/google/callback)
router.get(
  '/callback',
  passport.authenticate('twitter', {
    successRedirect: '/home', // or wherever
    failureRedirect: '/' // or wherever
  })
)

// const TwitterStrategy = require('passport-twitter-oauth')

// passport.use(
//   new TwitterStrategy(
//     {
//       consumerKey: SuX5Vfhxv5wBxMDRxiwnx4409,
//       consumerSecret: SVdluroWEg9H4EMY2O7RN7Uw5c21JLwFgQWUoc3vDjkDDUG73s,
//       callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
//     },
//     function(token, tokenSecret, profile, cb) {
//       User.findOrCreate({ twitterId: profile.id }, function(err, user) {
//         return cb(err, user)
//       })
//     }
//   )
// )
