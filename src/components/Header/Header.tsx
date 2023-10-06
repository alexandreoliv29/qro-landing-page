import { Navbar } from "../Navbar/Navbar"


export const Header = () => {
    return (
        <div className="">
            <Navbar />
            <div className="container d-md-flex flex-column justify-content-center pt-3">
                <div className="d-md-flex align-items-center">
                    <div className="">
                        <p className="ff-extraBold fs-1 text-orange">Muito mais <p>que uma agenda!</p></p>
                        <p className="ff-regular fs-6 text-gray">A mais completa plataforma de gestão de negócios
                            para clínicas veterinárias.</p>
                        <button className="radius-39">Começar agora</button>
                        <button className="radius-39">Ver Vídeo</button>
                    </div>
                    <div className="">
                        <img className="img-fluid" src="https://qria-tech.s3.amazonaws.com/MoreDraw.svg" alt="" />
                    </div>
                </div>
            </div>



        </div>
    )
}