// const validate = require("../functions/validate.js");
// const fetch = require("../__mocks__/node-fetch.js");
// // const { TestWatcher } = require("jest");

// jest.mock("../functions/validate.js");

// it("should be a function", () => {
//   expect(typeof validate).toBe("function");
// });

// beforeEach(() => {
//   fetch.mockClear();
// });

// test("should return true if the url is valid", () => {
//   let path = "https://curriculum.laboratoria.la/es/topics/javascript/04-arrays";

//   const callFetch = fetch.mockImplementationOnce(
//     jest.fn((path) => {
//       new Promise((resolve, reject) => {
//         if (
//           path ===
//           "https://curriculum.laboratoria.la/es/topics/javascript/04-arrays"
//         ) {
//           resolve(response);
//         } else {
//           reject("error");
//         }
//       });
//     })
//   );
//   validate(path).then((links) => {
//     expect(links).toBeTruthy();
//     expect(links.status).toBe("200");
//     expect(callFetch).toHaveBeenCalledTimes(0);


// });
// });

// //     if (links === true) {
// //       expect(links).toBeTruthy();
// //       expect(links.status).toBe("200");
// //       expect(callFetch).toHaveBeenCalledTimes(0);
// //     } else {
// //       expect(links).toBeFalsy();
// //       expect(links.status).toBe("404");
// //       expect(callFetch).toHaveBeenCalledTimes(0);
// //     }
// //   });
  




// // it("should return false if the url is not valid", () => {
// //     let path = 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays';
// //     const callFetch = fetch.mockImplementationOnce(jest.fn((path) => {
// //         new Promise((resolve, reject) => {
// //             if (path === "https://curriculum.laboratoria.la/es/topics/javascript/04-arrays") {
// //                 resolve (response);
// //             } else {
// //                 reject ('error');
// //             }
// //         })})
// //     );
// //     validate(path).then((links) => {
// //     expect(links).toBeFalsy();
// //     expect(links.status).toBe('404');
// //     expect(callFetch).toHaveBeenCalledTimes(0);
// //     })  ;

// // }
// // );
