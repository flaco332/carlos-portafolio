// Official artwork is served locally. Unlike a cross-origin iframe, the image's
// spacing and background can be styled without changing Credly's content.
export default function CredlyBadge({ imageFile, title }: { imageFile: string; title: string }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}badges/${imageFile}`}
      alt={`${title} — official Google Cloud badge`}
      width="600"
      height="600"
      loading="lazy"
      decoding="async"
      className="h-full w-full object-contain"
    />
  );
}
