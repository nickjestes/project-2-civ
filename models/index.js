const User = require('./User');
const Tweet = require('./Tweet');

// A user can have many tweets, and once the user is deleted, remove all the tweet user has made
User.hasMany(Tweet,{
    onDelete:"CASCADE",
    foreignKey:{
        allowNull:false
    }
})
Tweet.belongsTo(User);

module.exports = {
    User,
    Tweet
};