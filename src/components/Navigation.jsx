import { useNavigate } from 'react-router-dom';

const navItems = [
  {
    label: 'About Us',
    url: '/',
  },
  {
    label: 'Career',
    url: '/apply',
  },
  {
    label: 'Bantuan',
    url: '/',
  },
];

const Navigation = () => {
  const navigate = useNavigate();

  const is_login = localStorage.getItem('user_login');

  const navigateTo = (url) => {
    navigate(url);
  };

  return (
    <header className='mx-auto flex items-center justify-between text-white px-10 py-6 bg-blue-500'>
      <h4
        className='cursor-pointer hover:opacity-60 text-[18px] font-semibold'
        onClick={() => navigateTo('/')}>
        Company Name
      </h4>
      <nav>
        <ul className='flex gap-8'>
          {navItems.map((it, index) => {
            return (
              <li
                key={index}
                className='cursor-pointer hover:opacity-60 font-medium'
                onClick={() => navigateTo(it.url)}>
                {it.label}
              </li>
            );
          })}
        </ul>
      </nav>
      {is_login ? (
        <div className='flex gap-4'>
          <button
            type='button'
            className='bg-blue-500 rounded-xl border border-white text-white py-2 px-4 hover:opacity-60'
            onClick={() => {
              navigateTo('/profile');
            }}>
            Profile
          </button>
          <button
            type='button'
            className='bg-blue-500 rounded-xl border border-white text-white py-2 px-4 hover:opacity-60'
            onClick={() => {
              localStorage.removeItem('user_login');
              navigateTo('/');
            }}
            >
            Log out
          </button>
        </div>
      ) : (
        <div className='flex gap-4'>
          <button
            type='button'
            className='bg-blue-500 rounded-xl border border-white text-white py-2 px-4 hover:opacity-60'
            onClick={() => {
              navigateTo('login');
            }}>
            Login
          </button>
          <button
            type='button'
            className='bg-blue-500 rounded-xl border border-white text-white py-2 px-4 hover:opacity-60'>
            Sign up
          </button>
        </div>
      )}
    </header>
  );
};

export default Navigation;
