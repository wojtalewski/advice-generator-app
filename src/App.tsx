import { useState, useEffect } from 'react'
import axios from 'axios'

import Advice from './components/Advice/Advice'
import Card from './components/Card/Card'
import Dice from './components/Dice/Dice'
import Spinner from './components/Spinner/Spinner'

function App() {
  const [advice, setAdvice] = useState('')
  const [adviceId, setAdviceId] = useState('')
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
    <div>
      <Card>
        <Advice adviceId={adviceId} advice={advice} />
        <Dice fetchAdvice={fetchAdvice} />
      </Card>
    </div>
  )
}

export default App
