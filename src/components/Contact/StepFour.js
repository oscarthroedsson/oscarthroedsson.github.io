import React from "react";

const StepFour = ({ handlePrevious, handleSubmit }) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="form-group col-md-6">
          <label className="text-white" htmlFor="firstName">
            Förnamn
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="firstName"
          ></input>
        </div>
        <div className="form-group col-md-6">
          <label className="text-white" htmlFor="lastName">
            Efternamn
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="lastName"
          ></input>
        </div>
        <div className="form-group col-md-6">
          <label className="text-white" htmlFor="email">
            Email
          </label>
          <input
            required
            type="email"
            className="form-control"
            id="email"
          ></input>
        </div>
        <div className="form-group col-md-6">
          <label className="text-white" htmlFor="phone">
            Telefon
          </label>
          <input
            required
            type="tel"
            className="form-control"
            id="phone"
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-12">
          <button
            className="btn btn-secondary float-left"
            onClick={(e) => handlePrevious(e, 4)}
          >
            Föreågende
          </button>
          <button
            className="btn btn-primary float-right"
            onClick={(e) => handleSubmit(e)}
          >
            Skicka
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepFour;
