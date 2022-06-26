const axios = require('axios');


// Return promise with github user recent repos
/*
Sort by date 
return the 5 most recent repos
*/
function sortRepos(data){
    data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    }).slice(0, 5);
    return data;
}

async function getRepos(username){
    if(!username || username === 'null' || username === 'undefined' || username === ''){
        return;
    }

    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        return sortRepos(response.data);
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    getRepos
}