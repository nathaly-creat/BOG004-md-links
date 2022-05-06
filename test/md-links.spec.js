const mdLinks = require("../functions/index.js");

jest.mock("node-fetch");

describe("mdLinks", () => {
  it("should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  }); // end it 1

  it('mdlinks return a instances to Promise', () => {
   let path = 'C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest/sourcesAdd/testOne.md';
   expect(mdLinks(path)).toBeInstanceOf(Promise);

   }); // end it 2
  

  it("should resolve to an array with objects about each link found", () => {
    let pathTest =
      "C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest/sourcesAdd/testOne.md";
    let result = [
      {
        text: "Arreglos",
        href: "https://curriculum.laboratoria.la/es/topics/javascript/04-arrays",
        file: "C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest/sourcesAdd/testOne.md",
      },
    ];

    return mdLinks(pathTest, { validate: false }).then((links) => {
      expect(links).toStrictEqual(result);
    });
  }); // end it 3

  it("should resolve to an array with objects about each link found and validate", () => {
    let pathTest = 'C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest/sourcesAdd/testOne.md';
    
    mdLinks(pathTest, {validate: true}).then((links) => {
      expect(links).toHaveLength(1);
      // expect(fetch.get).toHaveBeenCalledTimes(1);

    })
  }
  ); // end it 4
  
  it('debe ser un array de objetos con peticion HTTP de un file', () => {
    let path = 'C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest/Test.md'
    mdLinks(path, { validate: true }).then((data) => {
      expect(data[0].value.statusText).toBe('OK');
    })
    }); // end it 5


    it('debe ser un array de objetos con peticion HTTP de un directorio', () => {
      let path = 'C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest'
      mdLinks(path, { validate: true }).then((data) => {
        expect(data[0].value.statusText).toBe('OK');
      })
      });
}); // end describe

