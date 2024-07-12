import { useEffect, useState } from "preact/hooks";
import Experience from "../Generics/Experience";
export default function DCIS() {
  const [videoObj, setVideoObj] = useState(false);
  useEffect(() => {
    setVideoObj({
      src: "/experience/osn/osn_trailer",
      transformations: "c_crop,g_west,h_1080,w_1080,q_auto,f_auto:video",
    });
  }, []);
  return (
    <Experience
      experienceName={"OSN"}
      htmlId={"osn"}
      link={{
        to: "https://osnplus.com/en-ae",
        ariaLabel: "OSN plus website",
      }}
      hoverImageAlt={"OSN"}
      hoverImageSrc={"/experience/osn/osnplus_logo"}
      hoverVidObj={videoObj}
      textObjectList={[
        {
          title: "About the Company",
          text: "Orbit Showtime Network (OSN) is a Dubai-based satellite TV company that serves the Middle East and North Africa region. They offer a wide range of content, including trending series, award-winning movies, documentaries, and more. You can watch live TV and stream exclusive content on OSN+, which features offerings from giants like HBO, Paramount+, Marvel, and OSN Originals.",
        },
        {
          title: "What I'm Doing There",
          text: "During my time at OSN, I helped make an Image Tagger, that takes an image of the Poster of a TV Show or a Movie and identifies relevant tags for it such as genre, media type, people and objects from the poster. This was done by using a pre-trained AI model from OpenAI (GPT-4o).",
        },
      ]}
    ></Experience>
  );
}
