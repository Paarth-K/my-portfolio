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
          text: "North London Collegiate School (NLCS) is an international British school in Dubai with ~1800 students. It is part of the North London Collegiate School Family of Schools. Teaching the MYP curriculum until Grade 10, and IB DP post Grade 10.",
        },
        {
          title: "My Experience",
          text: "NLCS is by far the best school I've been to. Being reputed as one of the best schools in the region, it definitely holds up to its name as an NLCS School. I've made many great friends and enjoy the enriching and challenging atmosphere of the school. I'm currently pursuing the   International Baccalaureate Diploma and have taken Mathematics (AA HL), Computer Science (HL), Physics (HL), French (Ab Initio), Economics (SL), and English (Language & Literature SL) as my subject choices. Before Sixth Form,  adapting to the new IB MYP Curriculum from IGCSE had been slightly challenging, but I've managed to persevere through that and perform well during the examinations.",
        },
      ]}
    ></School>
  );
}
