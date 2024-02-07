

export const Feedback = () => {
    return (
        <div className="container pt-5 ">
            <div className="container align-items-center d-flex flex-column justify-content-center p-3">
                <button className="radius-16 text-black ff-bold fs-6 border-0" style={{ backgroundColor: '#FFB47C' }}>Depoimentos</button>
                <p className="ff-extraBold mt-3 fs-2" style={{ color: '#FF6D00' }}>Trusted by millions of creators.</p>
                <img width={25} src="https://qria-tech.s3.amazonaws.com/Aspas+(1).svg" alt="" />
                <img src="https://qria-tech.s3.amazonaws.com/%E2%80%9C.svg" width={15} alt="" />

                <div className="carousel d-flex flex-column justify-content-center mt-1">
                    <i className="ff-semiBold text-black fs-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage .</i>
                    <img src="https://qria-tech.s3.amazonaws.com/person.svg" className="img-fluid align-self-center" width={50} alt="" />
                    <p className="ff-bold text-black fs-6 text-center mt-3">James Toriff<p className="ff-semiBold text-orange fs-6 text-center ">Developer</p><img width={75} height={75} className="img-fluid align-self-center" src="https://qria-tech.s3.amazonaws.com/Star.svg" alt="" /></p>
                </div>
            </div>
        </div>
    )
}