const mdLinks = require("../functions/index.js");

jest.mock("node-fetch");

describe("mdLinks", () => {
  it("should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  }); // end it 1

  test("mdlinks return a instances to Promise", () => {
    let path =
      "C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest/sourcesAdd/testOne.md";
    expect(mdLinks(path)).toBeInstanceOf(Promise);
  }); // end it 2

  test("should resolve to an array with objects about each link found", () => {
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

  test("should resolve to an array with objects about each link found and validate", () => {
    let pathTest =
      "C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest/sourcesAdd/testOne.md";

    mdLinks(pathTest, { validate: true }).then((links) => {
      expect(links).toHaveLength(1);
      // expect(fetch.get).toHaveBeenCalledTimes(1);
    });
  }); // end it 4

  test("should be an array of objects with HTTP request for a file", () => {
    let path =
      "C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest/Test.md";
    mdLinks(path, { validate: true }).then((data) => {
      expect(data[0].value.statusText).toBe("OK");
    });
  }); // end it 5

  test("should be an array of objects with HTTP request for a directory", () => {
    let path = "C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest";
    mdLinks(path, { validate: true }).then((data) => {
      expect(data[0].value.statusText).toBe("OK");
    });
  });

  test("should be an error if the path is not found", () => {
    let path = "C:/Users/LABORATORIA/Documents/BOG004-md-links/DocTest/sourcesAdd/casita.md";
    mdLinks(path, { validate: true }).catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  }); // end it 6

  test('there are no files .md in the directory', () => {
    let path = "C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest/never";
    mdLinks(path).then((data) => {
      expect(data).toBe('No hay archivos .md en el directorio');
    });
  }); // end it 7

  test('shoul flatten the array', () => {
    let path =
      "C:/Users/LABORATORIA/Documents/BOG004-md-links/test/DocTest/sourcesAdd/testOne.md";
    mdLinks(path, { flatten: true }).then((data) => {
      expect(data).toHaveLength(1);
    }
    );
  }
  ); // end it 8




}); // end describe

