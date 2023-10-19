import Styles from "./AboutSection.module.scss";
import ClickyMedia from "../Base/ClickyMedia.jsx";
import { useEffect, useState } from "preact/hooks";

export default function AboutSection(props) {
  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const [age, setAge] = useState("[age]");
  useEffect(() => {
    setAge(calculate_age(new Date("10/03/2007")));
  }, []);
  const aboutMeText = [
    {
      title: "Who am I?",
      text: `Hi! As you already know, my name is Paarth. I was born in India and I'm ${age} years old, I currently study at North London Collegiate School in Dubai. I consider myself to be a tech enthusiast with a special interest in web development and data science.`,
    },
    {
      title: "What do I know?",
      text: "I'm familiar with front-end frameworks such as React.js, Vue.js, and Astro (this portfolio is built using all three of them). Additionally, I have experience with full-stack frameworks like Next.js and Nuxt3.js. Apart from web development, I also have a keen interest in Python-based machine learning and data science.",
    },
  ];
  return (
    <div className={Styles.main} id="about">
      <div className={Styles.about}>
        <div className={Styles.aboutGrid}>
          <div className={Styles.aboutTitle}>
            <span>A bit about me</span>
          </div>
          <div className={Styles.aboutContent}>
            <div className={Styles.aboutContentGrid}>
              <div className={Styles.meDesc}>
                {aboutMeText.map((aboutMeData, index) => {
                  return (
                    <div key={index}>
                      <p className={Styles.meDescTitle}>{aboutMeData.title}</p>
                      <p className={Styles.meDescText}>{aboutMeData.text}</p>
                    </div>
                  );
                })}
              </div>
              <div className={Styles.meImgContainer}>
                <ClickyMedia
                  alt="An image of Paarth Kukreja"
                  src="/about/me_pic"
                ></ClickyMedia>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
