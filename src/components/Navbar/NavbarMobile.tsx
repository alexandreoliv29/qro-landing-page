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
        <div className={`navbar-mobile d-md-none ${scrolled ? 'scrolled' : ''}`}>
            <a className="navbar-brand" href="#">
                <img src="https://qria-tech.s3.amazonaws.com/LogoQro.svg" className="img-fluid" width={50} alt="" />
            </a>
            <button className="navbar-toggler" onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
            </button>
            {menuOpen &&
                <div className={`navbar-collapse`}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Opção 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Opção 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Opção 3</a>
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
};
