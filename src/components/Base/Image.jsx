export default function Image({
  src,
  alt,
  transformations = "f_webp",
  ...other
}) {
  return (
    <img
      src={`https://res.cloudinary.com/do5pfqw8l/image/upload/${transformations}/v1688023317/assets/${src}`}
      alt={alt}
      {...other}
    />
  );
}
