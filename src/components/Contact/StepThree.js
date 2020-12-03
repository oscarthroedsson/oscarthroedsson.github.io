import React from "react";

const StepThree = ({ handleNext, handlePrevious }) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="form-group col-md-4">
          <label className="text-white" htmlFor="age">
            Ålder
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="age"
          ></input>
        </div>
        <div className="form-group col-md-4">
          <label className="text-white" htmlFor="weight">
            Vikt
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="weight"
          ></input>
        </div>
        <div className="form-group col-md-4">
          <label className="text-white" htmlFor="length">
            Längd
          </label>
          <input
            required
            type="number"
            className="form-control"
            id="length"
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-12">
          <button
            className="btn btn-secondary float-left"
            onClick={(e) => handlePrevious(e, 3)}
          >
            Föreågende
          </button>
          <button
            className="btn btn-primary float-right"
            onClick={(e) => handleNext(e, 3)}
          >
            Nästa
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepThree;
