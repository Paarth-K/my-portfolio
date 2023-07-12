export default function Image({
  src,
  alt,
  transformations = "f_webp",
  ...other
}) {
  return (
    <img
      src={`https://res.cloudinary.com/do5pfqw8l/image/upload/${transformations}/assets/${src}`}
      alt={alt}
      {...other}
    />
  );
}
