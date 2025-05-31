import React, { useState } from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="contactMe">
        <p className="contactMeHeading">Contact Me</p>
        <table>
          <tr>
            <td>Mobile Number:</td>
            <td>+91 9324131089</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>siddheshbagde123@gmail.com</td>
          </tr>
          <tr>
            <td>GitHub:</td>
            <td><a href="https://github.com/Siddhesh-2005">https://github.com/Siddhesh-2005</a></td>
          </tr>
          <tr>
            <td>Linkedin:</td>
            <td><a href="https://www.linkedin.com/in/siddhesh-bagde-10aa242b2/">https://www.linkedin.com/in/siddhesh-bagde-10aa242b2/</a> </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Contact;
