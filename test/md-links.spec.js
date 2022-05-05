const mdLinks = require("../functions/index.js");
// const mocksData = require("../test/md.mocks.js");
// const path = require("path");
// const dataPath = require("../test/md.mocks.js");

describe("mdLinks", () => {
  it("should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it.only("should resolve to an array with objects about each link found", () => {
    let pathTest =
      "C:/Users/LABORATORIA/Documents/BOG004-md-links/DocTest/sourcesAdd/testOne.md";
    let result = [
      {
        text: "Arreglos",
        href: "https://curriculum.laboratoria.la/es/topics/javascript/04-arrays",
        file: "C:/Users/LABORATORIA/Documents/BOG004-md-links/DocTest/sourcesAdd/testOne.md",
      },
    ];

    return mdLinks(pathTest, { validate: false }).then((links) => {
      expect(links).toStrictEqual(result);
    });
  });

 
}); // end describe

// it("should resolve to an array with objects about each link found and validate", () => {
//   // let pathTest = 'C:/Users/LABORATORIA/Documents/BOG004-md-links/DocTest/sourcesAdd/testOne.md';
//   let linkObject = [
//     {
//       text: 'Arreglos',
//       href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
//       file: 'C:/Users/LABORATORIA/Documents/BOG004-md-links/DocTest/sourcesAdd/testOne.md'
//     }
//   ];

//   let result = [
//     {
//       text: 'Arreglos',
//       href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
//       file: 'C:/Users/LABORATORIA/Documents/BOG004-md-links/DocTest/sourcesAdd/testOne.md',
//       status: '200',
//       str: 'OK'
//     }
//   ];

//   // fetchMock.get('C:/Users/LABORATORIA/Documents/BOG004-md-links/DocTest/sourcesAdd/testOne.md', 200)

//   return mdLinks(linkObject, {validate: true}).then((links) => {
//     expect(links).toStrictEqual(result);
//     expect(fetch.get).toHaveBeenCalledTimes(1);
//   });

// });
