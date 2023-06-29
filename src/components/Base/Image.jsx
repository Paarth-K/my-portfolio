export default function Image({ src, alt, ...other }) {
  return (
    <img
      src={`https://res.cloudinary.com/do5pfqw8l/image/upload/v1688023317/assets/${src}`}
      alt={alt}
      {...other}
    />
  );
}
