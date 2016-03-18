/**
 * [getAuthorsCount returns authors count]
 * @param  {Array} feeds
 * @return {Number}      
 */
function getAuthorsCount(feeds){
  const authors = new Set()
  for(let feed of feeds)
    authors.add(feed.author)
  return authors.size
}

export default getAuthorsCount
