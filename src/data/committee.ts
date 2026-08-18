export interface CommitteeMember {
  name: string;
  position: string;
  category: string;
  image: string;
  linkedin?: string;
  instagram?: string;
}

// Real committee data from supplied roster (15 members)
export const committeeMembers: CommitteeMember[] = [
  // Leadership (1-3)
  {
    name: "Ved Tidke",
    position: "President",
    category: "Leadership",
    image: "/committee/1.jpg",
  },
  {
    name: "Chetan Lahoti",
    position: "Secretary",
    category: "Leadership",
    image: "/committee/2.jpg",
  },
  {
    name: "Anika Agrawal",
    position: "Treasurer",
    category: "Leadership",
    image: "/committee/3.jpg",
  },
  // Core Committee (4-9) — All "Incharge of" roles
  {
    name: "Rishi Palod",
    position: "Incharge of Events",
    category: "Core Committee",
    image: "/committee/4.jpg",
  },
  {
    name: "Devansh Lakhotia",
    position: "Incharge of Events",
    category: "Core Committee",
    image: "/committee/5.jpg",
  },
  {
    name: "Vedika Jain",
    position: "Incharge of Media",
    category: "Core Committee",
    image: "/committee/6.jpg",
  },
  {
    name: "Vismay Shende",
    position: "Incharge of Media",
    category: "Core Committee",
    image: "/committee/7.jpg",
  },
  {
    name: "Shashwat Sinha",
    position: "Incharge of Publicity",
    category: "Core Committee",
    image: "/committee/8.jpg",
  },
  {
    name: "Subh Surana",
    position: "Incharge of Publicity",
    category: "Core Committee",
    image: "/committee/9.jpg",
  },
  // Domain Teams (10-15)
  {
    name: "Bhumika Reddy",
    position: "Incharge of Design",
    category: "Domain Teams",
    image: "/committee/10.jpg",
  },
  {
    name: "Aarryan Parakh",
    position: "Incharge of Design",
    category: "Domain Teams",
    image: "/committee/11.jpg",
  },
  {
    name: "Saksham Boldhan",
    position: "Incharge of Technical",
    category: "Domain Teams",
    image: "/committee/12.jpg",
  },
  {
    name: "Tilak Sorte",
    position: "Incharge of Technical",
    category: "Domain Teams",
    image: "/committee/13.jpg",
  },
  {
    name: "Kripa Tiwari",
    position: "Hospitality Head",
    category: "Domain Teams",
    image: "/committee/14.jpg",
  },
  {
    name: "Pragnya SS Mogalla",
    position: "Hospitality Head",
    category: "Domain Teams",
    image: "/committee/15.jpg",
  },
];

export const committeeCategories = [
  "Leadership",
  "Core Committee",
  "Domain Teams",
];