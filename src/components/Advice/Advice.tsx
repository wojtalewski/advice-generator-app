type Props = {
  adviceId: string
  advice: string
}

const Advice = ({ adviceId, advice }: Props) => {
  return (
    <main className='advice'>
      <p className='advice-number'>advice #{adviceId}</p>
      <blockquote className='advice-text'>&ldquo;{advice}&rdquo;</blockquote>

      <figure className='divider-pattern-desktop'>
        <svg width='444' height='16' xmlns='http://www.w3.org/2000/svg'>
          <g fill='none' fillRule='evenodd'>
            <path fill='#4F5D74' d='M0 8h196v1H0zM248 8h196v1H248z' />
            <g transform='translate(212)' fill='#CEE3E9'>
              <rect width='6' height='16' rx='3' />
              <rect x='14' width='6' height='16' rx='3' />
            </g>
          </g>
        </svg>
      </figure>

      <figure className='divider-pattern-mobile'>
        <svg width='295' height='16' xmlns='http://www.w3.org/2000/svg'>
          <g fill='none' fillRule='evenodd'>
            <path fill='#4F5D74' d='M0 8h122v1H0zM173 8h122v1H173z' />
            <g transform='translate(138)' fill='#CEE3E9'>
              <rect width='6' height='16' rx='3' />
              <rect x='14' width='6' height='16' rx='3' />
            </g>
          </g>
        </svg>
      </figure>
    </main>
  )
}

export default Advice
