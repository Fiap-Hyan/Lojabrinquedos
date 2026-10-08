import React, { useState } from 'react'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#produtos', label: 'Brinquedos' },
  { href: '#contato', label: 'Contato' },
]

const Header = () => {
  const [aberto, setAberto] = useState(false)

  return (
    // Se você configurou cores customizadas no tailwind.config.js (ex: azul, amarelo),
    // você pode trocar 'bg-blue-600' por 'bg-azul' e 'text-yellow-400' por 'text-amarelo'.
    <header className="sticky top-0 z-50 bg-blue-600 text-white shadow-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        {/* Logo */}
        <a href="#" className="text-3xl font-extrabold tracking-wide">
          Loja<span className="text-yellow-400">Brinquedos</span>
        </a>

        {/* Links de navegação Desktop */}
        <ul className="hidden items-center gap-8 text-lg font-semibold md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-yellow-400 focus-visible:outline-2 focus-visible:outline-yellow-400 rounded-md px-2 py-1"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão do Menu Mobile */}
        <button
          onClick={() => setAberto(!aberto)}
          className="text-3xl leading-none md:hidden focus:outline-none"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
        >
          {aberto ? '✕' : '☰'}
        </button>
      </nav>

      {/* Menu Dropdown Mobile */}
      {aberto && (
        <ul className="flex flex-col gap-4 border-t border-blue-500 px-5 pb-5 pt-3 text-lg font-medium md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a 
                href={l.href} 
                onClick={() => setAberto(false)}
                className="block transition-colors hover:text-yellow-400"
              >
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