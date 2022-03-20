import Card from './components/Card/Card'
import Dice from './components/Dice/Dice'

function App() {
  return (
    <div className='App'>
      <Card>
        <p className='advice-number'>advice</p>
        <p className='advice-text'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          tempora officia omnis eveniet voluptatibus.
        </p>

        <svg width='444' height='16' xmlns='http://www.w3.org/2000/svg'>
          <g fill='none' fill-rule='evenodd'>
            <path fill='#4F5D74' d='M0 8h196v1H0zM248 8h196v1H248z' />
            <g transform='translate(212)' fill='#CEE3E9'>
              <rect width='6' height='16' rx='3' />
              <rect x='14' width='6' height='16' rx='3' />
            </g>
          </g>
        </svg>
      </Card>
      <Dice />
    </div>
  )
}

export default App
