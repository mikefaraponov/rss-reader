/**
 * [getRandomColor]
 * @return {String}
 */
function getRandomColor() {
  let color = '#'
  const letters = '0123456789abcdef'.split('')
  for (var i = 0; i < 6; i++)
    color += letters[Math.round(Math.random() * 15)]
  return color
}

const colors = ["#78b901", "#d584f6", "#ac4e58", "#14cbbf", "#a6a04e", "#f8c5e6", "#c5a908", "#8d32d9", "#d61993", "#91c67c", "#e8540b", "#61095a", "#d448dc", "#279773", "#8a0e53", "#de0acb", "#3ae1cd", "#853441", "#c22542", "#767651", "#d3af27", "#ff2a4c", "#ac16b6", "#d53894", "#256b68", "#6482fd"]

/**
 * [lettersFrequency description]
 * @param  {String} str [this string will be convert to char freq map]
 * @return {Map}     [description]
 */
export function lettersFrequency(str){
  const letters = new Map()

  if(typeof str === 'string') str
    .toLowerCase()
    .replace(/[a-zA-Z]/g, function(letter){
      letters.set(letter, (letters.get(letter) || 0) + 1 )
    })
  else 
    throw new Error('Bad params!')

  return letters
}

/**
 * [getLettersFrequency description]
 * @param  {String} str
 * @return {[{
 *         value: Number,
 *         color: String,
 *         label: String
 * }]}
 */
export function getLettersFrequency(str){
  return toChartJs(lettersFrequency(str))
}


/**
 * [toChartJs description]
 * @param  {Map} lettersMap [description]
 * @return {[{
 *         value: Number,
 *         color: String,
 *         label: String
 * }]}
 */
function toChartJs(lettersMap){
  const chart = []
  let i = 0;
  for(let letter of lettersMap.keys())
    chart.push({
      value: lettersMap.get(letter),
      color: colors[i++],
      label: letter
    })

  return chart
}
