export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Amir Hassan",
    rating: 5,
    comment: "Best barber in SS15! The fade is always perfect and the service is top-notch. Highly recommended!",
    date: "2024-03-15",
    service: "Fade Haircut"
  },
  {
    id: "2",
    name: "David Tan",
    rating: 5,
    comment: "Been coming here for 2 years. Consistent quality and friendly atmosphere. Worth every ringgit!",
    date: "2024-03-10",
    service: "Classic Haircut"
  },
  {
    id: "3",
    name: "Raj Kumar",
    rating: 5,
    comment: "The beard trim is exceptional! They take their time and get it just right. Very professional.",
    date: "2024-03-08",
    service: "Beard Trim"
  },
  {
    id: "4",
    name: "John Lee",
    rating: 5,
    comment: "Clean shop, skilled barbers, and great prices. My go-to place in Subang Jaya.",
    date: "2024-03-05",
    service: "Combo Package"
  },
  {
    id: "5",
    name: "Faiz Abdullah",
    rating: 5,
    comment: "Issa is a true master! Always knows exactly what I want. Never disappointed.",
    date: "2024-03-01",
    service: "Fade Haircut"
  },
  {
    id: "6",
    name: "Marcus Wong",
    rating: 5,
    comment: "Great experience! My son loves coming here for his haircuts. Kid-friendly and patient.",
    date: "2024-02-28",
    service: "Kids Haircut"
  }
];
