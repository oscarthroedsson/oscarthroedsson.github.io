import React from "react";

const StepThree = ({
  dayDescription,
  onChangeDayDescription,
  numberOfTries,
  onChangeNumberOfTries,
  failureReason,
  onChangeFailureReason,
  goalImportance,
  onChangeGoalImportance,
  whyNotMax,
  onChangeWhyNotMax,
  howLongGoal,
  onChangeHowLongGoal,
  onSubmit,
  onChangePrevious,
  onChangeAcceptTerms,
}) => {
  const renderGoalImportance = (number) => {
    return (
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          id={`goal${number}`}
          value={number}
          checked={goalImportance == number}
          onChange={(e) => onChangeGoalImportance(e)}
        />
        <label
          className="form-check-label text-white"
          htmlFor={`goal${number}`}
        >
          {number}
        </label>
      </div>
    );
  };
  return (
    <React.Fragment>
      <div className="row">
        <div className="form-group col-md-12">
          <label className="text-white" htmlFor="dayDescription">
            Hur ser din vardag ut? Jobb, familj, studier och allmän fritid.
          </label>
          <textarea
            className="form-control"
            id="dayDescription"
            value={dayDescription}
            onChange={(e) => onChangeDayDescription(e)}
          />
        </div>
        <div className="form-group col-md-12">
          <label className="text-white" htmlFor="numberOfTries">
            Hur många gånger har du försökt att uppnå angiven målsättning?
          </label>
          <input
            type="text"
            className="form-control"
            id="numberOfTries"
            value={numberOfTries}
            onChange={(e) => onChangeNumberOfTries(e)}
          />
        </div>
        <div className="form-group col-md-12">
          <label className="text-white" htmlFor="failureReason">
            Varför har du inte klarat av att nå din målsättning?
          </label>
          <textarea
            className="form-control"
            id="failureReason"
            value={failureReason}
            onChange={(e) => onChangeFailureReason(e)}
          />
        </div>
        <div className="form-group col-md-12">
          <label className="text-white">
            Hur viktigt är det att nå din målsättning?
          </label>
        </div>
        <div className="form-group col-md-12">
          {renderGoalImportance(1)}
          {renderGoalImportance(2)}
          {renderGoalImportance(3)}
          {renderGoalImportance(4)}
          {renderGoalImportance(5)}
          {renderGoalImportance(6)}
          {renderGoalImportance(7)}
          {renderGoalImportance(8)}
          {renderGoalImportance(9)}
          {renderGoalImportance(10)}
        </div>

        {goalImportance != 10 && (
          <div className="form-group col-md-12">
            <label className="text-white" htmlFor="whyNotMax">
              Varför inte 10?
            </label>
            <textarea
              className="form-control"
              id="whyNotMax"
              value={whyNotMax}
              onChange={(e) => onChangeWhyNotMax(e)}
            />
          </div>
        )}
        <div className="form-group col-md-12">
          <label className="text-white" htmlFor="howLongGoal">
            Hur länge har du haft angiven målsättning?
          </label>
          <textarea
            className="form-control"
            id="howLongGoal"
            value={howLongGoal}
            onChange={(e) => onChangeHowLongGoal(e)}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-12 text-left">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input mr-3"
              type="checkbox"
              id="acceptTerms"
              onChange={(e) => onChangeAcceptTerms(e)}
            />
            <label
              className="form-check-label text-white"
              htmlFor="acceptTerms"
            >
              Jag förstår att denna ansökan är bindande när jag har blivit
              tilldelad en profil och ett träningsprogram (ev: kostprogram). Läs
              mer om{" "}
              <a href="/kopesavtal.pdf" target="_blank">
                köpesavtalet.
              </a>
              .
            </label>
          </div>
        </div>
      </div>
      <div className="col-md-12 text-left text-white">
        <p>
          Har du inte blivit tilldelad en profil eller träningsprogram kan du
          ångra din ansökan inom 14 dagar.
        </p>
      </div>
      <div className="row">
        <div className="form-group col-md-12">
          <button
            className="btn btn-secondary float-left"
            onClick={(e) => onChangePrevious(e, 3)}
          >
            Föreågende
          </button>
          <button
            className="btn btn-primary float-right"
            onClick={(e) => onSubmit(e)}
          >
            Let's go!
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepThree;
