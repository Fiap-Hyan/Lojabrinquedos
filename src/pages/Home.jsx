import BrinCard from '../components/BrinCard'
import jogoImg1 from '../assets/imagem1.jpg'
import jogoImg2 from '../assets/imagem2.jpg'
import jogoImg3 from '../assets/imagem3.jpg'
import jogoImg4 from '../assets/imagem4.jpg'

const Home = () => {
    const brinquedos = [
        { id: 1, titulo: "Carrinho", preco: "R$ 40,00", imagem: jogoImg1 },
        { id: 2, titulo: "Skate", preco: "R$ 60,00", imagem: jogoImg2 },
        { id: 3, titulo: "BeyBlade", preco: "R$ 70,00", imagem: jogoImg3 },
        { id: 1, titulo: "NERF", preco: "R$ 40,00", imagem: jogoImg4 },
    ];

    return (
        <>
            <main className='px-[5%] mt-10 mb-16 flex-grow'>
                <h2 className='titulo text-3xl'>Produtos em Destaques</h2>
                <section className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6'>
                    {brinquedos.map((brinquedo) => (
                        <BrinCard
                            key={brinquedo.id}
                            titulo={brinquedo.titulo}
                            preco={brinquedo.preco}
                            imagem={brinquedo.imagem}
                        />
                    ))}
                </section>

            </main>
        </>
    )
}

export default Home