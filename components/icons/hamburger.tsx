const Hamburger = ({color = 'white'}: any) => {
  return (
    <svg
      width='16'
      height='13'
      viewBox='0 0 16 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z'
        stroke={color}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default Hamburger
