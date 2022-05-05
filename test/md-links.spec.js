const mdLinks = require("../functions/index.js");
const mocks = require("./md.mocks.js");

describe("mdLinks", () => {
    it("should be a function", () => {
        expect(typeof mdLinks).toBe("function");
      });
    it("should return an array", () => {
        let result = mdLinks(mocks.imputRoute);
        console.log('banderita', result);
        
        expect(typeOf (mdLinks(mocks.imputRoute))).toBe('object');
      });
    // it("should return an array with the correct length", () => {
    //     expect(mdLinks(mocks.imputRoute).length).toBe(mocks.links.length);
    //   });
    // it("should return an array with the correct values", () => {
    //     expect(mdLinks(mocks.imputRoute)).toEqual(mocks.links);
    //   });

});