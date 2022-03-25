import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from './components/Card/Card'
import Dice from './components/Dice/Dice'
import Spinner from './components/Spinner/Spinner'

function App() {
  const [advice, setAdvice] = useState()
  const [adviceId, setAdviceId] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice')

      setAdvice(response.data.slip.advice)
      setAdviceId(response.data.slip.id)
      setLoading(false)
      return response.data.slip
    } catch (error) {
      return setError(true)
    }
  }

  useEffect(() => {
    fetchAdvice()
  }, [])

  if (loading) {
    return <Spinner />
  } else if (error) {
    return (
      <p className='advice-text'>
        An error has occurred. Please try again later.
      </p>
    )
  }

  return (
    <div className='App'>
      <Card>
        <p className='advice-number'>advice #{adviceId}</p>
        <p className='advice-text'>&ldquo;{advice}&rdquo;</p>

        <div className='divider-pattern-desktop'>
          <svg width='444' height='16' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <path fill='#4F5D74' d='M0 8h196v1H0zM248 8h196v1H248z' />
              <g transform='translate(212)' fill='#CEE3E9'>
                <rect width='6' height='16' rx='3' />
                <rect x='14' width='6' height='16' rx='3' />
              </g>
            </g>
          </svg>
        </div>

        <div className='divider-pattern-mobile'>
          <svg width='295' height='16' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fillRule='evenodd'>
              <path fill='#4F5D74' d='M0 8h122v1H0zM173 8h122v1H173z' />
              <g transform='translate(138)' fill='#CEE3E9'>
                <rect width='6' height='16' rx='3' />
                <rect x='14' width='6' height='16' rx='3' />
              </g>
            </g>
          </svg>
        </div>
        <Dice fetchAdvice={fetchAdvice} />
      </Card>
    </div>
  )
}

export default App
