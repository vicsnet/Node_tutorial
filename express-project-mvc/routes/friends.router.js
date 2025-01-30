const express = require('express');

const { postFriend, getFriends, getFriend } = require('../controllers/friends.controllers');
;

const friendsRouter = express.Router();

friendsRouter.use((req,rex, next)=>{
    console.log('IP address',req.ip);
    next();
})

friendsRouter.post('/', postFriend);

friendsRouter.get('/', getFriends);

friendsRouter.get('/:friendId', getFriend);

module.exports = friendsRouter;