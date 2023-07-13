export default function Video({ src, transformations = "", ...other }) {
  let CDNSrc = `https://res.cloudinary.com/do5pfqw8l/video/upload/${transformations}/assets/${src}`;
  https: return (
    <video
      style={{ width: "inherit", height: "inherit", borderRadius: "inherit" }}
      {...other}
      src={CDNSrc}
    ></video>
  );
}
