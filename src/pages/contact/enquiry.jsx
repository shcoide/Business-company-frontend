import React from "react";
import "./enquiry.css";

const Enquiry = () => {
  const checkValidations = () => {
    // Add your validation logic here
    console.log("Submit button clicked");
  };

  const resetForm = () => {
    // Add your reset logic here
    console.log("Reset button clicked");
  };

  return (
    <div className="contain" id="enquiry">
      <div className="wrapper">
        <div className="form">
          <h4>GET IN TOUCH</h4>
          <h2 className="form-headline"> Business Enquiry</h2>
          <form id="submit-form" action="">
            <p className="a">
              <input
                id="name"
                className="form-input"
                type="text"
                placeholder="Your Name*"
              />
              <small className="name-error" />
            </p>
            <p className="a">
              <input
                id="email"
                className="form-input"
                type="email"
                placeholder="Your Email*"
              />
              <small className="name-error" />
            </p>
            <p className="full-width">
              <input
                id="company-name"
                className="form-input"
                type="text"
                placeholder="Company Name*"
                required=""
              />
              <small />
            </p>
            <p className="full-width">
              <textarea
                minLength={20}
                id="message"
                cols={30}
                rows={7}
                placeholder="Your Message*"
                required=""
                defaultValue={""}
              />
              <small />
            </p>
            <p className="full-width">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                defaultChecked=""
              />{" "}
              Yes, I would like to receive communications by call / email about
              Company's services.
            </p>
            <p className="full-width btns">
              <input
                type="submit"
                className="submit-btn"
                value="Submit"
                onClick={checkValidations}
              />
              <button className="reset-btn" onClick={resetForm}>
                Reset
              </button>
            </p>
          </form>
        </div>
        {/* <div className="contacts contact-wrapper">
          <ul>
            <li>
              We've driven online revenues of over{" "}
              <span className="highlight-text-grey">$2 billion</span> for our
              clients. Ready to know how we can help you?
            </li>
            <span className="hightlight-contact-info">
              <li className="email-info">
                <i className="fa fa-envelope" aria-hidden="true" /> info@demo.com
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true" />{" "}
                <span className="highlight-text">+91 11 1111 2900</span>
              </li>
            </span>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Enquiry;
