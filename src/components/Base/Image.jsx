import { ASSET_BASE } from "./assets.js";

// Originals live in the R2 bucket and are resized and converted on the fly by
// the wsrv.nl proxy at cdn.paarthk.dev. `transformations` is a wsrv.nl query
// string, e.g. "w=1500".
export default function Image({
  src,
  alt,
  transformations = "",
  draggable = true,
  loading = "lazy",
  ...other
}) {
  const file = `${ASSET_BASE}/images/${src.replace(/^\/+/, "")}`;
  const cdnSrc = `https://cdn.paarthk.dev/?${[`url=${file}`, transformations, "output=webp"]
    .filter(Boolean)
    .join("&")}`;
  return (
    <img
      decoding="async"
      loading={loading}
      draggable={draggable}
      src={cdnSrc}
      alt={alt}
      {...other}
    />
  );
}
