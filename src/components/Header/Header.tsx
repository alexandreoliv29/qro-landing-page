import { Navbar } from "../Navbar/Navbar"
import { NavbarMobile } from "../Navbar/NavbarMobile"


export const Header = () => {
    return (
        <div className="background-header">
            <Navbar />
            <NavbarMobile />
            <div className="container d-md-flex flex-column justify-content-center">
                <div className="d-md-flex align-items-center">
                    <div className="mt-5">
                        <p className="ff-extraBold fs-1 text-orange" style={{ lineHeight: '110%' }}>Muito mais <p className="ff-extraBold text-black fs-1">que uma agenda!</p></p>
                        <p className="ff-regular fs-6 text-gray">A mais completa plataforma de gestão de negócios
                            para clínicas veterinárias.</p>
                        <div className="gap-3 d-flex">
                            <button className="radius-16 border-0 p-2 ff-bold fs-6 text-white bg-orange">Começar agora</button>
                            <button className="radius-16 border-0 p-2 ff-bold fs-6 text-black">Ver Vídeo
                                <img className="ms-2" width={25} height={25} src="https://qria-tech.s3.amazonaws.com/Video.svg" alt="" /></button>
                        </div>
                    </div>
                    <div className="">
                        <img className="img-fluid" src="https://qria-tech.s3.amazonaws.com/MoreDraw.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}