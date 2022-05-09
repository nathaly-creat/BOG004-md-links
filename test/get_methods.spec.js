const { pathAbsolute, checkPathType} = require("../functions/get_methods.js");
// const mocksData = require("./md.mocks.js");

describe("path", () => {
  it("should be a function", () => {
    expect(typeof pathAbsolute).toBe("function");
  });

  it("should resolve to an absolute path", () => {
    let pathTest = "sourcesAdd/testOne.md";
    let result =
      "C:\\Users\\LABORATORIA\\Documents\\BOG004-md-links\\sourcesAdd\\testOne.md";
    return expect(pathAbsolute(pathTest)).toEqual(result);
  });

  it("the path is file", () => {
    let dataPathNotFound =
      "C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest/sourcesAdd/testOne.md";
    return expect(checkPathType(dataPathNotFound)).resolves.toMatch("file");
  }); // end it 1

  it("the path is directory", () => {
    let dataDirectory =
      "C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest/sourcesAdd";
    return expect(checkPathType(dataDirectory)).resolves.toMatch("directory");
  }); // end it 2
  // it("the path is not found", () => {
  //     let dataError =
  //     "C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest/sourcesAdd/algo.txt";
  //   // console.log("hola", checkPathType("algo.txt"));
  //   return checkPathType(dataError).catch((err) => {
  //     expect(err).toBeInstanceOf(Error);
  //     expect(err).reject.toBe(errMessage = "No es un archivo .md");
  //   });
  // }); // end it 3


}); // end describe
