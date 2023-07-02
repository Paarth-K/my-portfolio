export default function Image({ src, alt, format = "f_webp", ...other }) {
  return (
    <img
      src={`https://res.cloudinary.com/do5pfqw8l/image/upload/${format}/v1688023317/assets/${src}`}
      alt={alt}
      {...other}
    />
  );
}
