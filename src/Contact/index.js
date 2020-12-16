import React from 'react';

import './Contact.scss';

function Contact(props) {
  const { name, email, address, phone } = props.contact;
  const { city, suite, street } = address;
  return (
    <section className="contact-container">
      <div>{name}</div>
      <table>
        <tbody>
          <tr>
            <td>Address</td>
            <td>
              <span className="info">
                {city} City, {suite} {street}
              </span>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <span>
                <a href={`mailto:${email}`} className="info">
                  {email}
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>
              <a href={`tel:${phone}`} className="info">
                {phone}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Contact;
