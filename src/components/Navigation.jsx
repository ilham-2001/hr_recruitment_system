

const Navigation = () => {
  return (
    <header className='mx-auto flex items-center justify-between text-white px-10 py-6 bg-[#615EFC]'>
      <h4 className='text-[18px] font-semibold'>Company Name</h4>
      <nav>
        <ul className='flex gap-4'>
          <li className='font-medium'>About</li>
          <li className='font-medium'>Career</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation