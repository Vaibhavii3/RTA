import type { Locale } from "./translations";

interface FeatureItem {
  title: string;
  desc: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface LocationItem {
  name: string;
  title: string;
  desc: string;
}

export interface HomeExtras {
  stats: { happyStudents: string; clientSuccess: string; placementPartners: string };
  training: { badge: string; title: string; desc: string; features: FeatureItem[] };
  services: { badge: string; title: string; desc: string; cards: FeatureItem[] };
  roadmap: { badge: string; title: string; desc: string; steps: FeatureItem[] };
  launch: { badge: string; title: string; desc: string; checks: string[]; bookCounseling: string };
  locations: LocationItem[];
  placementNetwork: { badge: string; title: string; desc: string; sectors: FeatureItem[] };
  whySection: {
    badge: string;
    title: string;
    titleHighlight: string;
    desc: string;
    cards: FeatureItem[];
  };
  exploreBanner: {
    badge: string;
    title: string;
    desc: string;
    studentsTrained: string;
    placementAssist: string;
    industryConn: string;
    exploreAll: string;
  };
  support: FeatureItem[];
  faq: { badge: string; title: string; subtitle: string; items: FaqItem[] };
  finalCta: { title: string; desc: string };
  footer: { tagline: string; company: string; help: string; about: string; privacy: string; terms: string };
}

export const homeExtras: Record<Locale, HomeExtras> = {
  en: {
    stats: {
      happyStudents: "Happy Students",
      clientSuccess: "Placement Success",
      placementPartners: "Industry Connections",
    },
    training: {
      badge: "GLOBAL HOSPITALITY TRAINING ENVIRONMENT",
      title: "Train in World-Class Hospitality & Culinary Settings",
      desc: "Experience hands-on learning in professional kitchens, luxury hotel front offices, mock bars, and real service environments designed to international standards.",
      features: [
        { title: "Professional Kitchens", desc: "Learn culinary techniques in modern commercial kitchen environments." },
        { title: "Luxury Hotel Operations", desc: "Gain practical exposure to front office and guest service management." },
        { title: "Restaurant & Bar Service", desc: "Develop hospitality skills through real-world service experiences." },
        { title: "Global Career Opportunities", desc: "Prepare for careers in hotels, resorts, cruises, and international brands." },
      ],
    },
    services: {
      badge: "Services",
      title: "What We Offer",
      desc: "We build careers through structured academics, hands-on lab training, personality development, and dedicated placement support for every student.",
      cards: [
        { title: "Academic Programs", desc: "Structured Certificate, Diploma & Advanced Diploma courses aligned with industry needs." },
        { title: "100% Placement Assistance", desc: "Dedicated career cell with tie-ups in Australia, New Zealand, Europe, USA, Canada, Middle East & beyond. 230+ students placed." },
        { title: "Hands-On Practical Training", desc: "Kitchen Labs, Front Office Suites, and Mock Bar setups for real-world readiness." },
        { title: "Short-Term Skill Courses", desc: "Barista Training (45 days), Bartender Certification, F&B Service & more." },
      ],
    },
    roadmap: {
      badge: "CAREER ROADMAP",
      title: "Your Journey Towards Global Hospitality Success",
      desc: "We don't just provide education. We guide students from learning and practical training to internships and successful careers worldwide.",
      steps: [
        { title: "Enroll", desc: "Choose the hospitality program that matches your career goals." },
        { title: "Learn & Train", desc: "Gain practical skills through hands-on training and industry-focused learning." },
        { title: "Internship", desc: "Get real-world experience through internships and hospitality projects." },
        { title: "Build Your Career", desc: "Start your journey with hotels, resorts, restaurants, cruises, and global brands." },
      ],
    },
    launch: {
      badge: "GLOBAL HOSPITALITY CAREERS",
      title: "Launch Your Global Hospitality Career",
      desc: "Our programs focus on practical training, international standards, and real placement opportunities across premium hospitality destinations.",
      checks: [
        "100% Placement Assistance",
        "Mandatory Industry Internships",
        "International Tie-Ups (Australia, New Zealand, USA, Canada, Middle East & more)",
        "Personality & English Development",
      ],
      bookCounseling: "Book Free Career Counseling",
    },
    locations: [
      { name: "Maldives", title: "Luxury Island Resorts", desc: "Work at world-famous overwater villas and island resorts including Soneva, Four Seasons & Anantara." },
      { name: "Dubai, UAE", title: "World's Hospitality Capital", desc: "Premium placements at Burj Al Arab, Atlantis & tax-free earning opportunities in the Gulf." },
      { name: "Kuwait", title: "Premium Gulf Hospitality", desc: "5-star hotels in Kuwait City with excellent savings potential and career growth." },
      { name: "Europe", title: "UK, France & Switzerland", desc: "Historic castles, Michelin-starred restaurants, and luxury alpine chalets." },
      { name: "Singapore", title: "Asian Luxury Hub", desc: "Award-winning hotels and diverse international teams in Asia's top destination." },
      { name: "Qatar", title: "World Cup Legacy Hotels", desc: "Booming hospitality sector with ultra-modern luxury properties." },
    ],
    placementNetwork: {
      badge: "WHERE OUR GRADUATES WORK",
      title: "Global Placement Network",
      desc: "Our alumni are placed in premium hospitality brands across the world.",
      sectors: [
        { title: "Luxury Resorts", desc: "Maldives, Dubai & island destinations" },
        { title: "Cruise Lines", desc: "Royal Caribbean & international fleets" },
        { title: "Fine Dining", desc: "Michelin-starred & premium restaurants" },
        { title: "Premium Cafés", desc: "Starbucks Reserve & luxury hotel bars" },
      ],
    },
    whySection: {
      badge: "WHY CHOOSE RITM",
      title: "Train globally.",
      titleHighlight: "Placed worldwide.",
      desc: "We don't just teach hospitality — we build careers. Hands-on labs, international standards, and real placements at the world's finest hotels, resorts, and cruise lines.",
      cards: [
        { title: "Hands-On Lab Training", desc: "Practical training in kitchens, bars, and front-desk setups with industry-grade equipment." },
        { title: "100% Placement Support", desc: "Mandatory internships and placement assistance with top hotels and cruise lines worldwide." },
        { title: "International Standards", desc: "Curriculum meets global benchmarks recognized in Dubai, London, Singapore & beyond." },
      ],
    },
    exploreBanner: {
      badge: "EXPLORE OUR COURSES",
      title: "Discover the Right Hospitality Program for Your Future",
      desc: "Whether you aspire to work in luxury hotels, restaurants, cruise lines, resorts, or global hospitality brands, our industry-focused programs build the skills and confidence you need.",
      studentsTrained: "Students Trained",
      placementAssist: "Placement Assistance",
      industryConn: "Industry Connections",
      exploreAll: "Explore All Programs",
    },
    support: [
      { title: "Expert Career Counseling", desc: "Personalized guidance to choose the right program and map your career path from student to hospitality professional." },
      { title: "Industry Partnerships", desc: "Direct connections with top hotels and resorts. Active placement drives and recruitment opportunities." },
      { title: "Personality Development", desc: "Professional grooming, communication skills, and international etiquette training for global success." },
      { title: "Career Growth Pathways", desc: "Strategic planning for rapid advancement in luxury hotels, cruise lines, and international hospitality." },
    ],
    faq: {
      badge: "Help Center",
      title: "Frequently Asked Questions",
      subtitle: "Have a query? Please check these questions and answers.",
      items: [
        {
          q: "What courses do you offer?",
          a: "We offer Advanced Diploma in Hospitality & Personality Development (18 months), Advanced Diploma in International Hospitality (18 months), Diploma in Hotel Management (12 months), Certificate in Hotel Management (9 months), Professional Barista Certification (45 days), and International Bartender Course (6 months). All include practical lab training.",
        },
        {
          q: "What is the eligibility criteria?",
          a: "All our programs require a minimum qualification of 10th Pass. No prior hospitality experience is needed — we train you from the ground up.",
        },
        {
          q: "How do I apply for admission?",
          a: "Fill out the Quick Inquiry form on our website, call us directly, or chat on WhatsApp. Our admission team will guide you through the process for the next intake.",
        },
        {
          q: "Do you provide placement assistance?",
          a: "Yes! We offer 100% placement support with mandatory internships. Our students are placed in Australia, New Zealand, Europe, USA, Canada, Middle East, and cruise lines worldwide.",
        },
        {
          q: "Where are your students placed?",
          a: "Our Wall of Fame includes placements at Taj Exotica Maldives, Jumeirah Dubai, Marriott Kuwait, Hilton London, Royal Caribbean Cruises, Oberoi Switzerland, and many more premium brands.",
        },
      ],
    },
    finalCta: {
      title: "Unlock Your Hospitality Career Potential with Our Proven Training",
      desc: "Train in our fully equipped labs — Kitchen, Front Office, Mock Bar — with 100% placement assistance in Maldives, Dubai, Kuwait, Europe, and beyond.",
    },
    footer: {
      tagline: "Industry-aligned training • 100% placement support • Global opportunities",
      company: "Company",
      help: "Help",
      about: "About Us",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
  },
  hi: {
    stats: {
      happyStudents: "खुश छात्र",
      clientSuccess: "प्लेसमेंट सफलता",
      placementPartners: "उद्योग संबंध",
    },
    training: {
      badge: "वैश्विक हॉस्पिटैलिटी प्रशिक्षण वातावरण",
      title: "विश्व-स्तरीय हॉस्पिटैलिटी और कुलिनरी सेटिंग में प्रशिक्षण",
      desc: "पेशेवर रसोई, लक्ज़री होटल फ्रंट ऑफिस, मॉक बार और वास्तविक सेवा वातावरण में हाथों-हाथ सीखें।",
      features: [
        { title: "पेशेवर रसोई", desc: "आधुनिक वाणिज्यिक रसोई वातावरण में कुलिनरी तकनीकें सीखें।" },
        { title: "लक्ज़री होटल संचालन", desc: "फ्रंट ऑफिस और अतिथि सेवा प्रबंधन का व्यावहारिक अनुभव।" },
        { title: "रेस्टोरेंट और बार सेवा", desc: "वास्तविक सेवा अनुभवों के माध्यम से हॉस्पिटैलिटी कौशल विकसित करें।" },
        { title: "वैश्विक करियर अवसर", desc: "होटल, रिसॉर्ट, क्रूज़ और अंतर्राष्ट्रीय ब्रांडों में करियर के लिए तैयारी।" },
      ],
    },
    services: {
      badge: "सेवाएं",
      title: "हम क्या प्रदान करते हैं",
      desc: "हम संरचित शिक्षा, व्यावहारिक लैब प्रशिक्षण, व्यक्तित्व विकास और समर्पित प्लेसमेंट सहायता के माध्यम से करियर बनाते हैं।",
      cards: [
        { title: "शैक्षणिक कार्यक्रम", desc: "उद्योग-संरेखित सर्टिफिकेट, डिप्लोमा और एडवांस्ड डिप्लोमा कोर्स।" },
        { title: "100% प्लेसमेंट सहायता", desc: "ऑस्ट्रेलिया, न्यूज़ीलैंड, यूरोप, USA, कनाडा, मध्य पूर्व में अंतर्राष्ट्रीय संबंध। 230+ छात्र नियुक्त।" },
        { title: "व्यावहारिक प्रशिक्षण", desc: "किचन लैब, फ्रंट ऑफिस सुइट और मॉक बार सेटअप।" },
        { title: "अल्पकालिक कौशल कोर्स", desc: "बैरिस्टा (45 दिन), बारटेंडर, F&B सेवा और अधिक।" },
      ],
    },
    roadmap: {
      badge: "करियर रोडमैप",
      title: "वैश्विक हॉस्पिटैलिटी सफलता की आपकी यात्रा",
      desc: "हम सिर्फ शिक्षा नहीं देते — हम सीखने से इंटर्नशिप और वैश्विक करियर तक मार्गदर्शन करते हैं।",
      steps: [
        { title: "नामांकन", desc: "अपने करियर लक्ष्यों के अनुसार हॉस्पिटैलिटी कार्यक्रम चुनें।" },
        { title: "सीखें और प्रशिक्षण", desc: "हाथों-हाथ प्रशिक्षण और उद्योग-केंद्रित सीख के माध्यम से व्यावहारिक कौशल।" },
        { title: "इंटर्नशिप", desc: "इंटर्नशिप और हॉस्पिटैलिटी परियोजनाओं के माध्यम से वास्तविक अनुभव।" },
        { title: "करियर बनाएं", desc: "होटल, रिसॉर्ट, रेस्टोरेंट, क्रूज़ और वैश्विक ब्रांडों में शुरुआत करें।" },
      ],
    },
    launch: {
      badge: "वैश्विक हॉस्पिटैलिटी करियर",
      title: "अपना वैश्विक हॉस्पिटैलिटी करियर शुरू करें",
      desc: "हमारे कार्यक्रम व्यावहारिक प्रशिक्षण, अंतर्राष्ट्रीय मानकों और वास्तविक प्लेसमेंट अवसरों पर केंद्रित हैं।",
      checks: [
        "100% प्लेसमेंट सहायता",
        "अनिवार्य इंडस्ट्री इंटर्नशिप",
        "अंतर्राष्ट्रीय टाई-अप (मालदीव, दुबई, यूरोप)",
        "व्यक्तित्व और अंग्रेज़ी विकास",
      ],
      bookCounseling: "मुफ्त करियर परामर्श बुक करें",
    },
    locations: [
      { name: "मालदीव", title: "लक्ज़री आइलैंड रिसॉर्ट", desc: "विश्व प्रसिद्ध ओवरवाटर विला और आइलैंड रिसॉर्ट में कार्य करें।" },
      { name: "दुबई, यूएई", title: "विश्व की हॉस्पिटैलिटी राजधानी", desc: "बुर्ज अल अरब, अटलांटिस और टैक्स-फ्री कमाई के अवसर।" },
      { name: "कुवैत", title: "प्रीमियम गल्फ हॉस्पिटैलिटी", desc: "कुवैत सिटी में 5-स्टार होटल और उत्कृष्ट बचत क्षमता।" },
      { name: "यूरोप", title: "यूके, फ्रांस और स्विट्ज़रलैंड", desc: "ऐतिहासिक महल, मिशेलिन रेस्तरां और लक्ज़री अल्पाइन शैले।" },
      { name: "सिंगापुर", title: "एशियाई लक्ज़री हब", desc: "पुरस्कार विजेता होटल और विविध अंतर्राष्ट्रीय टीमें।" },
      { name: "कतर", title: "वर्ल्ड कप लेगेसी होटल", desc: "अल्ट्रा-मॉडर्न लक्ज़री प्रॉपर्टीज़ के साथ booming hospitality।" },
    ],
    placementNetwork: {
      badge: "हमारे स्नातक कहाँ काम करते हैं",
      title: "वैश्विक प्लेसमेंट नेटवर्क",
      desc: "हमारे पूर्व छात्र दुनिया भर के प्रीमियम हॉस्पिटैलिटी ब्रांडों में नियुक्त हैं।",
      sectors: [
        { title: "लक्ज़री रिसॉर्ट", desc: "मालदीव, दुबई और द्वीप गंतव्य" },
        { title: "क्रूज़ लाइन", desc: "रॉयल कैरिबियन और अंतर्राष्ट्रीय बेड़े" },
        { title: "फाइन डाइनिंग", desc: "मिशेलिन-स्टार और प्रीमियम रेस्तरां" },
        { title: "प्रीमियम कैफ़े", desc: "स्टारबक्स रिज़र्व और लक्ज़री होटल बार" },
      ],
    },
    whySection: {
      badge: "RITM क्यों चुनें",
      title: "विश्व स्तर पर प्रशिक्षण।",
      titleHighlight: "विश्वभर में प्लेसमेंट।",
      desc: "हम सिर्फ हॉस्पिटैलिटी नहीं सिखाते — हम करियर बनाते हैं। व्यावहारिक लैब, अंतर्राष्ट्रीय मानक, और दुनिया के सर्वश्रेष्ठ होटलों में वास्तविक प्लेसमेंट।",
      cards: [
        { title: "व्यावहारिक लैब प्रशिक्षण", desc: "उद्योग-ग्रेड उपकरणों के साथ रसोई, बार और फ्रंट-डेस्क प्रशिक्षण।" },
        { title: "100% प्लेसमेंट सहायता", desc: "अनिवार्य इंटर्नशिप और विश्वभर के शीर्ष होटलों में प्लेसमेंट।" },
        { title: "अंतर्राष्ट्रीय मानक", desc: "दुबई, लंदन, सिंगापुर में मान्यता प्राप्त वैश्विक पाठ्यक्रम।" },
      ],
    },
    exploreBanner: {
      badge: "हमारे कोर्स देखें",
      title: "अपने भविष्य के लिए सही हॉस्पिटैलिटी कार्यक्रम खोजें",
      desc: "चाहे लक्ज़री होटल, रेस्टोरेंट, क्रूज़ या वैश्विक ब्रांड — हमारे उद्योग-केंद्रित कार्यक्रम आवश्यक कौशल और आत्मविश्वास बनाते हैं।",
      studentsTrained: "प्रशिक्षित छात्र",
      placementAssist: "प्लेसमेंट सहायता",
      industryConn: "उद्योग संबंध",
      exploreAll: "सभी कार्यक्रम देखें",
    },
    support: [
      { title: "विशेषज्ञ करियर परामर्श", desc: "सही कार्यक्रम चुनने और छात्र से हॉस्पिटैलिटी पेशेवर तक के करियर मार्ग के लिए व्यक्तिगत मार्गदर्शन।" },
      { title: "उद्योग साझेदारी", desc: "शीर्ष होटलों और रिसॉर्ट के साथ सीधे संबंध। सक्रिय प्लेसमेंट ड्राइव।" },
      { title: "व्यक्तित्व विकास", desc: "पेशेवर ग्रूमिंग, संचार कौशल और अंतर्राष्ट्रीय शिष्टाचार प्रशिक्षण।" },
      { title: "करियर विकास मार्ग", desc: "लक्ज़री होटल, क्रूज़ और अंतर्राष्ट्रीय हॉस्पिटैलिटी में तेज़ उन्नति की रणनीतिक योजना।" },
    ],
    faq: {
      badge: "सहायता केंद्र",
      title: "अक्सर पूछे जाने वाले प्रश्न",
      subtitle: "कोई प्रश्न है? कृपया ये प्रश्न और उत्तर देखें।",
      items: [
        {
          q: "आप कौन से कोर्स प्रदान करते हैं?",
          a: "हम एडवांस्ड डिप्लोमा (18 महीने), डिप्लोमा (12 महीने), सर्टिफिकेट (9 महीने), बैरिस्टा (45 दिन) और बारटेंडर (6 महीने) सहित 6 कार्यक्रम प्रदान करते हैं। सभी में व्यावहारिक लैब प्रशिक्षण शामिल है।",
        },
        {
          q: "पात्रता मानदंड क्या है?",
          a: "सभी कार्यक्रमों के लिए न्यूनतम योग्यता 10वीं पास है। पूर्व अनुभव की आवश्यकता नहीं।",
        },
        {
          q: "प्रवेश के लिए आवेदन कैसे करें?",
          a: "वेबसाइट पर Quick Inquiry फॉर्म भरें, कॉल करें या WhatsApp पर चैट करें। हमारी टीम अगले इनटेक के लिए मार्गदर्शन करेगी।",
        },
        {
          q: "क्या आप प्लेसमेंट सहायता प्रदान करते हैं?",
          a: "हाँ! हम 100% प्लेसमेंट सहायता और अनिवार्य इंटर्नशिप प्रदान करते हैं। मालदीव, कुवैत, दुबई, यूरोप, सिंगापुर और क्रूज़ में प्लेसमेंट।",
        },
        {
          q: "आपके छात्र कहाँ नियुक्त हैं?",
          a: "ताज मालदीव, जुमेराह दुबई, मैरियट कुवैत, हिल्टन लंदन, रॉयल कैरिबियन क्रूज़, ओबेरॉय स्विट्ज़रलैंड और अन्य प्रीमियम ब्रांड।",
        },
      ],
    },
    finalCta: {
      title: "हमारे सिद्ध प्रशिक्षण के साथ अपनी हॉस्पिटैलिटी करियर की क्षमता को अनलॉक करें",
      desc: "किचन, फ्रंट ऑफिस, मॉक बार में प्रशिक्षण — मालदीव, दुबई, कुवैत, यूरोप में 100% प्लेसमेंट सहायता।",
    },
    footer: {
      tagline: "उद्योग-संरेखित प्रशिक्षण • 100% प्लेसमेंट • वैश्विक अवसर",
      company: "कंपनी",
      help: "सहायता",
      about: "हमारे बारे में",
      privacy: "गोपनीयता नीति",
      terms: "नियम और शर्तें",
    },
  },
};
