import React from "react";

const StepTwo = ({ handleNext, handlePrevious }) => {
  return (
    <React.Fragment>
      <div>
        <div>
          <input className="button-radio" type="radio" />
          <label onClick={(e) => handleNext(e, 2)}>Kvinna</label>
        </div>
        <div>
          <input className="button-radio" type="radio" />
          <label onClick={(e) => handleNext(e, 2)}>Man</label>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-12">
          <button
            onClick={(e) => handlePrevious(e, 2)}
            className="btn btn-secondary float-left "
          >
            Föreågende
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepTwo;
