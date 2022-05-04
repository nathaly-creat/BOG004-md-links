// const axios = require('axios').default;


// const validate = (link) => {
//     console.log('valor entrndo a validar', link);
//     return new Promise((resolve, reject) => {
//         axios.get(link)
//         .then((response) => {
//             if(response.status >= 200 && response.status <= 400){
//                 console.log('response in validate ok:', response.status);
//             }else if (response.status >= 400 && response.status <= 500){
//                 console.log('response in validate fail:', response.status);
//             }
//             resolve(response.status);
//             })
//             .catch((error) => {
//                 reject(error.code);
//                 });
//     });
// };
'use strict';
let fetch = require('node-fetch');

const validate = (link) => {

    return fetch(link)
    .then(response => {
        if(response.status >= 200 && response.status < 400){
            // console.log('response in validate ok:', response.status, link);
            return {
                status: response.status,
                str: 'OK'
            }
        }else {
            // console.log('response in validate fail:', response.status, link);
            return {
                status: response.status,
                str: 'Fail'
            }
        }

    })
    .catch(error => {
        console.log('error in validate', error.status, link);
        return link;
    })
    
}


module.exports = validate;