export default function Image({
  src,
  alt,
  transformations = "f_auto,q_auto,w_auto,dpr_auto",
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
