

export const Management = () => {
    return (
        <div className="container mt-5 d-flex flex-column justify-content-center">
            <div className="d-flex flex-column justify-content-center">
                <button className="btn radius-16 bg-light-orange border-0 ff-bold text-black fs-6 align-self-center">QRO AGENDAR</button>
                <p className="ff-extraBold text-black text-center mt-2 fs-3">A gestão do seu negócio de forma<br/>ainda mais profissional!</p>
            </div>
            <div className="d-md-flex d-column justify-content-center align-items-center pt-5">
                <div>
                    <img className="img-fluid" src="https://qria-tech.s3.amazonaws.com/firstCard.svg" alt="" />
                    <p className="ff-bold text-black text-center fs-4">Agendamento Personalizado</p>
                    <p className="ff-regular text-gray text-center">Faça agendamento de acordo com<br/>cada veterinário disponível e<br/>personalize.</p>
                </div>
                <div className="radius-16" style={{backgroundColor: '#F9F9F9'}}>
                    <img className="img-fluid" src="https://qria-tech.s3.amazonaws.com/secondCard.svg" alt="" />
                    <p className="ff-bold text-black text-center fs-4">Lembretes de Consulta</p>
                    <p className="ff-regular text-gray text-center">Na correria do dia a dia se não tivermos<br/>lembretes, com certeza vamos<br/>esquecer de compromissos.</p>
                </div>
                <div className="pt-4">
                    <img className="img-fluid" src="https://qria-tech.s3.amazonaws.com/thirdCard.svg" alt="" />
                    <p className="ff-bold text-black text-center fs-4">Controle Financeiro</p>
                    <p className="ff-regular text-gray text-center">Tenha na palma de suas mãos todo<br/>controle financeiro de sua clínica<br/>veterinária.</p>
                </div>
            </div>
        </div>
    )
}