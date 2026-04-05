export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  experience: string;
}

export const team: TeamMember[] = [
  {
    id: "issa",
    name: "Issa",
    role: "Master Barber & Owner",
    specialty: "Fades & Modern Styles",
    bio: "With over 10 years of experience, Issa brings precision and passion to every cut. Specializing in modern fades and classic styles.",
    image: "/images/team/issa.jpg",
    experience: "10+ years"
  },
  {
    id: "ahmad",
    name: "Ahmad",
    role: "Senior Barber",
    specialty: "Classic Cuts & Beard Grooming",
    bio: "Expert in traditional barbering techniques with a modern twist. Known for perfect beard sculpting.",
    image: "/images/team/ahmad.jpg",
    experience: "8+ years"
  },
  {
    id: "rizal",
    name: "Rizal",
    role: "Barber",
    specialty: "Creative Styles & Hair Design",
    bio: "Young and talented, Rizal excels in creative styling and hair art. Always up-to-date with latest trends.",
    image: "/images/team/rizal.jpg",
    experience: "5+ years"
  }
];
