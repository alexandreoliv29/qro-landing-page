

export const Feedback = () => {
    return (
        <div className="container pt-5 ">
            <div className="container align-items-center d-flex flex-column justify-content-center p-3">
                <button className="radius-16 text-black ff-bold fs-6 border-0" style={{ backgroundColor: '#FFB47C' }}>Depoimentos</button>
                <p className="ff-extraBold mt-3 fs-2" style={{ color: '#FF6D00' }}>Testado por vários veterinários e donos de clínicas veterinárias.</p>
                <img width={25} src="https://qria-tech.s3.amazonaws.com/Aspas+(1).svg" alt="" />
                <img src="https://qria-tech.s3.amazonaws.com/%E2%80%9C.svg" width={15} alt="" />

                <div className="carousel d-flex flex-column justify-content-center mt-1">
                    <i className="ff-semiBold text-black fs-6">Nunca achei um modelo de gestão em agendas tão completo como o QRO Agendar, estou extremamente satisfeito com o crescimento do meu negócio!</i>
                    <img src="https://qria-tech.s3.amazonaws.com/person.svg" className="img-fluid align-self-center" width={50} alt="" />
                    <p className="ff-bold text-black fs-6 text-center mt-3">Roberto Carlos<p className="ff-semiBold text-orange fs-6 text-center ">CEO PetVida</p><img width={75} height={75} className="img-fluid align-self-center" src="https://qria-tech.s3.amazonaws.com/Star.svg" alt="" /></p>
                </div>
            </div>
        </div>
    )
}