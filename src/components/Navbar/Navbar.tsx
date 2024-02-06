
export const Navbar = () => {

    return (
        <nav className="d-md-flex d-none navbar navbar-expand-lg  w-100 z-1 pt-2">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://qria-tech.s3.amazonaws.com/LogoQro.svg" className="img-fluid" width={50} alt="" />
                </a>
                <div className="collapse navbar-collapse d-md-flex justify-content-end " id="navbarNav">
                    <ul className="navbar-nav radius-16 gap-4 p-2 me-5" style={{backgroundColor: 'rgba(255, 255, 255, 0.10)'}}>
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
                <button className="radius-16 border-0 bg-white ff-bold fs-6">Entrar</button>
            </div>
        </nav>
    )
}