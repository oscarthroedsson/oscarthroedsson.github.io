import React from "react";

const StepOne = ({
  firstName,
  onChangeFirstName,
  lastName,
  onChangeLastName,
  email,
  onChangeEmail,
  streetAddress,
  onChangeStreetAddress,
  postalCode,
  onChangePostalCode,
  city,
  onChangeCity,
  age,
  onChangeAge,
  length,
  onChangeLength,
  weight,
  onChangeWeight,
  gender,
  onChangeGender,
  onCompleteStepOne,
}) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="form-group col-md-6">
          <label className="text-white" htmlFor="firstName">
            Förnamn
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => onChangeFirstName(e)}
          />
        </div>
        <div className="form-group col-md-6">
          <label className="text-white" htmlFor="lastName">
            Efternamn
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => onChangeLastName(e)}
          />
        </div>
        <div className="form-group col-md-12">
          <label className="text-white" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => onChangeEmail(e)}
          />
        </div>
        <div className="form-group col-md-12">
          <label className="text-white" htmlFor="streetAddress">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="streetAddress"
            value={streetAddress}
            onChange={(e) => onChangeStreetAddress(e)}
          />
        </div>
        <div className="form-group col-md-4">
          <label className="text-white" htmlFor="postalCode">
            Postnummer
          </label>
          <input
            type="text"
            className="form-control"
            id="postalCode"
            value={postalCode}
            onChange={(e) => onChangePostalCode(e)}
          />
        </div>
        <div className="form-group col-md-8">
          <label className="text-white" htmlFor="city">
            Stad
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={(e) => onChangeCity(e)}
          />
        </div>

        <div className="form-group col-md-4">
          <label className="text-white" htmlFor="age">
            Ålder
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => onChangeAge(e)}
          />
        </div>
        <div className="form-group col-md-4">
          <label className="text-white" htmlFor="length">
            Längd
          </label>
          <input
            type="number"
            className="form-control"
            id="length"
            value={length}
            onChange={(e) => onChangeLength(e)}
          />
        </div>

        <div className="form-group col-md-4">
          <label className="text-white" htmlFor="weight">
            Vikt
          </label>
          <input
            type="number"
            className="form-control"
            id="weight"
            value={weight}
            onChange={(e) => onChangeWeight(e)}
          />
        </div>
        <div className="form-group col-md-12">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="genderFemale"
              value="Kvinna"
              checked={gender === "Kvinna"}
              onChange={(e) => onChangeGender(e)}
            />
            <label
              className="form-check-label form-check-label text-white"
              htmlFor="genderFemale"
            >
              Kvinna
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="genderMale"
              value="Man"
              checked={gender === "Man"}
              onChange={(e) => onChangeGender(e)}
            />
            <label className="form-check-label text-white" htmlFor="genderMale">
              Man
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-12">
          <button
            className="btn btn-primary float-right"
            onClick={(e) => onCompleteStepOne(e, 1)}
          >
            Nästa
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepOne;
