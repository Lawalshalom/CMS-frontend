import React from 'react';
import Header from "../Components/Header";
import Form from "../Components/Form";
import Footer from "../Components/Footer";

const Home = () => {

    return (
    <>
        <div className="container-xl container-fluid">
            <Header />
            <main id="home">
                <div className="intro row">
                    <div className="col-12 col-sm-6 col-xm-6 right">
                        <div className="logo-text">
                            <div className="logo-img" data-aos="fade-right"></div>
                            <h3 data-aos="fade-down"><span>CENSUS</span><span>MANAGEMENT</span><span>SERVICE</span></h3>
                        </div>
                        <h5 data-aos="fade-left"><em>Get Counted</em></h5>
                        <p className="text-center" data-aos="fade-right">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo temporibus nesciunt, recusandae exercitationem molestiae accusamus hic quia consequuntur similique ratione suscipit praesentium! Ex eligendi repellendus ratione sed architecto. Qui animi reiciendis voluptatem nemo vel unde. Quo voluptatum omnis!</p>
                        <a data-aos="fade-right" href="#footer">Get Started</a>
                    </div>
                    <div className="col-12 col-sm-6 col-xm-6">
                        <div data-aos="fade-left" className="data-circle"></div>
                    </div>
                </div>
             <Form />
            </main>
            <Footer />
        </div>
    </>
    )
}
export default Home;