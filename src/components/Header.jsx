import React, { useState } from 'react'
import tailwindcss from '@tailwindcss/vite'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Brinquedos' },
  { href: '#contato', label: 'Contato' },
]

const Header = () => {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-azul text-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#" className="text-3xl font-extrabold">
          Loja<span className="text-amarelo">Brinquedos</span>
        </a>

        <h1 className="text-2xl font-bold text-amarelo">oi</h1>

        <ul className="hidden gap-8 text-lg font-semibold md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-amarelo focus-visible:outline-2 focus-visible:outline-amarelo"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setAberto(!aberto)}
          className="text-3xl leading-none md:hidden"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
        >
          {aberto ? '×' : '≡'}
        </button>
      </nav>

      {aberto && (
        <ul className="flex flex-col gap-4 px-5 pb-5 text-lg md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setAberto(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Header