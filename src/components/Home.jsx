import Button from "./Button.jsx";
import launch from "../img/launch.svg";
import scroll from "../img/scroll-down.svg";

export default function Home({ content, refProperty }) {
  return (
    <>
      <section className="home-section" ref={refProperty}>
        <div className="home-left">
          <div className="home-hi">
            <p>{content.hi}</p>
            <h1>Shailesh Sampat</h1>
            <p>{content.job}</p>
          </div>
          <div>
            <Button
              value={content.button}
              type="solid"
              link="mailto:shailesh.webdevelopment@gmail.com"
            />
          </div>
        </div>
        <img src={launch} alt="Spaceship"></img>
      </section>
      <div className="scroll-down">
        <img src={scroll} alt="Scroll down"></img>
      </div>
    </>
  );
}
