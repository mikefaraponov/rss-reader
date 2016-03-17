function json(res){
	return res.json().then( json => ({json, res}) )
}

function isOk({json, res}){
	return !res.ok ? Promise.reject(json) : json
}

export default function ajax(url, options){
  return fetch(url, options)
        .then(json)
        .then(isOk);
}

