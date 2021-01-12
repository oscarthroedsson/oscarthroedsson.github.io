import React from "react";

const StepTwo = ({ onChangeGoal, onChangePrevious }) => {
  return (
    <React.Fragment>
      <h3 className="text-white mb-5">Vad är ditt mål?</h3>

      <div>
        <input
          className="button-radio"
          type="radio"
          value="Bygga muskler"
          onChange={(e) => onChangeGoal(e)}
          id="goalMuscles"
        />
        <label htmlFor="goalMuscles">Bygga muskler</label>
      </div>
      <div>
        <input
          className="button-radio"
          type="radio"
          value="Gå ned i vikt"
          onChange={(e) => onChangeGoal(e)}
          id="goalLoseWeight"
        />
        <label htmlFor="goalLoseWeight">Gå ned i vikt</label>
      </div>
      <div>
        <input
          className="button-radio"
          type="radio"
          value="Ändra min livsstil"
          onChange={(e) => onChangeGoal(e)}
          id="goalLifestyle"
        />
        <label htmlFor="goalLifestyle">Ändra min livsstil</label>
      </div>
      <div className="row">
        <div className="form-group col-md-12">
          <button
            className="btn btn-secondary float-left"
            onClick={(e) => onChangePrevious(e)}
          >
            Föreågende
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepTwo;
