export default function Image({
  src,
  alt,
  transformations = "w_auto",
  draggable = true,
  loading = "lazy",
  ...other
}) {
  return (
    <img
      decoding="async"
      loading={loading}
      draggable={draggable}
      src={`https://cdn.paarthk.dev/?url=https://res.cloudinary.com/dgo87obt6/image/upload/${transformations}/portfolio-assets/${src}&output=webp`}
      alt={alt}
      {...other}
    />
  );
}
