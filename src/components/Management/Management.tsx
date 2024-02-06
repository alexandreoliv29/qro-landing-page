

export const Management = () => {
    return (
        <div className="container mt-5 d-flex flex-column justify-content-center">
            <div className="d-flex flex-column justify-content-center">
                <button className="btn p-2 radius-39 bg-light-orange border-0 ff-bold text-black fs-6 align-self-center">QRO AGENDAR</button>
                <p className="ff-extraBold text-black text-center mt-2">A gestão do seu negócio de forma ainda mais profissional!</p>
            </div>
            <div className="d-md-flex d-column justify-content-center align-items-center">
                <div>
                    <img src="https://qria-tech.s3.amazonaws.com/firstCard.svg" alt="" />
                    <p className="ff-bold text-black text-center">Agendamento Personalizado</p>
                    <p className="ff-regular text-gray text-center">Faça agendamento de acordo com cada veterinário disponível e personalize.</p>
                </div>
                <div>
                    <img src="https://qria-tech.s3.amazonaws.com/secondCard.svg" alt="" />
                    <p className="ff-bold text-black text-center">Lembretes de Consulta</p>
                    <p className="ff-regular text-gray text-center">Na correria do dia a dia se não tivermos lembretes, com certeza vamos esquecer de compromissos.</p>
                </div>
                <div>
                    <img src="https://qria-tech.s3.amazonaws.com/thirdCard.svg" alt="" />
                    <p className="ff-bold text-black text-center">Controle Financeiro</p>
                    <p className="ff-regular text-gray text-center">Tenha na palma de suas mãos todo controle financeiro de sua clínica veterinária.</p>
                </div>
            </div>
        </div>
    )
}