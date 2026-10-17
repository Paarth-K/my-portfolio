import { useEffect, useState } from "preact/hooks";
import Experience from "../Generics/Experience";
export default function TH() {
  const [videoObj, setVideoObj] = useState(false);
  useEffect(() => {
    setVideoObj({
      src: "/experience/th/th_hover_vid",
    });
  }, []);
  return (
    <Experience
      experienceName={"Thinking Huts"}
      htmlId={"thinking-huts"}
      link={{
        to: "https://www.thinkinghuts.org/",
        ariaLabel: "Thinking Huts website",
      }}
      hoverImageAlt={"Thinking Huts"}
      hoverImageSrc={"/experience/th/thinking_huts_w_text.png"}
      hoverVidObj={videoObj}
      textObjectList={[
        {
          title: "About the Non-Profit",
          text: "Thinking Huts is an American non-profit organisation that uses innovative 3D printing technology to construct schools in lower-income countries, closing the global education gap. Their mission also includes creating local jobs and promoting sustainable construction methods.",
        },
        {
          title: "What I'm Doing There",
          text: "Currently, I'm redesigning their website's landing page to be more captivating to potential donors and encourage them to donate. I've also helped integrate a CRM (HubSpot) to help better market and communicate with our donors.",
        },
      ]}
    ></Experience>
  );
}
