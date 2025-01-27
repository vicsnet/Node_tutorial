const express = require('express');;

const app = express();

const PORT = 3000;
const friends =[{
    id: 0,
    name: 'Albert Einstein'
},
{
    id: 1,
    name: 'Sir Isaac Mewton'
}]

app.use((req, res, next) =>{
    const start = Date.now();
    next();
    // actions go here
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
   
    
})
;
app.get('/',(req, res)=>{
    res.send({
        id:1,
        name:'Vincent'
    })
})

app.get('/friends',(req, res)=>{
    res.json(friends)
})

app.get('/friends/:friendId',(req, res)=>{
    const friendId =Number(req.params.friendId);
    const friend = friends[friendId];
    if(friend){
        res.json(friends)
    }else{

        res.status(404).json({
            error:'User not found'
        })
    }

})

app.get('/messages', (req, res) =>{
    res.send('<ul><li>Hello Albert</li></ul>')
});
app.post('/messages', (req, res) =>{
    console.log('Updating messages ... ');
    
})

app.listen(PORT, ()=>{
    console.log('Listening on', PORT, '... hello')
})