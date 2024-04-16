import React from 'react';

export default function Navigator() {
  const scrollToTop = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='fixed bottom-5 right-5'>
      <button onClick={scrollToTop} className=''>
        <img src='https://cdn-icons-png.flaticon.com/128/2398/2398057.png' className='w-10 h-10' alt='Go Up' />
      </button>
    </div>
  );
}
