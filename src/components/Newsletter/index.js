import React, { useState } from "react";
import Button from "../common/Button";
import styles from "./newsletter.module.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [city, setCity] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const setState = {
    EMAIL: setEmail,
    FNAME: setFirstName,
    CITY: setCity,
  };

  const handleChange = (e) => {
    setErrorMessage("");
    setState[e.target.name](e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !firstName || !city || !acceptTerms) {
      setErrorMessage("Vänligen fyll i alla fält innan du fortsätter");
      return;
    }

    document.getElementById("mc-embedded-subscribe-form").submit();

    if (typeof window !== "undefined") {
      if (window.fbq != null) {
        window.fbq("trackCustom", "SubscribeNewsletter");
      }
    }
  };

  const handleAcceptTerms = (e) => {
    setAcceptTerms(!acceptTerms);
  };

  return (
    <section className={styles.newsletter}>
      <div className="container text-center">
        <div id="mc_embed_signup row">
          <form
            action="https://oscarthroedsson.us7.list-manage.com/subscribe/post?u=e7eb18feebaf6385cc7b85c65&amp;id=2d953b49b1"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div className="col-md-10 col-lg-8 mx-auto">
              <div id="mc_embed_signup_scroll">
                <h2 className={styles.sub}>Är du inte redo än?</h2>
                <h3 className={styles.main}>
                  Fyll i din mail och ta del av tips och få 5 kostprogram
                </h3>
                <p className="text-white">(Till ett värde av 4000 kr)</p>

                <div className="row">
                  <div className="form-group col-md-12">
                    <label htmlFor="mce-EMAIL" className="text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      name="EMAIL"
                      className="form-control"
                      id="mce-EMAIL"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="mce-FNAME" className="text-white">
                      Förnamn
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      name="FNAME"
                      className="form-control"
                      id="mce-FNAME"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="mce-CITY" className="text-white">
                      Stad
                    </label>
                    <input
                      type="text"
                      value={city}
                      name="CITY"
                      className="form-control"
                      id="mce-CITY"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div
                  id="mergeRow-gdpr"
                  className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                >
                  <div className="content__gdpr mt-3 mb-3">
                    <fieldset
                      className="mc_fieldset gdprRequired mc-field-group"
                      name="interestgroup_field"
                    >
                      <label className="checkbox subfield" htmlFor="gdpr_52255">
                        <input
                          type="checkbox"
                          id="gdpr_52255"
                          name="gdpr[52255]"
                          value="Y"
                          checked={acceptTerms}
                          onChange={handleAcceptTerms}
                          className="av-checkbox gdpr"
                          style={{ marginRight: "10px" }}
                        />
                        <span className="text-white">
                          Jag samtycker till att mina personuppgifter hanteras i
                          enlighet med GDPR.
                        </span>
                      </label>
                    </fieldset>
                  </div>
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_e7eb18feebaf6385cc7b85c65_2d953b49b1"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                <div className="clear">
                  <Button
                    text="Prenumerera"
                    name="subscribe"
                    light
                    id="mc-embedded-subscribe"
                    submit
                    onClick={handleSubmit}
                  ></Button>
                </div>
                {errorMessage && (
                  <div className="text-white mt-3">{errorMessage}</div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
