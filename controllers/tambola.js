const { addUser, getUser} = require('./users');

let socketio, gameSocket;

exports.initGame = (io, socket) =>{
    console.log("New connection to the server!");
    socketio = io;
    gameSocket = socket;
    gameSocket.emit('connected',{message:"You are connected!"});

    
    gameSocket.on('playerJoinGame', playerJoinGame);
    // gameSocket.on('hostTixConfirm', hostTixConfirm);
}

// hostCreateGame = () =>{
//     let gameId = (Math.random()*10000) | 0;
//     console.log("New game Socket ID====>"+gameSocket.id);
//     console.log("New gameiD====>",gameId);
//     gameSocket.emit('newGameCreated', {gameId: gameId, socketId:gameSocket.id});
//     gameSocket.join(gameId.toString());
//     console.log("New game created with room: "+gameId.toString());
// }
playerJoinGame = (data,callback)=>{
    console.log(data);
    const { error, user } = addUser({
        id: gameSocket.id,
        username: data.username,
        gameId: data.gameId
    });
    if(error)
        return callback(error);
    gameSocket.join(user.gameId.toString());
    console.log(user.username+" joined room: "+user.gameId.toString());
    socketio.in(user.gameId).emit('newUser', {id: user.id, gameId: user.gameId, user: user.username });
}
hostTixConfirm = (tixConfirm)=>{
    console.log(tixConfirm);
    const tickets = {
        id: tixConfirm.playerId,
        message:`Here are your ${tixConfirm.ticketCount} tickets`
    }
    console.log(tickets);
    gameSocket.broadcast.to(tixConfirm.playerId).emit('tickets', tickets);
}