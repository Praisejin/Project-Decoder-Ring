const { expect } = require("chai");
const { caesar } = require("../src/caesar");


  describe("caesar- error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "thinkful";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      const message = "thinkful";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const message = "thinkful";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const message = "thinkful";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "wklqnixo";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "a thinkful.";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d wklqnixo.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "A Thinkful";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d wklqnixo";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "This is a secret message!";
      const shift = 8;
      const actual = caesar(message, shift);
      const expected = "bpqa qa i amkzmb umaaiom!";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "thinkful";
      const shift = -3;
      const actual = caesar(message, shift);
      const expected = "qefkhcri";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "wklqnixo";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "thinkful";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "d wklqnixo.";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a thinkful.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "D Wklqnixo";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a thinkful";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "wklqnixo";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "thinkful";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "qefkhcri";
      const shift = -3;
      const actual = caesar(message, shift, false);
      const expected = "thinkful";

      expect(actual).to.equal(expected);
    });
  });
