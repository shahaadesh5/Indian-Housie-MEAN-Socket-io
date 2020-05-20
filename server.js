const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const path = require('path'); // importing path package


const tambolatickets = require('tambola-generator');

const { addUser, getUser} = require('./controllers/users');

io.on('connection',(socket)=>{
    console.log("New connection to server with Socket ID====> ",socket.id);
    socket.on('hostCreateGame', () =>{
        let gameId = (Math.random()*10000) | 0;
        console.log("New gameiD====> ",gameId);
        socket.emit('newGameCreated', {gameId: gameId, socketId:socket.id});
        socket.join(gameId.toString());
        console.log("New game created with room: "+gameId.toString());
    });
    socket.on('playerJoinGame', (data,callback)=>{
        console.log(data);
        const { error, user } = addUser({
            id: socket.id,
            username: data.username,
            gameId: data.gameId
        });
        if(error)
        {
            return callback(error);
        }
        else{
            socket.join(user.gameId.toString());
            console.log(user.username+" joined room: "+user.gameId.toString());
            io.in(user.gameId).emit('newUser', {id: user.id, gameId: user.gameId, user: user.username, playerNotify:"", playerTicketCount:"" });
        }
    });
    socket.on('playerTicketReq', (data)=>{
        console.log(data);
        const user = getUser(socket.id);
        console.log(user);
        let newData = {
            ...user,
            ticketCount: data.tikCount
        }
        console.log("Ticket request===>",newData);
        socket.broadcast.to(data.gameId).emit("sendHostReq",newData);
    });
    socket.on('startGame', winningCat=>{
        console.log(winningCat);
        socket.broadcast.to(winningCat.gameId).emit("gameCategories", winningCat.categories);
    });
    socket.on('hostTixConfirm', (tixConfirm)=>{
        console.log(tixConfirm);
        const tickets = tambolatickets.getTickets(Number(tixConfirm.ticketCount));
        console.log(tickets);
        socket.broadcast.to(tixConfirm.playerId).emit('tickets', tickets);
    });
    socket.on('ticketVerify', (ticketData)=>{
        const user = getUser(socket.id);
        let newTicketData={
            ...user,
            ticket: ticketData.ticketImage,
            claimPrize: ticketData.claimPrize
        }
        socket.broadcast.to(ticketData.gameId).emit("ticketToHost", newTicketData);
    });
    socket.on('verifyResult', verifyData=>{
        console.log(verifyData);
        io.in(verifyData.gameId).emit('prizeWinner', verifyData);
    });
    socket.on('drawNumber', numberObj=>{
        socket.broadcast.to(numberObj.gameId).emit("newNumber", numberObj);
    });
    socket.on('shareResult', winnerList=>{
        socket.broadcast.to(winnerList[0].gameId).emit('resultList',winnerList);
    });
    socket.on('disconnect' ,()=>{
        console.log(socket.id," User left");
    });
});

app.use(express.static(path.join(__dirname, 'public'))); //defining the directory name for the path

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html')); // defining the path for running the index.html file on the express app
});

server.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Server running on Port: ${PORT}`);
})