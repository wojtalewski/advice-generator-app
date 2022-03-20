const Card: React.FC = ({ children }) => {
  return (
    <div className='card'>
      <div className='container'>{children}</div>
    </div>
  )
}

export default Card
