/**
 * Campus Services Dataset - VIT Vellore Campus Assistance Hub
 * Course: BCSE203E - Web Programming | Assignment 7
 * Student: Ajay Berlin (24BCE0449)
 * 
 * Scalable Data Model: Adding new services requires only appending an object
 * to this array without altering the React component tree or UI logic.
 */

export const CAMPUS_SERVICES = [
  {
    id: "academic-support",
    name: "Academic Support & FFCS Cell",
    category: "Academic Support",
    shortName: "Academic Support",
    badge: "OFFICIAL ADVISORY",
    rating: "4.8 / 5.0",
    description: "Comprehensive assistance for Fully Flexible Credit System (FFCS), course registration, grade revisions, academic counseling, faculty advisor coordination, and curriculum pathways.",
    location: "Technology Tower (TT), First Floor - Room TT-108",
    operatingHours: "Monday – Friday: 9:00 AM – 5:30 PM (Lunch: 1:15 PM – 2:00 PM)",
    contactPerson: "Dr. K. S. Ramanathan, Deputy Director (Academics)",
    email: "academics.support@vit.ac.in",
    phone: "+91 416 220 2155",
    urgencyTag: "Course Reg Active",
    icon: "GraduationCap",
    facilities: [
      "FFCS Course Add / Drop and Slot Alteration Desks",
      "Grade Improvement & Grade Grievance Redressal Cell",
      "Proctorial Board / Faculty Advisor Consultation Chambers",
      "Grade Card Distribution & Transcript Verification Unit",
      "Digital VTOP Academic Clearance Counter"
    ],
    faqs: [
      { q: "How do I modify my FFCS timetable?", a: "FFCS adjustments are made through VTOP during designated phase slots announced by the Academic Office." },
      { q: "Where can I collect my official transcript?", a: "Transcripts can be requested on the student portal and collected at TT-108 counter 4." }
    ],
    quickAction: "Book Academic Advisory"
  },
  {
    id: "library-services",
    name: "Periyar EVR Central Library",
    category: "Library Services",
    shortName: "Central Library",
    badge: "OPEN TILL 12 AM",
    rating: "4.9 / 5.0",
    description: "Six-tier centrally air-conditioned library hosting over 250,000 physical volumes, international journals (IEEE, Elsevier, Springer), multimedia kiosks, silent research cubicles, and 24/7 digital repository access.",
    location: "Periyar EVR Central Library Building (Central Campus, Opp. Main Building)",
    operatingHours: "Daily: 8:00 AM – 12:00 Midnight (Exam weeks open till 2:00 AM)",
    contactPerson: "Dr. P. Nirmala, Chief University Librarian",
    email: "library.services@vit.ac.in",
    phone: "+91 416 220 2160",
    urgencyTag: "Extended Hours",
    icon: "BookOpen",
    facilities: [
      "Six Levels of Specialized Subject Stack Sections",
      "Air-conditioned Reading Halls (Capacity: 1,500+ students)",
      "Digital Resource Centre with 200+ High-speed Terminals",
      "Automated RFID Self-Checkout & Book Drop Terminals",
      "Plagiarism Check (Turnitin) & Research Publication Helpdesk",
      "Quiet Discussion Cubicles for Postgraduate Scholars"
    ],
    faqs: [
      { q: "How many books can an undergraduate borrow?", a: "B.Tech students are eligible for up to 6 books for a 14-day renewal period." },
      { q: "How do I access IEEE papers from hostel Wi-Fi?", a: "Login through the VIT RemoteXs portal using your single sign-on institutional email." }
    ],
    quickAction: "Reserve Study Cubicle"
  },
  {
    id: "transportation",
    name: "Campus Transportation & Shuttles",
    category: "Transportation",
    shortName: "Campus Transit",
    badge: "ECO-FLEET ACTIVE",
    rating: "4.6 / 5.0",
    description: "Eco-friendly battery-operated campus buggies, shuttle buses connecting academic blocks and hostels, plus scheduled weekend railway transit to Katpadi Junction and emergency vehicles.",
    location: "Transport Control Office, Near Main Gate & SJT Bus Terminus",
    operatingHours: "Intra-Campus Shuttles: 7:00 AM – 10:00 PM (Continuous Loop every 10 mins)",
    contactPerson: "Mr. M. Senthil Kumar, Campus Transport Officer",
    email: "transport@vit.ac.in",
    phone: "+91 416 220 2201",
    urgencyTag: "Live Tracking On",
    icon: "Bus",
    facilities: [
      "Zero-Emission Battery Powered Intra-Campus Buggies",
      "Regular Shuttle Buses between SJT, TT, SMV, MB, and Hostel Blocks",
      "Katpadi Railway Station (KPD) Weekend Transit Fleet",
      "Dedicated Mobility Assistance for Differently-Abled Students",
      "Real-time Buggy Location GPS Tracking on Student VTOP"
    ],
    faqs: [
      { q: "Are campus buggies free for students?", a: "Yes, all internal buggies and hop-on shuttles operate free of charge for all VITians." },
      { q: "How do I get transit for late-night train arrivals?", a: "Emergency transport can be requested through your Hostel Warden or the Main Security Gate." }
    ],
    quickAction: "View Bus Timetable"
  },
  {
    id: "hostel-services",
    name: "Hostel Services & Chief Warden Office",
    category: "Hostel Services",
    shortName: "Hostels & Wardens",
    badge: "24/7 HELPDESK",
    rating: "4.7 / 5.0",
    description: "Single-window clearance for room allocations, mess catering management, biometric out-pass approval, courier reception, and maintenance redressal across all Men's and Ladies' Hostel blocks.",
    location: "Chief Warden Office, Ground Floor, Central Administrative Office",
    operatingHours: "Administrative Desk: 9:00 AM – 6:00 PM | Duty Wardens: 24/7 On-Duty",
    contactPerson: "Prof. R. Venkatesan (Chief Warden - MH) & Dr. V. Geetha (Chief Warden - LH)",
    email: "hostel.helpdesk@vit.ac.in",
    phone: "+91 416 220 2528",
    urgencyTag: "Outpass Window Open",
    icon: "Home",
    facilities: [
      "Digital Biometric Outing / Leave Management Cell",
      "Mess Committee Consultation & Special Diet Registrations",
      "24/7 Maintenance Squad (Plumbing, Electrical, Carpentry, AC)",
      "Centralized Amazon / Flipkart / Postal Courier Dispatch Point",
      "Night Canteen & Student Common Recreation Rooms",
      "Gymnasium & Indoor Sports Arena Coordination"
    ],
    faqs: [
      { q: "What is the procedure for weekend home leave?", a: "Apply on the VTOP Hostel Leave module at least 24 hours prior; parental SMS consent is mandatory." },
      { q: "How do I report an AC or electrical fault in my room?", a: "Log a maintenance ticket on the Hostel Helpdesk tab on VTOP or speak to the Block Supervisor." }
    ],
    quickAction: "Submit Maintenance Ticket"
  },
  {
    id: "health-wellness",
    name: "VIT Health Centre & Emergency Care",
    category: "Health & Wellness",
    shortName: "Health Centre",
    badge: "24/7 HOSPITAL CARE",
    rating: "4.9 / 5.0",
    description: "Round-the-clock medical clinic, emergency observation beds, full pharmacy, on-call specialized physicians, and immediate ambulance dispatch with tie-ups to CMC Vellore Hospital.",
    location: "VIT Health Centre (Near Gym / Behind Main Building)",
    operatingHours: "Emergency Services: 24 Hours / 7 Days a Week | OPD: 8:00 AM – 8:00 PM",
    contactPerson: "Dr. C. Arulmozhi, MD, Chief Resident Medical Officer",
    email: "healthcentre@vit.ac.in",
    phone: "+91 416 220 2161",
    urgencyTag: "Ambulance on Standby",
    icon: "HeartPulse",
    facilities: [
      "30-Bed Inpatient Observation Ward with Oxygen Support",
      "Fully Stocked 24/7 In-House Pharmacy with Subsidized Medicines",
      "Dedicated BLS Ambulances for Rapid CMC Vellore Transfers",
      "Psychological Guidance & Student Wellness Counseling Suites",
      "Clinical Pathology Lab (Routine Blood, Urine, and Diagnostic Tests)",
      "Daily Specialist Visiting Doctors (Dentist, Dermatologist, Ortho)"
    ],
    faqs: [
      { q: "Is consultation at the VIT Health Centre free?", a: "Yes, medical consultations and basic medications are completely covered for registered students." },
      { q: "What if there is a midnight emergency in the hostel?", a: "Call the Health Centre emergency ambulance (+91 416 220 2161) or alert your floor warden immediately." }
    ],
    quickAction: "Call Emergency Ambulance"
  },
  {
    id: "technical-support",
    name: "Centre for Technical Support (CTS)",
    category: "Technical Support",
    shortName: "CTS Helpdesk",
    badge: "IT & NETWORK HUB",
    rating: "4.7 / 5.0",
    description: "Official university helpdesk for VTOP portal passwords, institutional Google Workspace email, FortiClient campus Wi-Fi network authentication, software licensing, and lab equipment support.",
    location: "COMM Building, 2nd Floor - Helpdesk CTS-204",
    operatingHours: "Monday – Saturday: 8:30 AM – 6:30 PM (Sunday Ticket Support)",
    contactPerson: "Mr. T. Sundararajan, Director (CTS IT Services)",
    email: "cts@vit.ac.in",
    phone: "+91 416 220 2151",
    urgencyTag: "WiFi Ticket Resolution",
    icon: "Laptop",
    facilities: [
      "VTOP Student Portal Password Reset & Account Recovery",
      "VIT Wifi / FortiClient VPN Access Setup & Device MAC Binding",
      "Institutional Microsoft 365, MATLAB & GitHub Student Pack Activation",
      "Personal Laptop Hardware Diagnostic & OS Trouble Mitigation",
      "Network Infrastructure & LAN Socket Repairs in Hostels"
    ],
    faqs: [
      { q: "How do I register a new smartphone or laptop for campus Wi-Fi?", a: "Submit your device's MAC address through the VTOP CTS portal and download the security certificate." },
      { q: "What should I do if my VTOP account is locked?", a: "Visit CTS-204 with your physical student ID card or email cts@vit.ac.in from your registered email." }
    ],
    quickAction: "Raise CTS Ticket"
  },
  {
    id: "security-safety",
    name: "Campus Security & Lost and Found",
    category: "Security & Safety",
    shortName: "Campus Security",
    badge: "24/7 SURVEILLANCE",
    rating: "4.8 / 5.0",
    description: "24-hour campus vigil, CCTV control room, student ID verification, visitor screening, emergency patrol units, two-wheeler vehicle stickers, and centralized Lost & Found property office.",
    location: "Main Gate Security Central Hub (Gate No. 1, Katpadi Road)",
    operatingHours: "24 Hours / 7 Days a Week (Lost & Found Counter: 9:00 AM – 5:00 PM)",
    contactPerson: "Col. (Retd.) B. Surendranath, Chief Security Officer",
    email: "security@vit.ac.in",
    phone: "+91 416 220 2101",
    urgencyTag: "Patrol Units Active",
    icon: "ShieldAlert",
    facilities: [
      "Integrated Central CCTV Surveillance Monitoring Room",
      "Centralized Lost & Found Repository (Valuables & ID Cards)",
      "Automated Visitor Screening & Campus Pass Authorization",
      "Motorized Security Escort Patrols during Late Hours",
      "Vehicle Registration & Helmet Safety Enforcement Desk"
    ],
    faqs: [
      { q: "Where can I check for a lost wallet or ID card?", a: "All items retrieved across classrooms and grounds are handed over to Gate 1 Lost & Found Desk." },
      { q: "How can I obtain a campus vehicle sticker?", a: "Register on VTOP with your driving license and RC book, then verify originals at Gate 1 Security Hub." }
    ],
    quickAction: "Inquire Lost Property"
  },
  {
    id: "student-welfare",
    name: "Office of Student Welfare & Clubs",
    category: "Student Welfare",
    shortName: "Student Welfare",
    badge: "STUDENT ACTIVITIES",
    rating: "4.9 / 5.0",
    description: "Vibrant hub governing 120+ technical chapters and cultural clubs, premier international fests Riviera and graVITas, merit scholarships, exchange programs, and diversity inclusion.",
    location: "Dr. MGR Central Block, Room MGR-302",
    operatingHours: "Monday – Friday: 9:00 AM – 6:00 PM",
    contactPerson: "Dr. S. Meenakshi, Director (Student Welfare)",
    email: "welfare@vit.ac.in",
    phone: "+91 416 220 2140",
    urgencyTag: "Club Registrations Open",
    icon: "Users",
    facilities: [
      "Technical Chapters & Cultural Clubs Approval Desk",
      "Riviera & graVITas Fest Coordinating Secretariats",
      "Merit-cum-Means and Sports Scholarship Processing Unit",
      "International Students Affairs & Cross-Cultural Advisory",
      "Student Leadership & Entrepreneurship Incubation Cell"
    ],
    faqs: [
      { q: "How do I join technical chapters like IEEE, ACM, or CSI?", a: "Chapter recruitment drives happen at the start of each semester during Chapter Day stalls." },
      { q: "When are applications for institutional merit scholarships accepted?", a: "Notifications are published on the Student Welfare notice board and VTOP in July of each academic year." }
    ],
    quickAction: "Explore Campus Clubs"
  }
];

export const VIT_METRICS = {
  departments: "8 Core Hubs",
  emergencyDesk: "24/7 Live Desk",
  campusBlocks: "40+ Campus Blocks",
  architecture: "100% Single Page SPA",
  studentEnrollment: "35,000+ Students",
  satisfactionRate: "99.4% Redressal"
};

export const CAMPUS_ANNOUNCEMENTS = [
  "CAMPUS NOTICE: Periyar EVR Central Library reading halls extended to 12:00 Midnight daily.",
  "FFCS ADVISORY: Fall Semester 2026 course preference entry opens this Wednesday on VTOP.",
  "HEALTH ADVISORY: Free seasonal flu vaccination drive underway at VIT Health Centre.",
  "TRANSPORT ALERT: Additional weekend shuttle service scheduled from SJT to Katpadi Junction (KPD)."
];

export const EMERGENCY_CONTACTS = [
  { name: "Campus Emergency Command Center", department: "Central Security Desk", number: "+91 416 220 2000", tag: "Immediate 24/7 Response", critical: true },
  { name: "VIT Health Centre & Ambulance", department: "Medical Emergency", number: "+91 416 220 2161", tag: "24/7 On-Call Doctor & Paramedic", critical: true },
  { name: "Chief Warden Office (Men's Hostels)", department: "Hostel Administration", number: "+91 416 220 2528", tag: "Residential Assistance", critical: false },
  { name: "Chief Warden Office (Ladies' Hostels)", department: "Hostel Administration", number: "+91 416 220 2532", tag: "Residential Assistance", critical: false },
  { name: "Campus Security & Main Gate Control", department: "Gate 1 Central Security", number: "+91 416 220 2101", tag: "Vigilance & Entry Redressal", critical: false },
  { name: "Centre for Technical Support (CTS)", department: "IT Network & VTOP Helpdesk", number: "+91 416 220 2151", tag: "Institutional Systems", critical: false },
  { name: "National Anti-Ragging Helpline", department: "UGC / MHRD Central Portal", number: "1800-180-5522", tag: "Toll-Free 24/7 Anti-Ragging", critical: true }
];
