export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: "kitchen" | "reception" | "bar" | "cruise" | "training";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/hero/1.jpg",
    title: "Kitchen Lab",
    subtitle: "Hands-on culinary training",
    category: "kitchen",
  },
  {
    id: "g2",
    src: "/images/hero/R-1%20(1).jpg",
    title: "Advanced Culinary",
    subtitle: "Practical fine-dining training",
    category: "kitchen",
  },
  {
    id: "g3",
    src: "/images/hero/R-1%20(2).jpg",
    title: "Front Office Training",
    subtitle: "Guest service excellence",
    category: "reception",
  },
  {
    id: "g4",
    src: "/images/hero/R-1%20(3).jpg",
    title: "Mock Bar Practice",
    subtitle: "Mixology & beverage training",
    category: "bar",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?w=900&q=80",
    title: "Cruise Training",
    subtitle: "Global hospitality exposure",
    category: "cruise",
  },
  {
    id: "g6",
    src: "/images/hero/R-1%20(4).jpg",
    title: "Training Sessions",
    subtitle: "Interactive learning environment",
    category: "training",
  },
  {
    id: "g7",
    src: "/images/hero/R-1%20(5).jpg",
    title: "Kitchen Operations",
    subtitle: "Modern commercial kitchens",
    category: "kitchen",
  },
  {
    id: "g8",
    src: "/images/hero/R-1%20(6).jpg",
    title: "Culinary Arts",
    subtitle: "Chef-led practical sessions",
    category: "training",
  },
  {
    id: "g9",
    src: "/images/hero/2.jpg",
    title: "Campus Life",
    subtitle: "Student hospitality experience",
    category: "training",
  },
];

export const globalCareerImages = [
  {
    id: "gc1",
    src: "/images/hero/R-1%20(1).jpg",
    alt: "Culinary training at RITM",
    label: "Kitchen",
  },
  {
    id: "gc2",
    src: "/images/hero/R-1%20(2).jpg",
    alt: "Professional kitchen skills",
    label: "Culinary",
  },
  {
    id: "gc3",
    src: "/images/hero/R-1%20(3).jpg",
    alt: "Chef training program",
    label: "Training",
  },
  {
    id: "gc4",
    src: "/images/hero/R-1%20(4).jpg",
    alt: "Hospitality excellence",
    label: "Service",
  },
  {
    id: "gc5",
    src: "/images/hero/R-1%20(5).jpg",
    alt: "Kitchen operations training",
    label: "Kitchen",
  },
  {
    id: "gc6",
    src: "/images/hero/R-1%20(6).jpg",
    alt: "RITM culinary arts",
    label: "Culinary",
  },
  {
    id: "gc7",
    src: "/images/hero/1.jpg",
    alt: "RITM hospitality training",
    label: "Hospitality",
  },
  {
    id: "gc8",
    src: "/images/hero/2.jpg",
    alt: "RITM campus life",
    label: "Campus",
  },
];
