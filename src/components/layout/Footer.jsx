import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Point</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @Burger Point</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://github.com/Abhishek12589">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-hinduja-48ba051b7/">
          <AiFillLinkedin />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
