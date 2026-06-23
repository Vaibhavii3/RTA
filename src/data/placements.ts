export interface Placement {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  flag: string;
  bgImage: string;
}

export const placements: Placement[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    role: "Front Office Associate",
    company: "Taj Exotica Resort",
    location: "Maldives",
    flag: "🇲🇻",
    bgImage: "/images/opp/maldives.jpg",
  },
  {
    id: "2",
    name: "Priya Negi",
    role: "Food & Beverage Service",
    company: "Jumeirah Beach Hotel",
    location: "Dubai, UAE",
    flag: "🇦🇪",
    bgImage: "/images/opp/dubai.jpg",
  },
  {
    id: "3",
    name: "Amit Rawat",
    role: "Commis Chef",
    company: "Marriott International",
    location: "Kuwait",
    flag: "🇰🇼",
    bgImage: "/images/hero/R-1%20(3).jpg",
  },
  {
    id: "4",
    name: "Sneha Bisht",
    role: "Guest Relations Executive",
    company: "Hilton Garden Inn",
    location: "London, UK",
    flag: "🇬🇧",
    bgImage: "/images/opp/europe.jpg",
  },
  {
    id: "5",
    name: "Vikram Singh",
    role: "Bar Supervisor",
    company: "Royal Caribbean Cruises",
    location: "International Waters",
    flag: "🚢",
    bgImage: "/images/opp/cruise.jpg",
  },
  {
    id: "6",
    name: "Anjali Joshi",
    role: "Housekeeping Supervisor",
    company: "ITC Grand Bharat",
    location: "India",
    flag: "🇮🇳",
    bgImage: "/images/hero/R-1%20(1).jpg",
  },
  {
    id: "7",
    name: "Karan Mehra",
    role: "Restaurant Captain",
    company: "Oberoi Hotels",
    location: "Switzerland",
    flag: "🇨🇭",
    bgImage: "/images/opp/bartender.jpg",
  },
  {
    id: "8",
    name: "Divya Pant",
    role: "Barista Lead",
    company: "Starbucks Reserve",
    location: "Singapore",
    flag: "🇸🇬",
    bgImage: "/images/opp/barista.jpg",
  },
];
