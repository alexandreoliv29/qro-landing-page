export const Prices = () => {
    return (
        <div style={{ backgroundColor: '#F8F8F8' }}>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="p-4">
                            <button className="radius-16 text-black border-0 mb-3 ff-bold fs-6" style={{ backgroundColor: '#FFB47C' }}>Pricing</button>
                            <p className="ff-extraBold text-black fs-2">Preços simples e flexíveis</p>
                            <p className="ff-regular fs-6 text-black">É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao olhar seu layout</p>
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
                            <div className="d-flex justify-content-between mb-3">
                                <p className="text-black ff-bold fs-2">Basic</p>
                                <div className="p-2 radius-16 bg-white ff-bold text-gray fs-6">Save 30%</div>
                            </div>
                            <div className="border-top border-1 border-gray mb-3"></div>
                            <div className="container text-center">
                                <p className="text-black ff-extraBold fs-2">R$7.99 / month</p>
                                <button className="radius-16 ff-semiBold border-0 mb-3" style={{ backgroundColor: '#FFEECC', color: '#C68A15' }}>Billed as R$96 per year</button>
                            </div>
                            <div className="border-top border-1 border-gray mb-3"></div>
                            <div className="container text-center">
                                <p className="ff-regular text-gray fs-6">Unlimited members</p>
                                <p className="ff-regular text-gray fs-6"><b className="text-black">Unlimited</b> feedback</p>
                                <p className="ff-regular text-gray fs-6">Weekly team Feedback Friday</p>
                                <p className="ff-regular text-gray fs-6">Custom Kudos <b className="text-black">+9 illustration</b></p>
                                <p className="ff-regular text-gray fs-6">Team feedback history</p>
                            </div>
                            <button className="border border-gray radius-16 ff-bold container-fluid">GET STARTED</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-4 bg-orange" style={{ borderRadius: 30 }}>
                            <div className="d-flex justify-content-between mb-3">
                                <p className="text-white ff-bold fs-2">Advanced</p>
                                <button className="radius-16 border-0 ff-bold fs-6" style={{ backgroundColor: '#FFBA69' }}>Popular</button>
                            </div>
                            <div className="border-top border-1 border-gray mb-3"></div>
                            <div className="container text-center">
                                <p className="text-white ff-extraBold fs-2">R$10.99 / month</p>
                                <button className="radius-16 ff-semiBold border-0 container mb-3" style={{ backgroundColor: '#FFEECC', color: '#C68A15' }}>Billed as R$199 per year</button>
                            </div>
                            <div className="border-top border-1 border-gray mb-3"></div>
                            <div className="container text-center">
                                <p className="ff-regular text-white fs-6">Unlimited members</p>
                                <p className="ff-regular text-white fs-6"><b className="text-white">Unlimited</b> feedback</p>
                                <p className="ff-regular text-white fs-6">Weekly team Feedback Friday</p>
                                <p className="ff-regular text-white fs-6">Custom Kudos <b className="text-white">+9 illustration</b></p>
                                <p className="ff-regular text-white fs-6">Team feedback history</p>
                            </div>
                            <button className="radius-16 ff-bold container-fluid border-0" style={{ backgroundColor: '#FFBA69' }}>GET STARTED</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
