const axios = require('axios').default;


const validate = (link) => {
    return new Promise((resolve, reject) => {
        axios.get(link)
        .then((response) => {
            resolve(response.status);
            })
            .catch((error) => {
                reject(error.code);
                });
    });
};

module.exports = validate;