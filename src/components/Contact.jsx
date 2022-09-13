import Button from "./Button";
import social from "../data/social.js";

export default function Contact({ content, refProperty }) {
  return (
    <section className="section-container contact-section" ref={refProperty}>
      <h2 className="section-title">{content.title}</h2>
      <p className="contact-text">{content.paragraph}</p>
      <p className="mail">Mail: shailesh.webdevelopment@gmail.com</p>
      <p className="mail">Ph No.: +918828797790</p>
      <Button
        value={content.button}
        type="solid"
        link="mailto:shailesh.webdevelopment@gmail.com"
      />
      <div className="all-social-links">
        {social.map((s) => (
          <a href={s.link} target="_blank" rel="noreferrer">
            <img className="media-img" alt={s.name} src={s.img}></img>
          </a>
        ))}
      </div>
    </section>
  );
}
