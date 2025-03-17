export default function Video({ src, transformations = "", ...other }) {
  let CDNSrc = `https://res.cloudinary.com/dgo87obt6/video/upload/${transformations}/portfolio-assets/${src}`;
  return (
    <video
      style={{ width: "inherit", height: "inherit", borderRadius: "inherit" }}
      {...other}
      src={CDNSrc}
    ></video>
  );
}
