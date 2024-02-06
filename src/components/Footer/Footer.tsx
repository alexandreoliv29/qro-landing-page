

export const Footer = () => {
    return (
        <div className="background-feedback">
            <div className="container d-flex justify-content-around align-items-center justify-content-center">
                <div className="d-column">
                    <img className="img-fluid" src="https://qria-tech.s3.amazonaws.com/LogoQroWhite.svg" alt="" />
                    <p className="ff-regular text-white fs-6">Muito mais que uma agenda, um facilitador para sua clínica.</p>
                </div>
                <div className="d-column align-items-center">
                    <div className="d-flex gap-2">
                        <img src="https://qria-tech.s3.amazonaws.com/mail.svg" alt="" />
                        <p className="ff-regular text-white fs-6">techqria@gmail.com</p>
                    </div>
                    <div className="d-flex gap-2">
                        <img src="https://qria-tech.s3.amazonaws.com/phone-call.svg" alt="" />
                        <p className="ff-regular text-white fs-6">(61)98210-6396</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <p className="ff-bold text-white">Powered by QRO AGENDAR</p>
            </div>
        </div>
    )
}