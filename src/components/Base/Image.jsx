export default function Image({
  src,
  alt,
  transformations = "f_auto:image,q_auto,w_auto",
  draggable = true,
  ...other
}) {
  return (
    <img
      draggable={draggable}
      src={`//wsrv.nl/?url=https://res.cloudinary.com/do5pfqw8l/image/upload/${transformations}/assets/${src}`}
      alt={alt}
      {...other}
    />
  );
}
