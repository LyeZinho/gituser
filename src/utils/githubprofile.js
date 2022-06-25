const axios = require('axios');

//Return promise with github profile
async function getUser(username){
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUser
}