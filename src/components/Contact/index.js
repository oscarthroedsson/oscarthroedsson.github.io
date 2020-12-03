import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const Contact = () => {
  const [step, setStep] = useState(1);
  const handleNext = (e, currentStep) => {
    e.preventDefault();
    setStep(currentStep + 1);
  };

  const handlePrevious = (e, currentStep) => {
    e.preventDefault();
    setStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto text-center">
          <h2 className="text-white mb-5">Kontakt</h2>

          <form>
            {step == 1 && <StepOne handleNext={handleNext}></StepOne>}
            {step == 2 && (
              <StepTwo
                handleNext={handleNext}
                handlePrevious={handlePrevious}
              ></StepTwo>
            )}
            {step == 3 && (
              <StepThree
                handleNext={handleNext}
                handlePrevious={handlePrevious}
              ></StepThree>
            )}
            {step == 4 && (
              <StepFour
                handlePrevious={handlePrevious}
                handleSubmit={handleSubmit}
              ></StepFour>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
