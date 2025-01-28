
const model = require('../models/friends.model');

function postFriend(req, res){
    if(!req.body.name){
        res.status(400).json({
            error:'value must be a name'
        });
    }else{

        const newFriend ={
            name: req.body.name,
            id:model.friends.length
        };
        model.friends.push(newFriend);
        res.json(newFriend)
    }
}

function getFriends (req, res){
    res.json(model.friends)
}

function getFriend(req, res){
    const friendId =Number(req.params.friendId);
    const friend = model.friends[friendId];
    if(friend){
        res.json(model.friends)
    }else{

        res.status(404).json({
            error:'User not found'
        })
    }

}

module.exports = {
 postFriend,
 getFriends,
 getFriend
}