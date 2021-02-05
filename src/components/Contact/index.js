import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const Contact = ({ showPriceInfo }) => {
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [length, setLength] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [dayDescription, setDayDescription] = useState("");
  const [numberOfTries, setNumberOfTries] = useState("");
  const [failureReason, setFailureReason] = useState("");
  const [goalImportance, setGoalImportance] = useState(0);
  const [whyNotMax, setWhyNotMax] = useState("");
  const [howLongGoal, setHowLongGoal] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleNext = (e, currentStep) => {
    e.preventDefault();
    setStep(currentStep + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeStreetAddress = (e) => {
    setStreetAddress(e.target.value);
  };

  const handleChangePostalCode = (e) => {
    setPostalCode(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangeLength = (e) => {
    setLength(e.target.value);
  };

  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleChangeGoal = (e) => {
    setGoal(e.target.value);
    setStep(3);
  };

  const handleChangeDayDescription = (e) => {
    setDayDescription(e.target.value);
  };

  const handleChangeNumberOfTries = (e) => {
    setNumberOfTries(e.target.value);
  };

  const handleChangeFailureReason = (e) => {
    setFailureReason(e.target.value);
  };

  const handleChangeGoalImportance = (e) => {
    setGoalImportance(e.target.value);
  };

  const handleChangeWhyNotMax = (e) => {
    setWhyNotMax(e.target.value);
  };

  const handleChangeHowLongGoal = (e) => {
    setHowLongGoal(e.target.value);
  };

  const handleChangeAcceptTerms = (e) => {
    setAcceptTerms(e.target.value);
  };

  const handleCompleteStepOne = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !streetAddress ||
      !postalCode ||
      !city
    ) {
      setErrorMessage("Vänligen fyll i alla fält innan du går vidare");
    } else {
      setErrorMessage("");
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !dayDescription ||
      !numberOfTries ||
      !failureReason ||
      !goalImportance ||
      !howLongGoal ||
      (goalImportance != 10 && !whyNotMax)
    ) {
      setErrorMessage("Vänligen fyll i alla fält innan du går vidare");
      return;
    } else if (!acceptTerms) {
      setErrorMessage("Vänligen acceptera villkoren innan du går vidare.");
      return;
    } else {
      setErrorMessage("");
    }
    var formData = new FormData();
    formData.append("entry.994694613", firstName);
    formData.append("entry.1870770121", lastName);
    formData.append("entry.1999044351", email);
    formData.append("entry.1267153669", streetAddress);
    formData.append("entry.561609485", postalCode);
    formData.append("entry.2076041145", city);
    formData.append("entry.1378902402", age);
    formData.append("entry.844081402", length);
    formData.append("entry.884416499", weight);
    formData.append("entry.522566656", dayDescription);
    formData.append("entry.1129621687", numberOfTries);
    formData.append("entry.260284597", failureReason);
    formData.append("entry.2058313083", whyNotMax);
    formData.append("entry.846033532", howLongGoal);
    formData.append("entry.2096979562", gender);
    formData.append("entry.327332031", goal);
    formData.append("entry.475692697", goalImportance);

    fetch(
      "https://docs.google.com/forms/u/5/d/e/1FAIpQLSeEiKVe8tPSZc7JseRlJ6m1y6gYVHPKdiUDhZ-iPZIYziXjJQ/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    ).then(() => setStep(4));
  };
  return (
    <section id="anmalan" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <h2 className="text-white mb-5">Anmälan</h2>
            <div className="info">
              {showPriceInfo && (
                <React.Fragment>
                  <h4>Prisinformation*</h4>
                  <p>Startavgift: 1200kr</p>

                  <p>Månadspris: 3500kr</p>
                  <p className="font-italic mb-3">
                    *Alla priser är inklusive moms
                  </p>
                  <p className="mb-3">
                    Startdatum: 15/2 och pågår i sex månader
                  </p>
                </React.Fragment>
              )}

              <p className="text-black-50">
                Din ansökan är <u>bindande</u>.
              </p>
              <p className="text-black-50">
                Vid frågor, maila mig på{" "}
                <a href="mailto:oscar.throedsson@gmail.com">
                  oscar.throedsson@gmail.com
                </a>
              </p>
            </div>
            <form>
              {step === 1 && (
                <StepOne
                  firstName={firstName}
                  onChangeFirstName={handleChangeFirstName}
                  lastName={lastName}
                  onChangeLastName={handleChangeLastName}
                  email={email}
                  onChangeEmail={handleChangeEmail}
                  streetAddress={streetAddress}
                  onChangeStreetAddress={handleChangeStreetAddress}
                  postalCode={postalCode}
                  onChangePostalCode={handleChangePostalCode}
                  city={city}
                  onChangeCity={handleChangeCity}
                  age={age}
                  onChangeAge={handleChangeAge}
                  length={length}
                  onChangeLength={handleChangeLength}
                  weight={weight}
                  onChangeWeight={handleChangeWeight}
                  gender={gender}
                  onChangeGender={handleChangeGender}
                  onCompleteStepOne={handleCompleteStepOne}
                ></StepOne>
              )}
              {step === 2 && (
                <StepTwo
                  onChangeGoal={handleChangeGoal}
                  onChangePrevious={handlePrevious}
                ></StepTwo>
              )}
              {step === 3 && (
                <StepThree
                  onChangePrevious={handlePrevious}
                  onSubmit={handleSubmit}
                  dayDescription={dayDescription}
                  onChangeDayDescription={handleChangeDayDescription}
                  numberOfTries={numberOfTries}
                  onChangeNumberOfTries={handleChangeNumberOfTries}
                  failureReason={failureReason}
                  onChangeFailureReason={handleChangeFailureReason}
                  goalImportance={goalImportance}
                  onChangeGoalImportance={handleChangeGoalImportance}
                  whyNotMax={whyNotMax}
                  onChangeWhyNotMax={handleChangeWhyNotMax}
                  howLongGoal={howLongGoal}
                  onChangeHowLongGoal={handleChangeHowLongGoal}
                  onChangeAcceptTerms={handleChangeAcceptTerms}
                ></StepThree>
              )}
              {errorMessage && <p className="text-white">{errorMessage}</p>}

              {step === 4 && (
                <h3 className="text-white">Tack för din intresseanmälan.</h3>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
