export const Prices = () => {
    return (
        <div id="prices" style={{ backgroundColor: '#F8F8F8' }}>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="p-4">
                            <button className="radius-16 text-black border-0 mb-3 ff-bold fs-6" style={{ backgroundColor: '#FFB47C' }}>Preços</button>
                            <p className="ff-extraBold text-black fs-2">Preços simples e flexíveis</p>
                            <p className="ff-regular fs-6 text-black">Facilitamos o pagamento através de várias modalidades para tornar o seu tempo e disponibilidade mais flexíveis.</p>
                            <p className="ff-bold fs-4 text-black">Meios de Pagamento</p>
                            <div className="d-flex flex-wrap">
                                <img src="https://qria-tech.s3.amazonaws.com/Visa.png" alt="" className="img-fluid" width={70} />
                                <img src="https://qria-tech.s3.amazonaws.com/MasterCard.png" alt="" className="img-fluid" width={70} />
                                <img src="https://qria-tech.s3.amazonaws.com/PayPal.png" alt="" className="img-fluid" width={70} />
                                <img src="https://qria-tech.s3.amazonaws.com/Amazon.png" alt="" className="img-fluid" width={70} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3 gap-5">
                                <p className="text-black ff-bold fs-2">Básico</p>
                                <button className="radius-16 border-0 ff-bold fs-6 bg-white text-gray">Economize 30%</button>
                            </div>
                            <div className="border-top border-1 border-gray mb-3"></div>
                            <div className="container text-center">
                                <p className="text-black ff-extraBold fs-2">R$19,99 por mês</p>
                                <button className="radius-16 ff-semiBold border-0 mb-3" style={{ backgroundColor: '#FFEECC', color: '#C68A15' }}>Apenas R$ 240 anuais</button>
                            </div>
                            <div className="border-top border-1 border-gray mb-3"></div>
                            <div className="container text-center">
                                <p className="ff-regular text-gray fs-6">Membros limitados</p>
                                <p className="ff-regular text-gray fs-6"><b className="text-black">Feedback ilimitado</b></p>
                                <p className="ff-regular text-gray fs-6">Horários pré-definidos</p>
                                <p className="ff-regular text-black fs-6">Cadastro de veterinários <b className="text-black">*limitados</b></p>
                                <p className="ff-regular text-gray fs-6">Agenda multifuncional</p>
                            </div>
                            <button className="border border-gray radius-16 ff-bold container-fluid">COMEÇAR</button>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-4 bg-orange" style={{ borderRadius: 30 }}>
                            <div className="d-flex justify-content-between mb-3 gap-5">
                                <p className="text-white ff-bold fs-2">Avançado</p>
                                <button className="radius-16 border-0 ff-bold fs-6" style={{ backgroundColor: '#FFBA69' }}>Popular</button>
                            </div>
                            <div className="border-top border-1 border-gray mb-3"></div>
                            <div className="container text-center">
                                <p className="text-white ff-extraBold fs-2">R$29,99 por mês</p>
                                <button className="radius-16 ff-semiBold border-0 container mb-3" style={{ backgroundColor: '#FFEECC', color: '#C68A15' }}>Apenas R$299 anuais</button>
                            </div>
                            <div className="border-top border-1 border-gray mb-3"></div>
                            <div className="container text-center">
                                <p className="ff-regular text-white fs-6">Membros ilimitados</p>
                                <p className="ff-regular text-white fs-6"><b className="text-white">Acesso a todo o sistema</b></p>
                                <p className="ff-regular text-white fs-6">Funcionalidades exclusivas</p>
                                <p className="ff-regular text-white fs-6">Cadastro de veterinários <b className="text-white">ilimitados</b></p>
                                <p className="ff-regular text-white fs-6">Histórico de atendimentos e agendamento personalizado</p>
                            </div>
                            <button className="radius-16 ff-bold container-fluid border-0" style={{ backgroundColor: '#FFBA69' }}>COMEÇAR</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
