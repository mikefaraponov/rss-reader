import feednami from './feednami'

export default function fetchFeed(url){
  return new Promise(
      (resolve, reject) => 
        feednami.load(url, result => 
          result.error?
            reject(result.error):
            resolve(result.feed)
        )
    )
}
