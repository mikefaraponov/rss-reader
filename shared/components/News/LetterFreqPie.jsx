import { Pie, Doughnut } from "react-chartjs"
import { getLettersFrequency } from "../../redux/utils/getLettersFrequency"

const LetterFreqPie = ({data}) =>
  data?
    <p className='is-text-centered stats-container'>
      <Pie className='stats' data={getLettersFrequency(data)}/>
    </p>
    :
    <p/>

export default LetterFreqPie
