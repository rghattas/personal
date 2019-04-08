import React from "react";
import photo from "../../me.png";
import "./Info.css";

const Info = () => {
  return (
    <section className="info">
      <img src={photo} alt="portrait" className="info__portrait" />
      <h1 className="info__name">Hi! I'm Renée.</h1>
      <div className="info__bio">
        <p>
          I'm a senior software engineer at{" "}
          <a href="https://qlik.com" aria-describedby="external-site">
            Qlik
          </a>
          . I'm passionate about web development and creating great user
          experiences. I am a full stack developer but have a preference towards
          all things front-end.
        </p>
        <p>
          In my free time, I enjoy watching movies, cooking, and hanging out
          with my cat&nbsp;
          <a
            href="https://instagram.com/willisthemunchkin"
            aria-describedby="external-site"
          >
            @willisthemunchkin
          </a>
          , You can contact me on social media:&nbsp;
          <a
            href="https://github.com/rghattas"
            aria-describedby="external-site"
          >
            github
          </a>
          ,&nbsp;
          <a href="https://twitter.com/rghat" aria-describedby="external-site">
            twitter
          </a>
          ,&nbsp;
          <a
            href="https://www.linkedin.com/in/renee-ghattas-7815ba31/"
            aria-describedby="external-site"
          >
            linkedin
          </a>
          , or&nbsp;
          <a
            href="https://www.instagram.com/rghat/"
            aria-describedby="external-site"
          >
            instagram
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Info;
