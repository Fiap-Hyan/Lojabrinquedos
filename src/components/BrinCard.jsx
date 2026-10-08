import React from 'react'

const BrinCard = ({ titulo, preco, imagem }) => {
    return (
        <>
            <div className="bg-black rounded-[20px] overflow-hidden transition-all duration-300 hover:translate-y-2 hover:border-4 hover:border-[#3500f5]">
                    <img src={imagem} alt={titulo} className="w-[300px] h-[300px] object-cover justify-self-center-safe" /> 
                <article className="text-center p-4">
                    <h2 className="text-xl text-[#003cff] uppercase mb-3 font-bold">{titulo}</h2>
                    <p className="text-white text-2xl font-bold mb-4"></p>
                    <h2 className="text-xl text-[#6c8aec] uppercase mb-3 font-bold">{preco}</h2>
                    <button className="bg-gradient-to-r from-cyan-400 to bg-blue-600 w-[50%] py-2 px-4 rounded-[20px] border-none cursor-pointer font-semibold transition transform hover: bg-gren-800 hover: text-white hover: scale-105">
                        Comprar
                    </button>
                </article>
            </div>
            
        </>
    )
}

export default BrinCard