import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-tinta text-white/80">
        <div className='mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 md:flex-row md:justify-between'>
            <div>
                <p className='text-2xl font-extrabold text-white'>
                    Loja<span className='text-amarelo'>Brinquedos</span>
                </p>
                <p>Avenida Paulista, 1100 - São Paulo</p>
            </div>
            <div>
                <p>Segunda a sábado, 9h às 19h</p>
                <a href='https://instagram.com' className='hover:text-amarelo'>Instagram</a>
            </div>
        </div>
        <p className='border-t border-white/15 py-4 text-center text-sm'>&copy;2026 Loja Brinquedos</p>
    </footer>
  )
}


export default Footer