import Image from "next/image";

export default function PlacementCard({
  name,
  role,
  company,
  location,
  flag,
}: {
  name: string;
  role: string;
  company: string;
  location: string;
  flag: string;
}) {
  return (
    <article className="card group p-6 text-center transition-transform hover:-translate-y-1">
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light text-3xl shadow-lg">
        {flag}
      </div>
      <h3 className="section-heading text-lg font-bold text-primary">{name}</h3>
      <p className="mt-1 text-sm font-medium text-accent-dark">{role}</p>
      <p className="mt-2 text-sm text-warm-gray">{company}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary-light">{location}</p>
      <div className="mt-4 h-1 w-12 mx-auto rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
    </article>
  );
}

export function GalleryImageCard({ src, alt, category }: { src: string; alt: string; category: string }) {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="absolute bottom-3 left-3 rounded-lg bg-accent px-3 py-1 text-xs font-semibold capitalize text-primary-dark opacity-0 transition-opacity group-hover:opacity-100">
        {category}
      </span>
    </div>
  );
}
