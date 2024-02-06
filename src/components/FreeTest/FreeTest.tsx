
export const FreeText = () => {
    return (
        <div className="background-feedback">
            <div className="container d-md-flex justify-content-center align-items-center">
                <div className="d-column pt-5">
                    <p className="ff-extraBold text-white fs-3">Aproveite um teste gratuito do sistema QRO Agendar.</p>
                    <p className="ff-regular text-white fs-6">Descubra nosso plano com 15 dias de teste gratuito, abrangendo até 100 usuários,sem cobranças extra e sem compromisso.</p>
                    <div className="radius-16 align-items-center justify-content-center p-1" style={{ backgroundColor: '#ffba69' }}>
                        <p className="ff-bold text-white text-center">INICIAR TESTE GRÁTIS AGORA!</p>
                    </div>
                </div>
                <div className="w-50 d-flex">
                    <img className="container-fluid" src="https://qria-tech.s3.amazonaws.com/DogBrown.svg" alt="" />
                </div>
            </div>
        </div>
    )
}