import React from "react";
import "../Css/about.css";
import Me from '../Assets/about.png' 

function About() {
  return (
    <div>
      <section className="about-sec">
        <h1 className="about-heading">ABOUT ME</h1>
        <div className="about-div">
          <div className="about-image">
            <img
            className="about-me"
            src={Me}/>
          </div>
          <div className="about-block">
            <h3>Product design is my forte!😎🤏</h3>
            <p>
              I'm Harshit, skilled as a multidisciplinary designer. Like every
              other Engineer, I'm not doing what I am supposed to do. I love
              exploring new design trends and am often amazed by the progress we
              as a human species have made so far in recent years (apart from
              the headphone-jack part!!). I always used to think that my ideas
              weren’t good enough, but then I realized that if I don’t try it, I
              have no clue how it will turn out. If an idea or a concept doesn’t
              come alive like I imagined, it’s not the end of the world.
            </p>
            <h3>Because with great power, comes great responsibility.🕷️📚📋</h3>
            <p>
              I'm a consumer product designer that specialises in turning
              complicated data into easy and appealing representations.I know
              how to guarantee user demands which are linked with corporate
              goals thanks to my significant expertise working with engineers,
              executives, and marketing teams. I have started reflecting on my
              ideas and thoughts through designs and medium of words recently so
              spelling and grammar mistakes are very often. You can write me
              back if you spot any and don't want to live anymore.
            </p>

            <h4>
              Currently working @
              <h2>
                <a href="https://littleplanet.studio/" target="_blank">
                  LittlePlanet.studio
                </a>
              </h2>
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
