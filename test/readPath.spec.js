const pathAbsolute = require("../functions/readPath.js").pathAbsolute;
const checkPathType = require("../functions/readPath.js").checkPathType;
// const mocksData = require("./md.mocks.js");

describe("path", () => {
  it("should be a function", () => {
    expect(typeof pathAbsolute).toBe("function");
  });

  it("should resolve to an absolute path", () => {
    let pathTest = "sourcesAdd/testOne.md";
    let result = "C:\\Users\\LABORATORIA\\Documents\\BOG004-md-links\\sourcesAdd\\testOne.md";
    return expect(pathAbsolute(pathTest)).toEqual(result);
  });

  it("the path is file", () => {
    let dataPathNotFound =
      "C:/Users/LABORATORIA/Documents/BOG004-md-links/DocTest/sourcesAdd/testOne.md";
    return expect(checkPathType(dataPathNotFound)).resolves.toMatch("file");
  }); // end it 1

  it("the path is directory", () => {
    let dataDirectory =
      "C:/Users/LABORATORIA/Documents/BOG004-md-links/DocTest/sourcesAdd";
    return expect(checkPathType(dataDirectory)).resolves.toMatch("directory");

  }); // end it 2
  it("the path is not found", () => {

    // return mdLinks(pathTest, { validate: false }).then((links) => {
    //   expect(links).toStrictEqual(result);
    // });
      let dataError = 'C:/Users/LABORATORIA/Documents/BOG004-md-links/DocTest/sourcesAdd/casita.md';
      // console.log("hola", checkPathType("algo.txt"));
        return checkPathType(dataError).then((path) => {
          expect(console.error(path)).toMatch("error");
        }
        );
  }); // end it 3
       
    }); // end describe
