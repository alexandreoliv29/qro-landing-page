

export const Feedback = () => {
    return (
        <div className="background-feedback pb-5">
            <div className="container align-items-center d-flex flex-column justify-content-center p-3">
                <button className="radius-39 bg-purple text-white ff-bold fs-6 border-0">Testimonial</button>
                <p className="ff-extraBold text-white mt-3">Trusted by millions of creators.</p>
                <img src="https://qria-tech.s3.amazonaws.com/%E2%80%9C.svg" width={15} alt="" />

                <div className="carousel d-flex flex-column justify-content-center mt-3">
                    <i className="ff-semiBold text-white fs-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage .</i>
                    <img src="https://qria-tech.s3.amazonaws.com/person.svg" className="img-fluid align-self-center" width={50} alt="" />
                    <p className="ff-bold text-white fs-6 text-center mt-3">James Toriff</p>
                    <p className="ff-semiBold text-white fs-6 text-center">Developer</p>
                </div>
                
            </div>
        </div>
    )
}