import React from "react";

const StepOne = ({ handleNext }) => {
  return (
    <div>
      <h3 className="text-white mb-5">Vad är ditt mål?</h3>
      <div>
        <input className="button-radio" type="radio" />
        <label onClick={(e) => handleNext(e, 1)}>Gå ned i vikt</label>
      </div>
      <div>
        <input className="button-radio" type="radio" />
        <label onClick={(e) => handleNext(e, 1)}>Gå upp i vikt</label>
      </div>
      <div>
        <input className="button-radio" type="radio" />
        <label onClick={(e) => handleNext(e, 1)}>Bygga muskler</label>
      </div>
      <div>
        <input className="button-radio" type="radio" />
        <label onClick={(e) => handleNext(e, 1)}>Livsstilsförändring</label>
      </div>
      <div>
        <input className="button-radio" type="radio" />
        <label onClick={(e) => handleNext(e, 1)}>Bli smärtfri</label>
      </div>
    </div>
  );
};

export default StepOne;
