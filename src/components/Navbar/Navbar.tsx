import { useEffect, useState } from "react";


export const Navbar = () => {


    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className="navbar navbar-expand-lg position-fixed w-100 z-1 pt-2" style={{ backgroundColor: scrolling ? '#d9d9d9' : 'transparent' }}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://qria-tech.s3.amazonaws.com/LogoQro.svg" className="img-fluid" width={50} alt="" />
                </a>
                <div className="collapse navbar-collapse d-md-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link nav-link text-white ff-bold fs-6" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white ff-bold fs-6" href="#">Sobre Nós</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white ff-bold fs-6" href="#">Preços</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white ff-bold fs-6" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white ff-bold fs-6" href="#">Contato</a>
                        </li>
                    </ul>
                </div>
                <button className="radius-39 border-0 bg-white ff-bold fs-6">Entrar</button>
            </div>
        </nav>
    )
}