

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://qria-tech.s3.amazonaws.com/LogoQro.svg" className="img-fluid" width={50} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
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
                    <button className="radius-39 border-0 bg-white ff-bold fs-6">Entrar</button>
                </div>
            </div>
        </nav>
    )
}