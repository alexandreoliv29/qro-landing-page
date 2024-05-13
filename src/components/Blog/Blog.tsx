import { Link } from "react-router-dom"

export const Blog = () => {

    return (
        <div id="blog" className="container text-center pt-3 mt-5 pb-5 mb-5">
            <button className="border-0 radius-16 ff-bold fs-6" style={{ backgroundColor: '#FFB47C' }}>Blog</button>
            <p className="ff-extraBold fs-2 pt-3 text-black">Últimas postagens</p>
            <div className="d-md-flex pt-3">
                <div className="container bg-gray radius-16">
                    <img className="img-fluid" src="https://qria-tech.s3.amazonaws.com/Bg1.png" alt="" />
                    <div className="container pt-4">
                        <p className="ff-regular text-gray fs-6 text-md-start">15 de Novembro de 2022</p>
                        <p className="ff-bold text-black fs-2 text-md-start">10 Dicas Principais para Tornar Seu Produto SaaS Cativante</p>
                        <p className="ff-regular text-gray fs-6 text-md-start">É um fato estabelecido de que um leitor será distraído pelo conteúdo legível de uma página ao olhar para o layout. O objetivo de usar o Lorem Ipsum</p>
                        <Link className='nav-link scale fw-bold text-black' to="/blog">
                            Ir para o Blog
                        </Link>
                    </div>
                </div>
                <div className="container bg-gray radius-16" style={{ marginTop: window.screen.width < 767 ? 40 : 0 }}>
                    <img className="img-fluid" src="https://qria-tech.s3.amazonaws.com/Bg3.png" alt="" />
                    <div className="container pt-4">
                        <p className="ff-regular text-gray fs-6 text-md-start">15 de Novembro de 2022</p>
                        <p className="ff-bold text-black fs-2 text-md-start">Automatize a Geração de Relatórios com Saasup</p>
                        <p className="ff-regular text-gray fs-6 text-md-start">É um fato estabelecido de que um leitor será distraído pelo conteúdo legível de uma página ao olhar para o layout. O objetivo de usar o Lorem Ipsum</p>
                        <Link className='nav-link scale fw-bold text-black' to="/blog">
                           Ir para o Blog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
