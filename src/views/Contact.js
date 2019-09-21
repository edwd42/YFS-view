// make a box with red at the top and white at bottom with 1px border
import React from "react";
// import "../assets/contact.css";

const top = {
  width: "398px",
  height: "80px",
  backgroundColor: "red",
  padding: "10px 10px 10px 10px",
  fontSize: "24px"
};

const bottom = {
  width: "398px",
  height: "160px",
  backgroundColor: "white",
  padding: "10px"
};

const container = {
  border: "1px solid #000",
  width: "400px"
};

const Contact = () => (
  <div style={container}>
    <div style={top}>
      <span>Edward Dupre</span>
      <br />
      <span>Software Developer</span>
      <br />
    </div>
    <div style={bottom}>
      <span>Cell Phone: 401-497-6933</span>
      <br />
      <span>
        Email:
        <a href="edward.dupre@edwd42.com">edward.dupre@edwd42.com</a>
      </span>
      <br />
      <span>
        Twitter:
        <a href="@edwd42" target="_blank" rel="noopener noreferrer">
          @edwd42
        </a>
      </span>
      <br />
      <span>
        GitHub:
        <a
          href="https://github.com/edwd42"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/edwd42
        </a>
      </span>
      <br />
      <span>
        LinkedIn:
        <a
          href="www.linkedin.com/edwd42"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.linkedin.com/edwd42
        </a>
      </span>
      <br />
      <span>
        Web:
        <a href="https://edwd42.com" target="_blank" rel="noopener noreferrer">
          https://edwd42.com
        </a>
      </span>
      <br />
    </div>
  </div>
);

export default Contact;
