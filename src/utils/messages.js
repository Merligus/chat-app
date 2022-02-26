const generateMessage = (username, text) =>
{
    data = 
    {
        username,
        text,
        createdAt: new Date().getTime()
    }
    return data
}

const generateLocationMessage = (username, url) =>
{
    data = 
    {
        username,
        url,
        createdAt: new Date().getTime()
    }
    return data
}

module.exports = 
{
    generateMessage,
    generateLocationMessage
}