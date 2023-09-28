

export const Header = () => {
    return (
        <div className="d-flex">
            <div className="d-column">
                <h2>Muito mais <h2>que uma agenda!</h2></h2>
                <p>A mais completa plataforma de gestão de negócios para clínicas veterinárias</p>

                <div className="d-flex">
                    <button className="btn" style={{ backgroundColor: '#FF6D00' }}>Começar Agora</button>
                    <button className="btn" style={{ backgroundColor: '#F4F4F4' }}>
                        <p>Ver Vídeo</p>
                        <img src="https://qria-tech.s3.amazonaws.com/Video.svg" alt="VideoButton" />
                    </button>
                </div>
            </div>
            <img src="https://qria-tech.s3.amazonaws.com/MoreDraw.svg" alt="" />
        </div>
    )
}