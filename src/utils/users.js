const { addRoom, removeRoom } = require("./rooms")

const users = []

const addUser = ({id, username, room}) =>
{
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate the data
    if (!username || !room)
    {
        const error =
        {
            error: "Username and room required"
        }
        return error
    }

    // Check for existing user
    const existingUser = users.find
    (
        (user) =>
        {
            return user.room === room && user.username === username
        }
    )

    if (existingUser)
    {
        const error =
        {
            error: "Username already in use"
        }
        return error
    }

    // Store user
    const user = {id, username, room}
    users.push(user)

    // Store room
    addRoom(room)

    return {user}
}

const removeUser = (id) =>
{
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1)
    {
        if (getUsersInRoom(users[index].room).length === 1)
            removeRoom(users[index].room)
            
        return users.splice(index, 1)[0].username
    }
}

const getUser = (id) =>
{
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) =>
{
    return users.filter((user) => user.room === room)
}

module.exports = 
{
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}