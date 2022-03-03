const socket = io()

const $selectRoom = document.querySelector("select")

socket.on
(
    "getRoomOptions",
    (rooms) =>
    {
        rooms.forEach
        (
            room => 
            {
                var newRoomOption = document.createElement("option");
                newRoomOption.value = room;
                newRoomOption.innerHTML = room;
                if (room !== "global")
                    $selectRoom.appendChild(newRoomOption);
            }
        )
    }
)