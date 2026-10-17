import { ASSET_BASE } from "./assets.js";

// Hover videos are served straight from the R2 bucket. Both encodings are
// Cloudinary's optimised derivations downloaded once: VP9 WebM where the
// browser can decode it, H.264 MP4 everywhere else.
export default function Video({ src, ...other }) {
  const base = `${ASSET_BASE}/videos/${src.replace(/^\/+/, "")}`;
  return (
    <video
      style={{
        width: "inherit",
        height: "inherit",
        borderRadius: "inherit",
        objectFit: "cover",
      }}
      {...other}
    >
      <source src={`${base}.webm`} type='video/webm; codecs="vp9"' />
      <source src={`${base}.mp4`} type="video/mp4" />
    </video>
  );
}
