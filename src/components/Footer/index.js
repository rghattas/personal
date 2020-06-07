import React from "react";
import links from "../../util/links";
import LogoGithub from "react-ionicons/lib/LogoGithub";
import LogoLinkedin from "react-ionicons/lib/LogoLinkedin";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import "./Footer.css";

const images = {
  GITHUB: LogoGithub,
  LINKEDIN: LogoLinkedin,
  TWITTER: LogoTwitter,
  INSTAGRAM: LogoInstagram,
};

const renderLink = (SVG, { url, label }) => (
  <li className="footer__social__link">
    <a href={url} aria-label={label} aria-describedby="external-site">
      <SVG />
    </a>
  </li>
);

const Footer = () => (
  <footer className="footer">
    <ul className="footer__social">
      {renderLink(images.GITHUB, links.GITHUB)}
      {renderLink(images.LINKEDIN, links.LINKEDIN)}
      {renderLink(images.TWITTER, links.TWITTER)}
      {renderLink(images.INSTAGRAM, links.INSTAGRAM)}
    </ul>
    <p className="made-with">
      {`Made with `}
      <span aria-label="love" role="img" className="made-with__love">
        💜
      </span>
      {` by Renée`}
    </p>
  </footer>
);

export default Footer;
