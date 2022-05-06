console.log('pruebaaaa', global.fetch);      
// const validate = () => {       
// return jest.fn(() => {
//   Promise.resolve(
//     JSON.parse({"status": 200, "str": "OK"}
//     )
//   );
// });
// };



const validate = jest.fn(() => 
Promise.resolve({"status": '200', "str": "OK"} || {"status": '404', "str": "Fail"}));
   


module.exports = validate;
        
        