/**
 * [removeTags description]
 * @param  {String} str [description]
 * @return {String}     [description]
 */
export function removeTags(str){
  return str?str.replace(/<\/?[^>]+>/gi, ''):''
}

/**
 * [searchAnImage description]
 * @param  {String} str [description]
 * @return {String}     [description]
 */
export function searchAnImage(str){
  const imageSearchResults = (/src=\"([^"]*)\"/ig).exec(str),
    isOk = imageSearchResults && /^https?/g.test(imageSearchResults[1])
  return isOk? imageSearchResults[1]:''
}
