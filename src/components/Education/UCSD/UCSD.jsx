import { useEffect, useState } from "preact/hooks";
import School from "../Generics/School";
export default function UCSD() {
  const [videoObj, setVideoObj] = useState(false);
  useEffect(() => {
    setVideoObj({
      src: "/education/UCSD-Video",
    });
  }, []);
  return (
    <School
      schoolName={"UCSD"}
      htmlId={"ucsd"}
      link={{
        to: "https://ucsd.edu",
        ariaLabel: "University of California, San Diego",
      }}
      hoverImageAlt={"University of California, San Diego"}
      hoverImageSrc={"/education/UCSD-Image.png"}
      hoverVidObj={videoObj}
      textObjectList={[
        {
          title: "About the University",
          text: "The University of California, San Diego (UCSD) is a public research university in La Jolla, California, and one of the ten campuses of the University of California. Founded in 1960, it has over 40,000 students and is known for its research output, with the Jacobs School of Engineering and the Department of Computer Science and Engineering ranked among the best in the country.",
        },
        {
          title: "My Experience",
          text: "I started my Computer Science degree at UCSD in September 2026, so this chapter is only just beginning! Moving across the world for university has been a big change, but the campus, the people, and the pace of everything here have made it an easy place to settle into. I'm looking forward to the coursework, the research opportunities, and finding the clubs and projects that will shape the next few years.",
        },
      ]}
    ></School>
  );
}
