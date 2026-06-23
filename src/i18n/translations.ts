export type Locale = "en" | "hi";

export interface CourseTranslation {
  title: string;
  eligibility: string;
  duration: string;
  description: string;
  highlight?: string;
  features: string[];
  careerPaths: string;
}

export interface Translations {
  institute: {
    name: string;
    nameLine1: string;
    nameLine2: string;
    affiliation: string;
    address: string;
  };
  nav: {
    home: string;
    courses: string;
    placements: string;
    gallery: string;
    contact: string;
    applyNextIntake: string;
  };
  welcome: {
    title: string;
    subtitle: string;
    english: string;
    hindi: string;
  };
  common: {
    program: string;
    enquireNow: string;
    allRightsReserved: string;
    toggleMenu: string;
    chatWhatsApp: string;
    phone: string;
    email: string;
    address: string;
    quickLinks: string;
    getInTouch: string;
    submitInquiry: string;
    thankYou: string;
    inquiryReceived: string;
    optional: string;
  };
  home: {
    badge: string;
    heroLine1: string;
    heroLine2: string;
    heroGetInfo: string;
    heroApplyIntake: string;
    heroTitle: string;
    heroPara1: string;
    heroPara2: string;
    exploreCourses: string;
    statPlacement: string;
    statPrograms: string;
    statCareer: string;
    whyChoose: string;
    whyChooseItems: string[];
    ourPrograms: string;
    coursesTitle: string;
    coursesSubtitle: string;
    viewAllCourses: string;
    worldwide: string;
    globalCareerTitle: string;
    globalCareerDesc: string;
    photoNote: string;
    photoNoteBold: string;
    ctaTitle: string;
    ctaDesc: string;
    seePlacements: string;
    studentAlt1: string;
    studentAlt2: string;
    studentAlt3: string;
  };
  inquiry: {
    title: string;
    subtitle: string;
    fullName: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    courseInterest: string;
    selectCourse: string;
    message: string;
    messagePlaceholder: string;
  };
  courses: {
    pageBadge: string;
    pageTitle: string;
    pageSubtitle: string;
    heroLine1: string;
    heroLine2: string;
    heroSubtitle: string;
    heroPillars: string[];
    explorePrograms: string;
    promoTitle: string;
    promoDesc: string;
    sectionTitle: string;
    viewDetails: string;
    closeDetails: string;
    featureBar: { title: string; desc: string }[];
    careerPathsLabel: string;
    notSureTitle: string;
    notSureDesc: string;
    freeCounseling: string;
    items: Record<string, CourseTranslation>;
  };
  placements: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    title: string;
    subtitle: string;
    exploreSuccess: string;
    alumniProud: string;
    alumniNetwork: string;
    viewMoreAlumni: string;
    statPlacement: string;
    statCountries: string;
    statAlumni: string;
    statHotels: string;
    successTitle: string;
    successDesc: string;
    students: Record<string, { name: string; role: string; company: string; location: string }>;
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    allPhotos: string;
    categories: Record<string, string>;
    shareNote: string;
    shareNoteBold: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    mapTitle: string;
  };
  courseOptions: Record<string, string>;
}

export const translations: Record<Locale, Translations> = {
  en: {
    institute: {
      name: "Raboche Institute of Technology & Management",
      nameLine1: "Raboche Institute of",
      nameLine2: "Technology & Management",
      affiliation: "Affiliation details will be updated shortly.",
      address: "Uttarakhand, India",
    },
    nav: {
      home: "Home",
      courses: "Courses",
      placements: "Placements",
      gallery: "Gallery",
      contact: "Contact Us",
      applyNextIntake: "Apply for Next Intake",
    },
    welcome: {
      title: "Select Language",
      subtitle: "Please choose your preferred language.",
      english: "English",
      hindi: "हिन्दी",
    },
    common: {
      program: "Program",
      enquireNow: "Enquire Now",
      allRightsReserved: "All rights reserved.",
      toggleMenu: "Toggle menu",
      chatWhatsApp: "Chat on WhatsApp",
      phone: "Phone",
      email: "Email",
      address: "Address",
      quickLinks: "Quick Links",
      getInTouch: "Get in Touch",
      submitInquiry: "Submit Inquiry",
      thankYou: "Thank You!",
      inquiryReceived: "We've received your inquiry. Our team will contact you shortly.",
      optional: "Optional",
    },
    home: {
      badge: "Admissions Open — Next Intake",
      heroLine1: "Hospitality is your",
      heroLine2: "Career.",
      heroGetInfo: "Get Information",
      heroApplyIntake: "Apply for June Intake",
      heroTitle: "Shape Your Global Hospitality Career",
      heroPara1:
        "From intensive diplomas to fast-track certifications, our curriculum blends hands-on lab training, international hospitality standards, and mandatory internships to ensure you graduate job-ready from day one.",
      heroPara2:
        "Our curriculum ranges from Department-Specific Certificate Programs to Specialization Diplomas.",
      exploreCourses: "Explore Courses",
      statPlacement: "Placement Support",
      statPrograms: "Programs",
      statCareer: "Career Paths",
      whyChoose: "Why Choose RITM?",
      whyChooseItems: [
        "Hands-on practical lab training",
        "International hospitality standards",
        "Mandatory industry internships",
        "Personality & English development",
        "100% placement assistance",
        "Overseas job training opportunities",
      ],
      ourPrograms: "Our Programs",
      coursesTitle: "Courses",
      coursesSubtitle:
        "From 45-day barista certifications to 18-month advanced diplomas — find the program that launches your hospitality career.",
      viewAllCourses: "View All Courses",
      worldwide: "Worldwide",
      globalCareerTitle: "Global Career Opportunities",
      globalCareerDesc:
        "At Raboche Institute of Technology & Management, we bridge the gap between regional talent and global demand. Our curriculum is purposefully engineered to meet international industry standards, ensuring that our technical and management graduates possess the exact skill sets sought after by global employers. Through strategic industry alignments, practical learning environments, and a strong emphasis on cross-cultural competence, we empower our students to confidently step into competitive multinational landscapes.",
      photoNoteBold: "Want to use your own photos?",
      photoNote:
        "Send us high-quality images of kitchens, receptions, bars, and cruise venues. Recommended format: JPEG or WebP, minimum size 1200 × 800 px (landscape), max file size 2 MB per image.",
      ctaTitle: "Ready to Start Your Hospitality Journey?",
      ctaDesc:
        "Join hundreds of students who have launched global careers through RITM. Apply for the next intake today.",
      seePlacements: "See Placements",
      studentAlt1: "Student in professional hospitality attire",
      studentAlt2: "Hospitality professional training",
      studentAlt3: "Student in professional attire",
    },
    inquiry: {
      title: "Quick Inquiry",
      subtitle: "Get course details & admission guidance",
      fullName: "Full Name",
      namePlaceholder: "Enter your name",
      phone: "Phone Number",
      phonePlaceholder: "+91 XXXXX XXXXX",
      courseInterest: "Course Interest",
      selectCourse: "Select a course",
      message: "Message",
      messagePlaceholder: "Any questions?",
    },
    courses: {
      pageBadge: "Our Programs",
      pageTitle: "Our Courses",
      pageSubtitle:
        "Hands-on certificates and diplomas with lab training, grooming, and placement support.",
      heroLine1: "Master the Art.",
      heroLine2: "Lead the Future.",
      heroSubtitle:
        "Industry-focused programs designed to transform passion into a professional hospitality career with hands-on training and global placement support.",
      heroPillars: ["Expert Faculty", "Hands-on Training", "Global Exposure", "100% Placement Support"],
      explorePrograms: "Explore Programs",
      promoTitle: "Learn Today\nLead Tomorrow",
      promoDesc:
        "Join RITM and gain the skills, confidence, and industry connections to build a rewarding career in hospitality — in India and abroad.",
      sectionTitle: "Choose Your Hospitality Path",
      viewDetails: "View Details",
      closeDetails: "Close",
      featureBar: [
        { title: "Modern Campus", desc: "State-of-the-art labs & kitchens" },
        { title: "Industry Connect", desc: "Strong tie-ups with leading brands" },
        { title: "Global Opportunities", desc: "International standards & exposure" },
        { title: "Career Support", desc: "Internships, placements & guidance" },
      ],
      careerPathsLabel: "Career Paths",
      notSureTitle: "Not Sure Which Course Is Right for You?",
      notSureDesc:
        "Our admission counselors will help you choose the best program based on your goals, eligibility, and career aspirations.",
      freeCounseling: "Get Free Counseling",
      items: {
        "advanced-diploma-hospitality-personality": {
          title: "Advanced Diploma in Hospitality & Personality Development",
          eligibility: "10th Pass",
          duration: "18 Months",
          description:
            "A comprehensive 18-month program covering all hospitality departments with personality grooming, English coaching, and departmental specialization.",
          highlight: "100% Placement Support",
          features: [
            "6-month multi-department foundation training",
            "Personality development & spoken English",
            "Dedicated placement cell support",
          ],
          careerPaths: "Front Office · F&B Service · Housekeeping · Guest Relations",
        },
        "advanced-diploma-international-hospitality": {
          title: "Advanced Diploma in International Hospitality",
          eligibility: "10th Pass",
          duration: "18 Months",
          description:
            "Built for global careers — international standards, advanced specialization, and overseas Job Training opportunities.",
          highlight: "Overseas Job Training Opportunity",
          features: [
            "International hospitality standards & protocols",
            "Overseas Job Training (JT) pathway",
            "Advanced departmental specialization",
          ],
          careerPaths: "Luxury Resorts · International Hotels · Cruise Lines · Overseas JT",
        },
        "diploma-hotel-management": {
          title: "Diploma in Hotel Management",
          eligibility: "10th Pass",
          duration: "12 Months",
          description:
            "A fast-track one-year diploma focused on core hotel operations, internships, and job-ready skills for the global hospitality industry.",
          highlight: "Fast-Track to Global Careers",
          features: [
            "12-month intensive hotel operations training",
            "Mandatory industry internships",
            "English communication & grooming",
          ],
          careerPaths: "Hotel Operations · Resort Management · Fine Dining · Cruise Hospitality",
        },
        "certificate-hotel-management": {
          title: "Certificate in Hotel Management",
          eligibility: "10th Pass",
          duration: "09 Months",
          description:
            "A focused 9-month certificate building kitchen, service, and front-office skills for quick entry into hospitality jobs.",
          highlight: "Immediate Employment Focus",
          features: [
            "Kitchen, service & front-office practicals",
            "Essential grooming & communication",
            "Affordable fast-track to employment",
          ],
          careerPaths: "Restaurants · Hotels · Cruise Lines · QSR Chains",
        },
        "professional-barista": {
          title: "Professional Barista Certification Program",
          eligibility: "10th Pass",
          duration: "45 Days",
          description:
            "Master espresso, latte art, and café operations in 45 days — a focused path into premium coffee and hospitality careers.",
          highlight: "100% Placement Guaranteed",
          features: [
            "Espresso mechanics & latte art",
            "High-volume café operations",
            "Customer service & English skills",
          ],
          careerPaths: "Coffee Chains · Luxury Hotels · Cruise Ships · Independent Cafés",
        },
        "international-bartender": {
          title: "Certification in International Bartender Course",
          eligibility: "10th Pass",
          duration: "6 Months",
          description:
            "Intensive mixology and bar operations training designed for high-energy venues and international hospitality careers.",
          highlight: "Global Bartending Career",
          features: [
            "Mixology & flair bartending",
            "Beverage management & bar setup",
            "Speed service under pressure",
          ],
          careerPaths: "Luxury Resorts · Premium Nightclubs · Cruise Bars · International Hotels",
        },
      },
    },
    placements: {
      badge: "Success Stories",
      titleLine1: "Wall of",
      titleLine2: "Fame",
      title: "Wall of Fame",
      subtitle:
        "Our biggest strength — students placed in premium hotels and international destinations including Maldives, Kuwait, Dubai, Europe, and cruise lines worldwide.",
      exploreSuccess: "Explore Success Stories",
      alumniProud: "Our Proud",
      alumniNetwork: "Alumni Network",
      viewMoreAlumni: "View More Alumni",
      statPlacement: "Placement Support",
      statCountries: "Countries",
      statAlumni: "Alumni Placed",
      statHotels: "Partner Hotels",
      successTitle: "Your Success Story Starts Here",
      successDesc: "Join our next batch and become part of RITM's growing Wall of Fame.",
      students: {
        "1": { name: "Rahul Sharma", role: "Front Office Associate", company: "Taj Exotica Resort", location: "Maldives" },
        "2": { name: "Priya Negi", role: "Food & Beverage Service", company: "Jumeirah Beach Hotel", location: "Dubai, UAE" },
        "3": { name: "Amit Rawat", role: "Commis Chef", company: "Marriott International", location: "Kuwait" },
        "4": { name: "Sneha Bisht", role: "Guest Relations Executive", company: "Hilton Garden Inn", location: "London, UK" },
        "5": { name: "Vikram Singh", role: "Bar Supervisor", company: "Royal Caribbean Cruises", location: "International Waters" },
        "6": { name: "Anjali Joshi", role: "Housekeeping Supervisor", company: "ITC Grand Bharat", location: "India" },
        "7": { name: "Karan Mehra", role: "Restaurant Captain", company: "Oberoi Hotels", location: "Switzerland" },
        "8": { name: "Divya Pant", role: "Barista Lead", company: "Starbucks Reserve", location: "Singapore" },
      },
    },
    gallery: {
      badge: "Campus Life",
      title: "Gallery",
      subtitle:
        "Photos of our practical training labs — Kitchen, Front Office, Mock Bar, and hands-on hospitality sessions.",
      allPhotos: "All Photos",
      categories: {
        kitchen: "Kitchen",
        reception: "Front Office",
        bar: "Mock Bar",
        cruise: "Cruise",
        training: "Training",
      },
      shareNoteBold: "Have campus photos to share?",
      shareNote:
        "Send us images of your Kitchen, Front Office, and Mock Bar labs. Format: JPEG or WebP, minimum 1200 × 800 px, max 2 MB each.",
    },
    contact: {
      badge: "Reach Out",
      title: "Contact Us",
      subtitle: "Visit our campus in Uttarakhand or connect with us instantly on WhatsApp.",
      mapTitle: "RITM Location on Google Maps",
    },
    courseOptions: {
      "advanced-diploma-hospitality": "Advanced Diploma in Hospitality & Personality Development",
      "advanced-diploma-international": "Advanced Diploma in International Hospitality",
      diploma: "Diploma in Hotel Management",
      certificate: "Certificate in Hotel Management",
      barista: "Professional Barista Certification",
      bartender: "International Bartender Course",
    },
  },
  hi: {
    institute: {
      name: "रबोचे इंस्टीट्यूट ऑफ टेक्नोलॉजी एंड मैनेजमेंट",
      nameLine1: "रबोचे इंस्टीट्यूट ऑफ",
      nameLine2: "टेक्नोलॉजी एंड मैनेजमेंट",
      affiliation: "संबद्धता विवरण शीघ्र अपडेट किया जाएगा।",
      address: "उत्तराखंड, भारत",
    },
    nav: {
      home: "होम",
      courses: "कोर्सेज",
      placements: "प्लेसमेंट",
      gallery: "गैलरी",
      contact: "संपर्क करें",
      applyNextIntake: "अगले इनटेक के लिए आवेदन करें",
    },
    welcome: {
      title: "भाषा चुनें",
      subtitle: "कृपया अपनी पसंदीदा भाषा चुनें।",
      english: "English",
      hindi: "हिन्दी",
    },
    common: {
      program: "कार्यक्रम",
      enquireNow: "अभी पूछताछ करें",
      allRightsReserved: "सर्वाधिकार सुरक्षित।",
      toggleMenu: "मेनू खोलें",
      chatWhatsApp: "व्हाट्सएप पर चैट करें",
      phone: "फ़ोन",
      email: "ईमेल",
      address: "पता",
      quickLinks: "त्वरित लिंक",
      getInTouch: "संपर्क में रहें",
      submitInquiry: "पूछताछ भेजें",
      thankYou: "धन्यवाद!",
      inquiryReceived: "हमें आपकी पूछताछ मिल गई है। हमारी टीम शीघ्र आपसे संपर्क करेगी।",
      optional: "वैकल्पिक",
    },
    home: {
      badge: "प्रवेश खुले हैं — अगला इनटेक",
      heroLine1: "हॉस्पिटैलिटी आपका",
      heroLine2: "करियर है।",
      heroGetInfo: "जानकारी प्राप्त करें",
      heroApplyIntake: "जून इनटेक के लिए आवेदन करें",
      heroTitle: "अपना वैश्विक हॉस्पिटैलिटी करियर बनाएं",
      heroPara1:
        "गहन डिप्लोमा से लेकर फास्ट-ट्रैक प्रमाणपत्र तक, हमारा पाठ्यक्रम व्यावहारिक लैब प्रशिक्षण, अंतर्राष्ट्रीय हॉस्पिटैलिटी मानकों और अनिवार्य इंटर्नशिप को मिलाकर आपको पहले दिन से नौकरी के लिए तैयार करता है।",
      heroPara2:
        "हमारा पाठ्यक्रम विभाग-विशिष्ट प्रमाणपत्र कार्यक्रमों से लेकर विशेषज्ञता डिप्लोमा तक फैला हुआ है।",
      exploreCourses: "कोर्स देखें",
      statPlacement: "प्लेसमेंट सहायता",
      statPrograms: "कार्यक्रम",
      statCareer: "करियर अवसर",
      whyChoose: "RITM क्यों चुनें?",
      whyChooseItems: [
        "व्यावहारिक लैब प्रशिक्षण",
        "अंतर्राष्ट्रीय हॉस्पिटैलिटी मानक",
        "अनिवार्य उद्योग इंटर्नशिप",
        "व्यक्तित्व और अंग्रेजी विकास",
        "100% प्लेसमेंट सहायता",
        "विदेश में जॉब ट्रेनिंग के अवसर",
      ],
      ourPrograms: "हमारे कार्यक्रम",
      coursesTitle: "कोर्सेज",
      coursesSubtitle:
        "45 दिन के बैरिस्टा प्रमाणपत्र से 18 महीने के उन्नत डिप्लोमा तक — अपना हॉस्पिटैलिटी करियर शुरू करने वाला कार्यक्रम खोजें।",
      viewAllCourses: "सभी कोर्स देखें",
      worldwide: "विश्वभर",
      globalCareerTitle: "वैश्विक करियर अवसर",
      globalCareerDesc:
        "रबोचे इंस्टीट्यूट ऑफ टेक्नोलॉजी एंड मैनेजमेंट में, हम क्षेत्रीय प्रतिभा और वैश्विक मांग के बीच की खाई को पाटते हैं। हमारा पाठ्यक्रम अंतर्राष्ट्रीय उद्योग मानकों को पूरा करने के लिए विशेष रूप से तैयार किया गया है, जिससे हमारे तकनीकी और प्रबंधन स्नातक वैश्विक नियोक्ताओं द्वारा मांगे जाने वाले कौशल से लैस हों। रणनीतिक उद्योग संबद्धता, व्यावहारिक शिक्षण वातावरण और सांस्कृतिक दक्षता पर जोर देकर, हम छात्रों को बहुराष्ट्रीय परिदृश्य में आत्मविश्वास से कदम रखने में सक्षम बनाते हैं।",
      photoNoteBold: "अपनी तस्वीरें उपयोग करना चाहते हैं?",
      photoNote:
        "रसोई, रिसेप्शन, बार और क्रूज़ स्थलों की उच्च गुणवत्ता वाली तस्वीरें भेजें। अनुशंसित प्रारूप: JPEG या WebP, न्यूनतम आकार 1200 × 800 px (लैंडस्केप), प्रति तस्वीर अधिकतम 2 MB।",
      ctaTitle: "अपनी हॉस्पिटैलिटी यात्रा शुरू करने के लिए तैयार हैं?",
      ctaDesc:
        "सैकड़ों छात्रों में शामिल हों जिन्होंने RITM के माध्यम से वैश्विक करियर शुरू किए हैं। आज ही अगले इनटेक के लिए आवेदन करें।",
      seePlacements: "प्लेसमेंट देखें",
      studentAlt1: "पेशेवर पोशाक में छात्र",
      studentAlt2: "हॉस्पिटैलिटी प्रशिक्षण",
      studentAlt3: "पेशेवर पोशाक में छात्र",
    },
    inquiry: {
      title: "त्वरित पूछताछ",
      subtitle: "कोर्स विवरण और प्रवेश मार्गदर्शन प्राप्त करें",
      fullName: "पूरा नाम",
      namePlaceholder: "अपना नाम दर्ज करें",
      phone: "फ़ोन नंबर",
      phonePlaceholder: "+91 XXXXX XXXXX",
      courseInterest: "रुचि का कोर्स",
      selectCourse: "कोर्स चुनें",
      message: "संदेश",
      messagePlaceholder: "कोई प्रश्न?",
    },
    courses: {
      pageBadge: "हमारे कार्यक्रम",
      pageTitle: "हमारे कोर्स",
      pageSubtitle:
        "लैब प्रशिक्षण, ग्रूमिंग और प्लेसमेंट सहायता के साथ व्यावहारिक प्रमाणपत्र और डिप्लोमा।",
      heroLine1: "कला में महारत हासिल करें।",
      heroLine2: "भविष्य का नेतृत्व करें।",
      heroSubtitle:
        "उद्योग-केंद्रित कार्यक्रम जो जुनून को व्यावहारिक प्रशिक्षण और वैश्विक प्लेसमेंट के साथ पेशेवर हॉस्पिटैलिटी करियर में बदलते हैं।",
      heroPillars: ["विशेषज्ञ फैकल्टी", "हाथों-हाथ प्रशिक्षण", "वैश्विक अनुभव", "100% प्लेसमेंट सहायता"],
      explorePrograms: "कार्यक्रम देखें",
      promoTitle: "आज सीखें\nकल नेतृत्व करें",
      promoDesc:
        "RITM से जुड़ें और भारत व विदेश में हॉस्पिटैलिटी करियर बनाने के लिए कौशल, आत्मविश्वास और उद्योग संपर्क प्राप्त करें।",
      sectionTitle: "अपना हॉस्पिटैलिटी मार्ग चुनें",
      viewDetails: "विवरण देखें",
      closeDetails: "बंद करें",
      featureBar: [
        { title: "आधुनिक कैंपस", desc: "अत्याधुनिक लैब और रसोई" },
        { title: "उद्योग संबंध", desc: "प्रमुख ब्रांडों के साथ मजबूत संबंध" },
        { title: "वैश्विक अवसर", desc: "अंतर्राष्ट्रीय मानक और अनुभव" },
        { title: "करियर सहायता", desc: "इंटर्नशिप, प्लेसमेंट और मार्गदर्शन" },
      ],
      careerPathsLabel: "करियर विकल्प",
      notSureTitle: "पता नहीं कौन सा कोर्स सही है?",
      notSureDesc:
        "हमारे प्रवेश परामर्शदाता आपके लक्ष्य, पात्रता और करियर आकांक्षाओं के आधार पर सर्वोत्तम कार्यक्रम चुनने में मदद करेंगे।",
      freeCounseling: "मुफ्त परामर्श प्राप्त करें",
      items: {
        "advanced-diploma-hospitality-personality": {
          title: "एडवांस्ड डिप्लोमा इन हॉस्पिटैलिटी एंड पर्सनैलिटी डेवलपमेंट",
          eligibility: "10वीं पास",
          duration: "18 महीने",
          description:
            "18 महीने का व्यापक कार्यक्रम — सभी हॉस्पिटैलिटी विभाग, व्यक्तित्व विकास, अंग्रेजी कोचिंग और विभागीय विशेषज्ञता।",
          highlight: "100% प्लेसमेंट सहायता",
          features: [
            "6 महीने का बहु-विभागीय नींव प्रशिक्षण",
            "व्यक्तित्व विकास और अंग्रेजी बोलने का प्रशिक्षण",
            "समर्पित प्लेसमेंट सेल सहायता",
          ],
          careerPaths: "फ्रंट ऑफिस · एफ एंड बी सर्विस · हाउसकीपिंग · गेस्ट रिलेशन",
        },
        "advanced-diploma-international-hospitality": {
          title: "एडवांस्ड डिप्लोमा इन इंटरनेशनल हॉस्पिटैलिटी",
          eligibility: "10वीं पास",
          duration: "18 महीने",
          description:
            "वैश्विक करियर के लिए — अंतर्राष्ट्रीय मानक, उन्नत विशेषज्ञता और विदेश में जॉब ट्रेनिंग के अवसर।",
          highlight: "विदेश में जॉब ट्रेनिंग का अवसर",
          features: [
            "अंतर्राष्ट्रीय हॉस्पिटैलिटी मानक और प्रोटोकॉल",
            "विदेश में जॉब ट्रेनिंग (JT) का मार्ग",
            "उन्नत विभागीय विशेषज्ञता",
          ],
          careerPaths: "लक्ज़री रिसॉर्ट · अंतर्राष्ट्रीय होटल · क्रूज़ लाइन · विदेश JT",
        },
        "diploma-hotel-management": {
          title: "डिप्लोमा इन होटल मैनेजमेंट",
          eligibility: "10वीं पास",
          duration: "12 महीने",
          description:
            "एक साल का फास्ट-ट्रैक डिप्लोमा — मुख्य होटल संचालन, इंटर्नशिप और वैश्विक उद्योग के लिए नौकरी-तैयार कौशल।",
          highlight: "वैश्विक करियर के लिए फास्ट-ट्रैक",
          features: [
            "12 महीने का गहन होटल संचालन प्रशिक्षण",
            "अनिवार्य उद्योग इंटर्नशिप",
            "अंग्रेजी संचार और ग्रूमिंग",
          ],
          careerPaths: "होटल संचालन · रिसॉर्ट प्रबंधन · फाइन डाइनिंग · क्रूज़ हॉस्पिटैलिटी",
        },
        "certificate-hotel-management": {
          title: "सर्टिफिकेट इन होटल मैनेजमेंट",
          eligibility: "10वीं पास",
          duration: "09 महीने",
          description:
            "9 महीने का केंद्रित प्रमाणपत्र — रसोई, सर्विस और फ्रंट-ऑफिस कौशल, हॉस्पिटैलिटी नौकरियों में त्वरित प्रवेश।",
          highlight: "तत्काल रोजगार पर ध्यान",
          features: [
            "रसोई, सर्विस और फ्रंट-ऑफिस प्रैक्टिकल",
            "आवश्यक ग्रूमिंग और संचार",
            "किफायती फास्ट-ट्रैक रोजगार",
          ],
          careerPaths: "रेस्टोरेंट · होटल · क्रूज़ लाइन · QSR चेन",
        },
        "professional-barista": {
          title: "प्रोफेशनल बैरिस्टा सर्टिफिकेशन प्रोग्राम",
          eligibility: "10वीं पास",
          duration: "45 दिन",
          description:
            "45 दिन में एस्प्रेसो, लैटे आर्ट और कैफ़े संचालन — प्रीमियम कॉफी और हॉस्पिटैलिटी करियर का केंद्रित मार्ग।",
          highlight: "100% प्लेसमेंट की गारंटी",
          features: [
            "एस्प्रेसो मैकेनिक्स और लैटे आर्ट",
            "उच्च-मात्रा कैफ़े संचालन",
            "ग्राहक सेवा और अंग्रेजी कौशल",
          ],
          careerPaths: "कॉफी चेन · लक्ज़री होटल · क्रूज़ जहाज · स्वतंत्र कैफ़े",
        },
        "international-bartender": {
          title: "सर्टिफिकेशन इन इंटरनेशनल बारटेंडर कोर्स",
          eligibility: "10वीं पास",
          duration: "6 महीने",
          description:
            "मिक्सोलॉजी और बार संचालन का गहन प्रशिक्षण — उच्च-ऊर्जा वातावरण और अंतर्राष्ट्रीय करियर के लिए।",
          highlight: "वैश्विक बारटेंडिंग करियर",
          features: [
            "मिक्सोलॉजी और फ्लेयर बारटेंडिंग",
            "पेय प्रबंधन और बार सेटअप",
            "दबाव में तेज़ सेवा",
          ],
          careerPaths: "लक्ज़री रिसॉर्ट · प्रीमियम नाइटक्लब · क्रूज़ बार · अंतर्राष्ट्रीय होटल",
        },
      },
    },
    placements: {
      badge: "सफलता की कहानियां",
      titleLine1: "वॉल ऑफ",
      titleLine2: "फेम",
      title: "वॉल ऑफ फेम",
      subtitle:
        "हमारी सबसे बड़ी ताकत — मालदीव, कुवैत, दुबई, यूरोप और विश्वभर की क्रूज़ लाइनों में प्रीमियम होटलों में नियुक्त छात्र।",
      exploreSuccess: "सफलता की कहानियां देखें",
      alumniProud: "हमारे गौरवशाली",
      alumniNetwork: "पूर्व छात्र नेटवर्क",
      viewMoreAlumni: "और पूर्व छात्र देखें",
      statPlacement: "प्लेसमेंट सहायता",
      statCountries: "देश",
      statAlumni: "प्लेस्ड छात्र",
      statHotels: "पार्टनर होटल",
      successTitle: "आपकी सफलता की कहानी यहीं से शुरू होती है",
      successDesc: "हमारे अगले बैच में शामिल हों और RITM की बढ़ती वॉल ऑफ फेम का हिस्सा बनें।",
      students: {
        "1": { name: "राहुल शर्मा", role: "फ्रंट ऑफिस एसोसिएट", company: "ताज एक्सोटिका रिसॉर्ट", location: "मालदीव" },
        "2": { name: "प्रिया नेगी", role: "फूड एंड बेवरेज सर्विस", company: "जुमेराह बीच होटल", location: "दुबई, यूएई" },
        "3": { name: "अमित रावत", role: "कमिस शेफ", company: "मैरियट इंटरनेशनल", location: "कुवैत" },
        "4": { name: "स्नेहा बिष्ट", role: "गेस्ट रिलेशन एक्जीक्यूटिव", company: "हिल्टन गार्डन इन", location: "लंदन, यूके" },
        "5": { name: "विक्रम सिंह", role: "बार सुपरवाइज़र", company: "रॉयल कैरिबियन क्रूज़", location: "अंतर्राष्ट्रीय जलक्षेत्र" },
        "6": { name: "अंजलि जोशी", role: "हाउसकीपिंग सुपरवाइज़र", company: "आईटीसी ग्रैंड भारत", location: "भारत" },
        "7": { name: "करण मेहरा", role: "रेस्टोरेंट कैप्टन", company: "ओबेरॉय होटल्स", location: "स्विट्ज़रलैंड" },
        "8": { name: "दिव्या पंत", role: "बैरिस्टा लीड", company: "स्टारबक्स रिज़र्व", location: "सिंगापुर" },
      },
    },
    gallery: {
      badge: "कैंपस जीवन",
      title: "गैलरी",
      subtitle:
        "हमारे व्यावहारिक प्रशिक्षण लैब की तस्वीरें — रसोई, फ्रंट ऑफिस, मॉक बार और हाथों-हाथ हॉस्पिटैलिटी सत्र।",
      allPhotos: "सभी तस्वीरें",
      categories: {
        kitchen: "रसोई",
        reception: "फ्रंट ऑफिस",
        bar: "मॉक बार",
        cruise: "क्रूज़",
        training: "प्रशिक्षण",
      },
      shareNoteBold: "कैंपस की तस्वीरें साझा करना चाहते हैं?",
      shareNote:
        "अपनी रसोई, फ्रंट ऑफिस और मॉक बार लैब की तस्वीरें भेजें। प्रारूप: JPEG या WebP, न्यूनतम 1200 × 800 px, अधिकतम 2 MB प्रति तस्वीर।",
    },
    contact: {
      badge: "संपर्क करें",
      title: "संपर्क करें",
      subtitle: "उत्तराखंड में हमारे कैंपस पर आएं या व्हाट्सएप पर तुरंत जुड़ें।",
      mapTitle: "Google Maps पर RITM का स्थान",
    },
    courseOptions: {
      "advanced-diploma-hospitality": "एडवांस्ड डिप्लोमा इन हॉस्पिटैलिटी एंड पर्सनैलिटी डेवलपमेंट",
      "advanced-diploma-international": "एडवांस्ड डिप्लोमा इन इंटरनेशनल हॉस्पिटैलिटी",
      diploma: "डिप्लोमा इन होटल मैनेजमेंट",
      certificate: "सर्टिफिकेट इन होटल मैनेजमेंट",
      barista: "प्रोफेशनल बैरिस्टा सर्टिफिकेशन",
      bartender: "इंटरनेशनल बारटेंडर कोर्स",
    },
  },
};

export const courseIds = [
  "advanced-diploma-hospitality-personality",
  "advanced-diploma-international-hospitality",
  "diploma-hotel-management",
  "certificate-hotel-management",
  "professional-barista",
  "international-bartender",
] as const;

export const STORAGE_KEY = "ritm-locale";
