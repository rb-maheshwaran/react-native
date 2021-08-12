const getGitRepoByUserName = async (userName, callback) =>{
    let url = `https://api.github.com/users/${userName}/repos`;
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.status === 200){
        let data = await response.json();
        callback(false, data);
    }else{
        callback(true, response);
    }
}

module.exports = { getGitRepoByUserName };