import { lettersFrequency } from '../shared/redux/utils/getLettersFrequency'

describe("getLetterFrequency suite", function() {

  it("returns Map", function() {
    expect(lettersFrequency('abc') instanceof Map).toBe(true);
  });

  it("throws an error when params is not string", function(){
    expect(() => lettersFrequency()).toThrowError(/params/)
  })

  it("return Map with keys - letters and values - char frequency", function(){
    const result = lettersFrequency('abdcdcc, %d12& ^')
    const dict = new Map()
    dict.set('a', 1)
    dict.set('b', 1)
    dict.set('d', 3)
    dict.set('c', 3)

    expect(result).toBeDefined()
    expect(result).toEqual(dict)
  })

});
