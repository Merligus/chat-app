const rooms = []

const getRooms = () =>
{
    return rooms.sort()
}

const addRoom = (newRoom) =>
{
    // Check for existing room
    const existingRoom = rooms.find
    (
        (room) =>
        {
            return room === newRoom
        }
    )

    if (existingRoom)
        return newRoom
    
    // Store room
    rooms.push(newRoom)
    return newRoom
}

const removeRoom = (roomName) =>
{
    const index = rooms.findIndex((room) => room === roomName)

    if (index !== -1)
        return rooms.splice(index, 1)[0]
}

module.exports = 
{
    getRooms,
    addRoom,
    removeRoom
}