import { useEffect, useState } from "preact/hooks";
import School from "../Generics/School";
export default function NLCS() {
  const [videoObj, setVideoObj] = useState(false);
  useEffect(() => {
    setVideoObj({
      src: "/education/NLCS-Video",
      transformations: "c_crop,g_west,h_1080,w_1080,x_250,q_auto,f_auto:video",
    });
  }, []);
  return (
    <School
      schoolName={"NLCS"}
      htmlId={"nlcs"}
      link={{
        to: "https://nlcsdubai.ae",
        ariaLabel: "North London Collegiate School",
      }}
      hoverImageAlt={"North London Collegiate School"}
      hoverImageSrc={"/education/NLCS-Image"}
      hoverVidObj={videoObj}
      textObjectList={[
        {
          title: "About the School",
          text: "North London Collegiate School (NLCS) is an International British School with ~1100 students, it is part of the North London Collegiate School Family of Schools. Teaching the MYP Curriculum until Grade 10, and IB DP post Grade 10.",
        },
        {
          title: "My Experience",
          text: "Being new to NLCS, I have no complaints. Although adapting to the new MYP Curriculum from IGCSE has been slightly challenging, I've been persevering through the challenges anyway. I have made a couple of great friends, and enjoy the enriching atmosphere of the school. I study subjects like Design, Geography, French, All Sciences, Maths and English. I hope my experience will be as educating and enjoying as my last school!",
        },
      ]}
    ></School>
  );
}
