import React from "react";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import "./Footer.css";

const images = {
  GITHUB: {
    SVG: LogoGithub,
    label: "github",
    url: "https://github.com/rghattas"
  },
  LINKEDIN: {
    SVG: LogoLinkedin,
    label: "linkedin",
    url: "https://www.linkedin.com/in/renee-ghattas-7815ba31/"
  },
  TWITTER: {
    SVG: LogoTwitter,
    label: "twitter",
    url: "https://twitter.com/rghat"
  },
  INSTAGRAM: {
    SVG: LogoInstagram,
    label: "instagram",
    url: "https://www.instagram.com/rghat/"
  }
};

const renderLink = ({ SVG, label, url }) => (
  <li className="footer__social__link">
    <a href={url} aria-label={label} aria-describedby="external-site">
      <SVG />
    </a>
  </li>
);

const Footer = () => (
  <footer className="footer">
    <ul className="footer__social">
      {renderLink(images.GITHUB)}
      {renderLink(images.LINKEDIN)}
      {renderLink(images.TWITTER)}
      {renderLink(images.INSTAGRAM)}
    </ul>
    <p className="made-with">
      Made with&nbsp;
      <span aria-label="love" role="img">
        💜
      </span>
      by Renée
    </p>
  </footer>
);

export default Footer;
