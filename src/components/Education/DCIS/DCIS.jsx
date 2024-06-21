import { useEffect, useState } from "preact/hooks";
import School from "../Generics/School";
export default function DCIS() {
  const [videoObj, setVideoObj] = useState(false);
  useEffect(() => {
    setVideoObj({
      src: "/education/DCIS-Video",
      transformations: "c_crop,g_west,h_720,w_720,x_200,q_auto,f_auto:video",
    });
  }, []);
  return (
    <School
      schoolName={"DCIS"}
      htmlId={"dcis"}
      link={{
        to: "https://nordangliaeducation.com/dcis-singapore",
        ariaLabel: "Dover Court International School",
      }}
      hoverImageAlt={"Dover Court International School"}
      hoverImageSrc={"/education/DCIS-Image"}
      hoverVidObj={videoObj}
      textObjectList={[
        {
          title: "About the School",
          text: "Dover Court International School (DCIS) is an International British School with ~1800 students, it is part of the Nord Anglia Family of Schools. Teaching the iGCSE Curriculum until Year 11, and IB DP post Year 11.",
        },
        {
          title: "My Experience",
          text: "From Year 2 to Year 10, I've been in DCIS and my time there has been amazing! Over the years, I made many friends and studied subjects such as Computer Science, Business Studies, Maths, English, Design and Technology, All Sciences, and Global Citizenship. Unfortunately, I couldn't finish Year 11 in this school as we had to relocate to Dubai. Nonetheless, this school has given me vital knowledge and helped me become who I am today!",
        },
      ]}
    ></School>
  );
}
