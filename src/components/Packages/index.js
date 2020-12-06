import React from "react";

const Packages = () => {
  return (
    <section id="packages" className="packages-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-primary  mb-4">Priser & Paket</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-globe-europe text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Online</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <ul className="check-list">
                    <li>En sak</li>
                    <li>Två saker</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-city text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Företag</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <ul className="check-list">
                    <li>Här får man lite fler saker</li>
                    <li>Coola saker ingår</li>
                    <li>Det kommer bli grymt bra!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-user text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Privat</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <ul className="check-list">
                    <li>Nu snackar vi</li>
                    <li>Riktigt grymt</li>
                    <li>En annan bra sak</li>
                    <li>???</li>
                    <li>Profit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
