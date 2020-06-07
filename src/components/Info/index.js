import React from "react";
import photo from "../../images/me.png";
import links from "../../util/links";
import "./Info.css";

const Info = () => {
  const renderLink = ({ url, label }) => (
    <a
      href={url}
      aria-describedby="external-site"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );

  return (
    <section className="info">
      <img src={photo} alt="portrait" className="info__portrait" />
      <h1 className="info__name">Hi! I'm Renée.</h1>
      <div className="info__bio">
        <p>
          {`I'm a senior software engineer at `}
          {renderLink(links.QLIK)}
          {`. I'm passionate about web development and
          creating great user experiences. I am a full stack developer but have
          a preference towards all things front-end.`}
        </p>
        <p>
          I am a co-organizer of the Ottawa React meetup. My goal is to enable
          people in my local community to have a friendly place to come
          together, collaborate and learn new things in the process.
        </p>
        <p>
          {`In my free time, I enjoy watching movies, gaming with friends, making lebanese food and hanging out
          with my cat `}
          {renderLink(links.WILLIS)}
          {`. You can contact me on social media: `}
          {renderLink(links.GITHUB)}
          {`, `}
          {renderLink(links.TWITTER)}
          {`, `}
          {renderLink(links.LINKEDIN)}
          {` or `}
          {renderLink(links.INSTAGRAM)}.
        </p>
      </div>
    </section>
  );
};

export default Info;
