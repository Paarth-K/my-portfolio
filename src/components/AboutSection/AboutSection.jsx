import Styles from "./AboutSection.module.scss";
import ClickyImage from "../Base/ClickyImage.jsx";

export default function AboutSection(props) {
  const aboutMeText = [
    {
      title: "Who am I?",
      text: "Hi! As you already know, my name is Paarth. I was born in India, and I'm currently 15 years old, studying at Dover Court International School in Singapore. I consider myself a tech enthusiast with a special interest in web development and data science.",
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
                <ClickyImage
                  alt="An image of Paarth Kukreja"
                  src="/home/me_pic.png"
                ></ClickyImage>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
