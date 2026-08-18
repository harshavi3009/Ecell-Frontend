export interface EcellEvent {
  title: string;
  subtitle: string;
  displayDate: string;
  startDate: string;
  endDate: string;
  venue: string;
  time: string;
  image: string;
  highlights: string[];
  tags: string[];
  description?: string;
}

export const events: EcellEvent[] = [
  {
    title: "TRANSPRENEUR '26",
    subtitle: "The Journey to Entrepreneurship",
    displayDate: "30–31 January 2026",
    startDate: "2026-01-30",
    endDate: "2026-01-31",
    venue: "Main Audi",
    time: "10 AM – 5 PM",
    image: "/events/transpreneur-26.svg",
    highlights: [
      "Founder sessions from industry experts",
      "Building an ABMC (Asset-Based Business Model Canvas)",
      "Problem identification & solution creation",
      "Idea pitching workshop",
      "BMC workshop & refinement",
      "Winner recognition & founder insights",
    ],
    tags: ["Startup", "Entrepreneurship"],
    description:
      "A two-day flagship entrepreneurship festival featuring real startup journeys from founders and industry experts. Day 1 covers building an ABMC, identifying problems, creating solutions, and pitching ideas. Day 2 focuses on BMC workshops, refining ideas, winner recognition, and founder insights on identifying opportunities, solving real problems, and scaling ventures.",
  },
  {
    title: "EXPO – TECHSETU",
    subtitle: "Startup Expo",
    displayDate: "23 February 2026",
    startDate: "2026-02-23",
    endDate: "2026-02-23",
    venue: "Electrical Parking",
    time: "11:00 AM – 5:00 PM",
    image: "/events/expo-techsetu.svg",
    highlights: [
      "Startup Pitch Competition",
      "Patent Demonstrations",
      "Business Networking",
      "Investor Connects",
    ],
    tags: ["Startup", "Networking"],
    description:
      "A startup expo featuring pitch competitions, patent demonstrations, business networking opportunities, and direct investor connects. A platform for early-stage startups to showcase innovations and connect with the ecosystem.",
  },
  {
    title: "VENTURE VAULT 2.0",
    subtitle: "Entrepreneurial games for 1st years",
    displayDate: "17–18 September 2025",
    startDate: "2025-09-17",
    endDate: "2025-09-18",
    venue: "MBA Audi",
    time: "10 AM onwards",
    image: "/events/venture-vault-2.svg",
    highlights: [
      "Baggage Battle",
      "Memo Marketing",
      "Live interaction with founder of Licksters",
    ],
    tags: ["Entrepreneurship", "Competition"],
    description:
      "Entrepreneurial games exclusively for first-year students featuring Baggage Battle, Memo Marketing, and live interaction with the founder of Licksters. Designed to introduce freshers to entrepreneurial thinking through gamified experiences.",
  },
  {
    title: "IDEATHON '25",
    subtitle: "RCOEM TBI × E-Cell",
    displayDate: "25 & 28 March 2025",
    startDate: "2025-03-25",
    endDate: "2025-03-28",
    venue: "MBA Auditorium, RBU",
    time: "Full day",
    image: "/events/ideathon-25.svg",
    highlights: [
      "₹3,00,000 total seed-money grant for MVP development",
      "Top 3 ideas receive grant upon incubation at RCOEM TBI",
      "Selected ideas may get pre-incubation at RCOEM TBI",
      "Maximum 4 people per team",
    ],
    tags: ["Startup", "Competition"],
    description:
      "Ideathon '25 organized by RCOEM TBI × E-Cell. A competition offering ₹3,00,000 total seed-money grant for MVP development. Top 3 ideas receive a grant upon incubation at RCOEM TBI, with selected ideas eligible for pre-incubation support. Teams of up to 4 members.",
  },
];

export function getEventStatus(endDateISO: string): "Past" | "Upcoming" {
  return new Date(endDateISO) < new Date() ? "Past" : "Upcoming";
}