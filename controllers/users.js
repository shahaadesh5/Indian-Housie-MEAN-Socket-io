const users = [];

const addUser = ({id, username, gameId})=>{
    username = username.trim().toLowerCase();

    const existingUser = users.find((user)=> user.gameId===gameId && user.username === username);
    console.log("Existing user===>",existingUser);
    if(existingUser)
        return { error: "Username is Taken"};

    const user = {id,username,gameId};
    users.push(user);
    return {user}   
}
const getUser = (id)=> users.find((user)=> user.id===id);

module.exports={addUser,getUser}