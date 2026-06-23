export type CourseIcon = "hospitality" | "global" | "hotel" | "certificate" | "barista" | "bartender";

export interface Course {
  id: string;
  title: string;
  eligibility: string;
  duration: string;
  description: string;
  highlight?: string;
  image: string;
  imageAlt: string;
  icon: CourseIcon;
}

export const courses: Course[] = [
  {
    id: "advanced-diploma-hospitality-personality",
    title: "Advanced Diploma in Hospitality & Personality Development",
    eligibility: "10th Pass",
    duration: "18 Months",
    description:
      "Our program begins with a 6-month foundational period covering all departments, combined with practical training, personality development, and English language coaching. Following this, students transition into specialized theoretical and practical training based on their chosen department. We proudly offer 100% placement support upon completion.",
    highlight: "100% Placement Support",
    image: "/images/hero/R-1%20(1).jpg",
    imageAlt: "Hospitality and personality development training at RITM",
    icon: "hospitality",
  },
  {
    id: "advanced-diploma-international-hospitality",
    title: "Advanced Diploma in International Hospitality",
    eligibility: "10th Pass",
    duration: "18 Months",
    description:
      "Our program starts with 6 months of foundational multi-departmental training, practicals, and English-focused personality development, followed by advanced departmental specialization. We offer 100% placement and the unique opportunity to apply for overseas Job Training (JT), with travel and training costs calculated at actuals during the program.",
    highlight: "Overseas Job Training Opportunity",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80",
    imageAlt: "International hospitality training at RITM",
    icon: "global",
  },
  {
    id: "diploma-hotel-management",
    title: "Diploma in Hotel Management",
    eligibility: "10th Pass",
    duration: "12 Months",
    description:
      "Our program is a fast-track, cost-effective program that bypasses years of university to get you job-ready in just one year. It delivers intense, practical training in core hotel operations alongside vital English communication and personality grooming. With built-in industry internships, it serves as an immediate launchpad for high-demand, global careers in luxury resorts, cruise lines, and fine dining.",
    highlight: "Fast-Track to Global Careers",
    image: "https://images.unsplash.com/photo-1566073770669-52b34306321c?w=900&q=80",
    imageAlt: "Hotel management and front office training",
    icon: "hotel",
  },
  {
    id: "certificate-hotel-management",
    title: "Certificate in Hotel Management",
    eligibility: "10th Pass",
    duration: "09 Months",
    description:
      "This program is an ultimate fast-track program designed to build core operational skills and secure immediate employment. It blends intense practical training in kitchen, service, and front-office duties with essential grooming and English communication skills. With zero academic filler, it gets you job-ready rapidly, providing a direct and affordable gateway to careers in restaurants, cruise lines, and luxury resorts.",
    highlight: "Immediate Employment Focus",
    image: "/images/hero/R-1%20(4).jpg",
    imageAlt: "Certificate in hotel management practical training",
    icon: "certificate",
  },
  {
    id: "professional-barista",
    title: "Professional Barista Certification Program",
    eligibility: "10th Pass",
    duration: "45 Days",
    description:
      "The program delivers rapid, highly focused technical training that transforms coffee passion into a lucrative, globally recognized career. In just a short time, you master espresso mechanics, milk texturing, latte art, and high-volume café management alongside crucial customer service and English communication skills. It serves as an immediate pathway to high-paying jobs in premium coffee chains, luxury hotels, cruise lines, and international hospitality venues worldwide.",
    highlight: "100% Placement Guaranteed",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80",
    imageAlt: "Professional barista certification training",
    icon: "barista",
  },
  {
    id: "international-bartender",
    title: "Certification in International Bartender Course",
    eligibility: "10th Pass",
    duration: "6 Months",
    description:
      "The Course provides rapid, intensive practical training in mixology, flair bartending, and beverage management to launch a dynamic global career. It equips you with precise recipe mastery, speed, and polished English communication skills to excel under pressure in fast-paced environments. This qualification serves as an immediate gateway to high-earning, high-demand positions in luxury resorts, premium nightclubs, and international cruise lines worldwide.",
    highlight: "Global Bartending Career",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=900&q=80",
    imageAlt: "International bartender course training",
    icon: "bartender",
  },
];
