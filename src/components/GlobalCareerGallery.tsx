import Image from "next/image";

interface GlobalCareerImage {
  id: string;
  src: string;
  alt: string;
  label: string;
}

export default function GlobalCareerGallery({ images }: { images: GlobalCareerImage[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
      {images.map((image) => (
        <div key={image.id} className="group relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="absolute bottom-2 left-2 rounded-md bg-accent px-2 py-0.5 text-xs font-semibold text-primary-dark opacity-0 transition-opacity group-hover:opacity-100">
            {image.label}
          </span>
        </div>
      ))}
    </div>
  );
}
