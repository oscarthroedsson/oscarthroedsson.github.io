import React from "react";
import testimonial1 from "../../assets/images/testimonial1.jpg";
import testimonial2 from "../../assets/images/testimonial2.jpg";

const Testimonials = () => {
  return (
    <section className="projects-section bg-light">
      <div className="container">
        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={testimonial1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-secondary text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-primary">10/10</h4>
                  <p className="mb-0 text-black">
                    Grym PT! Aldrig har jag varit i så bra form som jag är idag.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                  <p className="mb-0 text-black">Kalle Anka</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={testimonial2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-secondary text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-primary">Rekommenderar verkligen</h4>
                  <p className="mb-0 text-black">
                    Oscar vet verkligen vad han håller på med. Jag gick ifrån
                    att sova i hundra år till att ha hur mycket energi som
                    helst.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                  <p className="mb-0 text-black">Törnrosa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
