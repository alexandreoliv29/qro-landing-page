import { useEffect, useState } from 'react';

export const NavbarMobile = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
        <nav id='sidebar' className={`d-md-none zIndex navbar navbar-expand-lg position-fixed w-100 m-0 p-0 ${scrolled ? 'scrolled' : ''}`}>
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="#">
                        <img width={60} height={60} className='img-fluid' src="https://qria-tech.s3.amazonaws.com/LogoQro.svg" alt="" />
                    </a>
                    <button style={{ width: 70, height: 50, position: 'absolute', right: 20 }} className="navbar-toggler" type="button" onClick={toggleMenu}>
                        <img width={30} src="https://vinum-wine.s3.amazonaws.com/Menu+Rounded.png" />
                    </button>
                </div>
            </div>
            <div className={`collapse navbar-collapse mt-md-0 mt-3 pt-2 ${menuOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav d-flex flex-row align-items-center justify-content-center gap-3">
                    <li className="nav-item">
                        <a className="nav-link nav-link text-white ff-bold fs-6" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white ff-bold fs-6" href="#prices">Preços</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white ff-bold fs-6" href="#blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white ff-bold fs-6" href="#footer">Contato</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
