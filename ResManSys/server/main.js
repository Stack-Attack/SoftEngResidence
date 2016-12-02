import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Accounts.onCreateUser((options, user) => {
    console.log("Account created, id: " + user._id)
    console.log(this.firstName)
    user.isAdmin = false;
    return user;
});
