const {expect} = require("chai");
const {substitution} = require("../src/substitution");

describe("error handling", () => {
  it("should return false if the substitution alphabet is missing", () => {
    const message = "hello";
    const actual = substitution(message);
    expect(actual).to.be.false;
  });
  
  it("should return false if alphabet is not exactly 26 characters", ()=>{
    const message = "hello";
    const alphabet = "hi";
    const actual = substitution(message, alphabet)
expect(actual).to.be.false;  
  });
  
  
  it("should ignore capital letters", () => {
    const message = "HELLO"
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const actual = substitution(message, alphabet);
    const expected = "rmwwl";
    expect(actual).to.equal(expected);
  })
  
  it("should return false when alphabet contains a repeated character", ()=> {
    const message = "hello"
    const alphabet = "abcdefghiiiiiijklmnopqrstuvwxyz";
    const actual = substitution(message,alphabet);
    expect(actual).to.be.false;
  })
 
  it("should preserve spaces", () => {
      const message = "my message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "yp ysii.rs";

      expect(actual).to.equal(expected);
    });
  
   it("should work with any kind of key with unique characters", () => {
      const message = "message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "ysii.rs";

      expect(actual).to.equal(expected);
    });

});




describe("encoding a message", () => {
  it("should encode a message by using the given substitution alphabet", ()=> {
    const message = "hello";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(message, alphabet);
    const expected = "rmwwl"
    expect(actual).to.equal(expected);
  });
  
  
  
  
});

describe("decoding a message", ()=> {
  it("should decode a message by using given substitution alphabet",()=> {
    const message = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(message,alphabet, false);
    const expected = "message";
    expect(actual).to.equal(expected);
    
  });
  

 
  

})