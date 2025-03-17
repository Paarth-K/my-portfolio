export default function Image({
  src,
  alt,
  transformations = "f_auto:image,q_auto,w_auto",
  draggable = true,
  ...other
}) {
  return (
    <img
      decoding="async"
      // loading="lazy"
      draggable={draggable}
      src={`//wsrv.nl/?url=https://res.cloudinary.com/dgo87obt6/image/upload/${transformations}/portfolio-assets/${src}&il&af`}
      alt={alt}
      {...other}
    />
  );
}
