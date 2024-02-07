
export const Blog = () => {

    return (
        <div className="container text-center pt-5 mt-5 pb-5 mb-5">
            <button className="border-0 radius-16 ff-bold fs-6" style={{ backgroundColor: '#FFB47C' }}>Blog</button>
            <p className="ff-extraBold fs-2 pt-3 text-black">Últimas postagens</p>
            <div className="d-md-flex pt-3">
                <div className="container bg-gray radius-16">
                    <img className="img-fluid" src="https://qria-tech.s3.amazonaws.com/Blog1.png" alt="" />
                    <div className="container pt-4">
                        <p className="ff-regular text-gray fs-6 text-md-start">November 15, 2022</p>
                        <p className="ff-bold text-black fs-2 text-md-start">10 Top tips for making your Saas product sticky</p>
                        <p className="ff-regular text-gray fs-6 text-md-start">It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout.
                            The point of using Lorem Ipsum</p>
                        <a href="">Read More</a>
                    </div>
                </div>
                <div className="container bg-gray radius-16">
                    <img className="img-fluid" src="https://qria-tech.s3.amazonaws.com/Blog2.png" alt="" />
                    <div className="container pt-4">
                        <p className="ff-regular text-gray fs-6 text-md-start">November 15, 2022</p>
                        <p className="ff-bold text-black fs-2 text-md-start">Automate Reports Generation with Saasup</p>
                        <p className="ff-regular text-gray fs-6 text-md-start">It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout.
                            The point of using Lorem Ipsum</p>
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}