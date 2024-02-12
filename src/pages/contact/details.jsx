import React from 'react';
import "./details.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkedAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
const Details = () => {
    return (  <div className="details">
      <h3>Details of Us</h3>
        <div className="contact-info">
  <div className="card">
  <FontAwesomeIcon icon={faEnvelope} />
    <div className="card-content">
      <h3>Email</h3>
      <span>email@address.com</span>
    </div>
  </div>
  <div className="card">
  <FontAwesomeIcon icon={faPhone} />
    <div className="card-content">
      <h3>Phone Number</h3>
      <span>+00000000000</span>
    </div>
  </div>
  <div className="card">
  <FontAwesomeIcon icon={faMapMarkedAlt} />
    <i className="icon fas fa-map-marker-alt" />
    <div className="card-content">
      <h3>Location</h3>
      <span>United States</span>
    </div>
  </div>
</div>
</div>
     );
}
 
export default Details;