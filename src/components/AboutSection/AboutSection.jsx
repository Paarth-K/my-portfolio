import Styles from "./AboutSection.module.scss";
import Image from "../Base/Image";

export default function AboutSection(props) {
  const aboutMeText = [
    {
      title: "Who am I?",
      text: "Hi! as you already know, my name is Paarth. I'm 15 years old, and study at Dover Court International School and live in Singapore. I consider myself to be a tech enthusiast with special interest in web development and data science.",
    },
    {
      title: "What do I know?",
      text: "I know front-end frameworks like React.js, Vue.js, and Astro (this portfolio is built on all 3 of them), and Full stack frameworks like Next.js and Nuxt3.js. Other than that I also know Machine Learning and Data Science with Python.",
    },
  ];
  return (
    <div className={Styles.main}>
      <div className={Styles.about} id="about">
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
                <Image
                  src="/home/me_pic.png"
                  alt="An Image of Me"
                  className={Styles.meImg}
                ></Image>
                <div className={Styles.meImgShadow}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
