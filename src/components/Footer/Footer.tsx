export const Footer = () => {
    return (
        <div id="footer" className="background-feedback">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 pt-3">
                        <div className="d-flex flex-column align-items-center align-items-md-start mb-4 mb-md-0">
                            <img className="img-fluid" src="https://qria-tech.s3.amazonaws.com/LogoQroWhite.svg" alt="" />
                            <p className="ff-regular text-white fs-6 text-center text-md-start pt-3">Muito mais que uma agenda, um facilitador para sua clínica.</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column align-items-center align-items-md-start mb-4 mb-md-0">
                            <div className="d-flex gap-2">
                                <img src="https://qria-tech.s3.amazonaws.com/mail.svg" alt="" />
                                <p className="ff-regular text-white fs-6 pt-3">techqria@gmail.com</p>
                            </div>
                            <div className="d-flex gap-2">
                                <img src="https://qria-tech.s3.amazonaws.com/phone-call.svg" alt="" />
                                <p className="ff-regular text-white fs-6 pt-3">(61)98210-6396</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <p className="ff-bold text-white">Desenvolvido por QRO AGENDAR</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
