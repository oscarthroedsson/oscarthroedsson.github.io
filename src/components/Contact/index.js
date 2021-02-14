import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import styles from "./contact.module.scss";

const Contact = ({ showPriceInfo, applicationRef }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setState = {
    firstName: setFirstName,
    lastName: setLastName,
    email: setEmail,
    phoneNumber: setPhoneNumber,
    streetAddress: setStreetAddress,
    postalCode: setPostalCode,
    city: setCity,
    acceptTerms: setAcceptTerms,
  };

  const handleChange = (e) => {
    setState[e.target.name](e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !streetAddress ||
      !postalCode ||
      !city ||
      !phoneNumber
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
    formData.append("entry.1378902402", phoneNumber);

    fetch(
      "https://docs.google.com/forms/u/5/d/e/1FAIpQLSeEiKVe8tPSZc7JseRlJ6m1y6gYVHPKdiUDhZ-iPZIYziXjJQ/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    ).then(() => {
      setSubmitted(true);
      if (typeof window !== "undefined") {
        if (window.fbq != null) {
          window.fbq("track", "Purchase", {
            value: 0.0,
            currency: "SEK",
          });
        }
      }
    });
  };
  return (
    <section ref={applicationRef} id="anmalan" className={styles.signup}>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <h2 className="text-white mb-5">Anmälan</h2>
            <div className={styles.info}>
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
            {!submitted && (
              <form>
                <div className="row">
                  <div className="form-group col-md-6">
                    <Input
                      type="text"
                      label="Förnamn"
                      name="firstName"
                      value={firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <Input
                      type="text"
                      label="Efternamn"
                      name="lastName"
                      value={lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <Input
                      type="email"
                      label="Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <Input
                      type="phone"
                      label="Telefonnummer"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <Input
                      type="text"
                      label="Address"
                      name="streetAddress"
                      value={streetAddress}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <Input
                      type="phone"
                      label="Postnummer"
                      name="postalCode"
                      value={postalCode}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-8">
                    <Input
                      type="text"
                      label="Stad"
                      name="city"
                      value={city}
                      onChange={handleChange}
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
                        name="acceptTerms"
                        onChange={(e) => handleChange(e)}
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="acceptTerms"
                      >
                        Jag förstår att denna ansökan är bindande när jag har
                        blivit tilldelad en profil och ett träningsprogram (ev:
                        kostprogram). Läs mer om{" "}
                        <a
                          href="/kopesavtal.pdf"
                          target="_blank"
                          className={styles.agreement}
                        >
                          köpesavtalet
                        </a>
                        .
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 text-left text-white">
                  <p>
                    Har du inte blivit tilldelad en profil eller träningsprogram
                    kan du ångra din ansökan inom 14 dagar.
                  </p>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <Button onClick={handleSubmit} text="Let's go!" />
                  </div>
                </div>
                {errorMessage && <p className="text-white">{errorMessage}</p>}
              </form>
            )}
            {submitted && (
              <h3 className="text-white">Tack för din intresseanmälan.</h3>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
