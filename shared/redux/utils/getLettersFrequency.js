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

if(typeof window !== 'undefined')
  window.randCol = getRandomColor

const colors = ["#e3cbae", "#66e443", "#d055cd", "#ca252c", "#62d577", "#8ca55f", "#2d7ab3", "#92e413", "#ae4abf", "#803935", "#41ae4b", "#7bdd40", "#bf2447", "#8814e6", "#2d1d12", "#4ea291", "#cbc3a5", "#69700a", "#4a27c8", "#13704e", "#4b668a", "#e9237f", "#89561f", "#5d4772", "#be6e95", "#92695a"]

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
      color:  colors[i++],
      label: letter
    })

  return chart
}
