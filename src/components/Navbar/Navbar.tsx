import { useEffect, useState } from 'react';

export const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar d-md-flex d-none navbar navbar-expand-lg  w-100 z-1 pt-2 ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://qria-tech.s3.amazonaws.com/LogoQro.svg" className="img-fluid" width={50} alt="" />
                </a>
                <div className="collapse navbar-collapse d-md-flex justify-content-end " id="navbarNav">
                    <ul className="navbar-nav radius-16 gap-4 p-2 me-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.10)' }}>
                        <li className="nav-item">
                            <a className="nav-link nav-link text-white ff-bold fs-6" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white ff-bold fs-6" href="#prices">Preços</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white ff-bold fs-6" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white ff-bold fs-6" href="#footer">Contato</a>
                        </li>
                    </ul>
                </div>
                <button className="radius-16 border-0 bg-white ff-bold fs-6">Entrar</button>
            </div>
        </nav>
    )
}