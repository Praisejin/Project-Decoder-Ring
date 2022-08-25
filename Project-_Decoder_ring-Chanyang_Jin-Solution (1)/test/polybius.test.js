const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("encoding a message", () => {
  it("should encode a message by translating each letter to number pairs", ()=> {
    const message = "thinkful";
    const actual = polybius(message);
    const expected = "4432423352125413";
    expect(actual).to.equal(expected);
  });
 
  it("should translate both 'i' and 'j' to 42",() => {
    const message = "thinkful";
    const actual = polybius(message);
    const expected = "4432423352125413";
    expect(actual).to.equal(expected);
  });
  
  it("should leave spaces as is", ()=> {
    const message = "my thinkful";
    const actual = polybius(message);
    const expected = "2345 4432423352125413";
    expect(actual).to.equal(expected);
  });
});
  
describe("decoding the message", () => {
  it("should decode a message by translating each pair of numbers into a letter", () => {
    const message = "4432423352125413";
    const actual = polybius(message, false);
    const expected = "th(i/j)nkful";
  expect(actual).to.equal(expected);
});
    
    it("should translate 42 to both 'i'and 'j'", ()=>{
      const message = "4432423352125413";
      const actual = polybius(message, false);
      
      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });
    
    it("should leave space as is", ()=> {
      const message = "2345 4432423352125413"
      const actual = polybius(message,false);
      const expected = "my th(i/j)nkful";
      
      expect(actual).to.equal(expected);
    });
    
    it("should return false if the length of added number is odd", () => {
      const message =  "2345 443242335212541"
      const actual = polybius(message,false);
      
      expect(actual).to.be.false;
    });
});

  
  
  
  
  
  
  
  
 
