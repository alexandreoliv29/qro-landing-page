

export const Powerful = () => {
    return (
        <div className="container bg-light-orange radius-39 mt-5 mb-5">
            <div className="d-md-flex p-5 position-relative">
                <div className="powerful-text" style={{ marginBottom: window.screen.width > 767 ? '' : 350 }}>
                    <p className="ff-extraBold text-black d-md-flex d-none fs-1">Powerful and easy to use<br />saas builder platform</p>
                    <p className="ff-extraBold text-black d-md-none fs-1">Powerful and easy to use saas builder platform</p>
                    <p className="ff-regular text-gray fs-6">It is a long established fact that a reader will be by the from<br />
                        readable content of a page when looking at its layout. The<br />point of using lorem Ipsum.</p>
                    <div className="d-flex gap-3">
                        <img src="https://qria-tech.s3.amazonaws.com/costIcon+(1).svg" alt="" />
                        <div className="d-column">
                            <p className="ff-bold text-black fs-4">Cost Effective</p>
                            <p className="ff-regular text-gray fs-6">Contrary to popular belief, Lore Ipsum is not simply random text. </p>
                        </div>
                    </div>
                </div>
                <div className="image image-container">
                    <img src="https://qria-tech.s3.amazonaws.com/vet.svg" width={500} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    )
}