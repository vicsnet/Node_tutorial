const express = require('express');
const { getMessages, postMessage } = require('./controllers/messages.controllers');
const { postFriend, getFriends, getFriend } = require('./controllers/friends.controllers');
;

const app = express();

const PORT = 3000;


app.use((req, res, next) =>{
    const start = Date.now();
    next();
    // actions go here
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
   
    
});

app.use(express.json());

const friendsRouter = express.Router();

friendsRouter.post('/friends', postFriend);

friendsRouter.get('/friends', getFriends);

friendsRouter.get('/friends/:friendId', getFriend);

app.use(friendsRouter)

app.get('/messages', getMessages);
app.post('/messages', postMessage)


app.listen(PORT, ()=>{
    console.log('Listening on', PORT, '...')
})