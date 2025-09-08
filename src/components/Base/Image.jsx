export default function Image({
  src,
  alt,
  transformations = "w_auto",
  draggable = true,
  ...other
}) {
  return (
    <img
      decoding="async"
      // loading="lazy"
      draggable={draggable}
      src={`https://cdn.paarthkukreja.com/?url=https://res.cloudinary.com/dgo87obt6/image/upload/${transformations}/portfolio-assets/${src}&output=webp`}
      alt={alt}
      {...other}
    />
  );
}
