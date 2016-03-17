import { removeTags, searchAnImage  } from '../shared/redux/utils/stringParsers'

describe("stringParsers module", function() {

  describe('removeTags unit', function(){

    it("should return string without xml tags", function() {
      expect(removeTags('<a>String</a>')).toBe('String');
    });

    it("should return empty string when params is falsy", function() {
      expect(removeTags()).toBe('');
      expect(removeTags('')).toBe('');
      expect(removeTags(undefined)).toBe('');
      expect(removeTags(null)).toBe('');
      expect(removeTags(0)).toBe('');
    });

  })

  describe('searchAnImage unit', function(){

    it("should return empty string when params is not present", function(){
      expect(searchAnImage()).toBe('')
    })

    it("should return empty string when param is not contain http of https", function(){
      expect(searchAnImage('<img src="htt://localhost:2020/image.png"/>')).toBe('')
    })

    it("should parse and return http resouce from string with src html attribute", function(){

      expect(searchAnImage('<img src="http://localhost:2020/image.png"/>'))
        .toBe("http://localhost:2020/image.png")

      expect(searchAnImage('<img src="http://localhost:2020/image.png"/>'))
        .toMatch(/^https?/g)

    })

  })
  

});
